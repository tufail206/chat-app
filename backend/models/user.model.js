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



userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
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
    throw new Error("Token generation failed");
  }

}

export default model("User",userSchema)