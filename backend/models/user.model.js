import {model,Schema} from 'mongoose'
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
const userSchema = new Schema(
  {
    username: { type: String, required: true,unique:true },
    fullName: { type: String, required: true},
    password: { type: String, required: true },
    profile_photo: { type: String, default: "" },
    role:{type: String, enum: ["user", "admin"], default:"user" },
    gender: { type: String, enum: ["male", "female"], required: true },
  },
  {
    timestamps: true,
  }
);




userSchema.pre("save", async function (next) {
  // only hash if password is modified
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
  next(error)
  }
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


userSchema.methods.generateToken=async function(){
  try {
    return jwt.sign(
      {
        username:this.username,
        fullname:this.fullname,
        role:this.role,
        id:this._id.toString()

      },
      process.env.JWT_SECRET,
      {
        expiresIn:"30d"
      }
    )
  } catch (error) {
    next(error)
  }

}

export default model("User",userSchema)