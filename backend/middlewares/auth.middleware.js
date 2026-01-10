import jwt from "jsonwebtoken";
import User from "../models/user.model.js"; // adjust path if needed

// =======================
// AUTH (Protected Routes)
// =======================
const auth = async (req, res, next) => {
  try {
    // 1️⃣ Get token from header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      const error = new Error("Not authorized, token missing");
      error.statusCode = 401;
      throw error;
    }

    const token = authHeader.split(" ")[1];

    // 2️⃣ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3️⃣ Get user from DB
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 401;
      throw error;
    }

    // 4️⃣ Attach user to request
    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

// =======================
// ADMIN ONLY
// =======================
const admin = (req, res, next) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      const error = new Error("Admin access only");
      error.statusCode = 403;
      throw error;
    }

    next();
  } catch (error) {
    next(error);
  }
};

export { auth, admin };
