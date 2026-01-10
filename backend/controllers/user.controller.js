import User from "../models/user.model.js";

const register = async (req, res) => {
  try {
    const { username, fullName, password, conform_password,gender } = req.body;

    if ((!username, !fullName, !password, !conform_password, !gender)) {
      return res.status(400).json({
        message: "All fields are required",
        error: true,
        success: false,
      });
    }

    if (password != conform_password) {
      return res.status(400).json({
        message: "password and confirmed password must be same",
        error: true,
        success: false,
      });
    }

    const isExist = await User.findOne({ username });
    if (isExist) {
      return res.status(400).json({
        message: "user is already exist",
        error: true,
        success: false,
      });
    }

    const createUser = await User.create({ username, fullName, password ,profile_photo,gender,gender});



   return res.status(500).json({
     message: "registration successfully",
     error: false,
     success: true,
     user:createUser
   });
  } catch (error) {
    return res.status(500).json({
      message: "registration failed",
      error: true,
      success: false,
    });
  }
};

const login=async(req,res)=>{
  try {
    
  } catch (error) {
    
  }
}

export {register,login}