import React, { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    fullName: "",
    password: "",
    confirm_password: "",
    gender: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.password !== user.confirm_password) {
      alert("Passwords do not match");
      return;
    }

    console.log(user); // send to API later
  };

  return (
    <div className=" flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-xl p-8">
        <h3 className="text-3xl font-bold text-center mb-6">
          Register in Socket
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-bounce ml-1"></span>
          io
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Username */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input input-success w-full"
            value={user.username}
            onChange={handleChange}
            required
          />

          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="input input-success w-full"
            value={user.fullName}
            onChange={handleChange}
            required
          />

          {/* Gender */}
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

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-success w-full"
            value={user.password}
            onChange={handleChange}
            required
          />

          {/* Confirm Password */}
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            className="input input-success w-full"
            value={user.confirm_password}
            onChange={handleChange}
            required
          />

          {/* Submit */}
          <button type="submit" className="btn btn-success mt-4 text-black">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export { Signup as Component };
