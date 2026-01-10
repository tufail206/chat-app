import User from "../models/user.model.js";

const register = async (req, res, next) => {
  try {
    const { username, fullName, password, conform_password, gender } = req.body;

    if (!username || !fullName || !password || !conform_password || !gender) {
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

    const createUser = await User.create({
      username,
      fullName,
      password,
      gender,
    });

    return res.status(500).json({
      message: "registration successfully",
      error: false,
      success: true,
      user: createUser,
    });
  } catch (error) {
    console.log("e--", error);
    return res.status(500).json({
      message: "registration failed",
      error: true,
      success: false,
    });
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(409).json({
        message: "all field is required",
        success: false,
        error: true,
      });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({
        message: "invalid username or email",
        success: false,
        error: true,
      });
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "incorrect email or password",
        success: false,
        error: true,
      });
    }

    return res.status(200).json({
      message: "login successfully",
      error: false,
      success: true,
      token: await user.generateToken(),
    });
  } catch (error) {
    next(error)
  }
};

const userProfile=async(req,res,next)=>{
  try {
    
    const user=req.user

    res.status(200).json({
      message: "user data fetch successfully",
      user,
    });

  } catch (error) {
    next(error)
  }
}

const getAllUsers=async(req,res,next)=>{
  try {
    
    const users=await User.find()
    
    if(users.length<=0){
    return res.status(404).json({
      message:"no user found",
      error:true,
      success:false
    })
    }

   return res.status(200).json({
     message: "all users data",
     error: false,
     success: true,
     users
   });

  } catch (error) {
    next(error)
  }
}

export { register, login, userProfile, getAllUsers };
