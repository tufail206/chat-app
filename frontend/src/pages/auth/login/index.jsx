import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../api/auth-api";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",

  });

  const [login, { isLoading }] = useLoginMutation();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(user).unwrap();

      toast.success(res?.message || "login successfully", {
        duration: 2000,
      });
      navigate("/");
    } catch (err) {
      // ❌ ERROR (from backend)
      toast.error(
        err?.data?.message || "Something went wrong, please try again",
        { duration: 2000 }
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full sm:max-w-md bg-base-100 shadow-2xl rounded-2xl p-6 sm:p-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Login in Socket
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
            type="password"
            name="password"
            placeholder="Password"
            className="input input-success w-full"
            value={user.password}
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
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 font-medium hover:underline"
              >
                Register
              </Link>
            </p>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-success mt-4 text-black disabled:opacity-60"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export { Login as Component };
