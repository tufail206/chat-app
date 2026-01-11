import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../../api/auth-api";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    fullName: "",
    password: "",
    confirm_password: "",
    gender: "",
  });

  const [register, { isLoading, isError, error }] =
    useRegisterMutation();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirm_password) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await register(user).unwrap();

      toast.success(res?.message || "Account created successfully",{duration:2000});
      navigate("/login");
    } catch (err) {
      // ❌ ERROR (from backend)
      toast.error(
        err?.data?.message || "Something went wrong, please try again"
      ,{duration:2000});
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full sm:max-w-md bg-base-100 shadow-2xl rounded-2xl p-6 sm:p-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Register in Socket
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-bounce ml-1"></span>
          io
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input input-success w-full"
            value={user.username}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="input input-success w-full"
            value={user.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="gender"
            placeholder="Gender"
            list="gender"
            className="input input-success w-full"
            value={user.gender}
            onChange={handleChange}
            required
          />
          <datalist id="gender">
            <option value="male" />
            <option value="female" />
          </datalist>

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-success w-full"
            value={user.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            className="input input-success w-full"
            value={user.confirm_password}
            onChange={handleChange}
            required
          />
          {/* LINKS */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-sm">
            <Link
              to="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>

            <p className="text-center sm:text-right">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-success mt-4 text-black disabled:opacity-60"
          >
            {isLoading ? "Creating..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export { Signup as Component };
