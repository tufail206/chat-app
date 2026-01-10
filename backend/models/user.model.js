import {model,Schema} from 'mongoose'
import bcrypt from "bcryptjs";
const userSchema = new Schema(
  {
    username: { type: String, required: true,unique:true },
    fullName: { type: String, required: true},
    password: { type: String, required: true },
    profile_photo: { type: String, default: "" },
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
    next(error);
  }
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


export default model("User",userSchema)