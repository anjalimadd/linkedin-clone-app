// src/Login.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { login } from "./features/userSlice"; // Adjust the path based on your file structure

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Dispatch the login action with user information
      dispatch(
        login({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      );
    } catch (error) {
      setError("Failed to log in. Please check your email and password.");
    }
  };

  return (
    <div className="grid place-items-center mx-auto py-24 bg-[#">
      <img
        src="https://i.ibb.co/SKkQh0q/lnkdin.jpg"
        alt="linkin logo"
        className="object-contain h-12 my-5"
      />

      <form onSubmit={handleLogin} className="flex flex-col">
        <input
          type="text"
          placeholder="Full name (required if registering)"
          className="w-[350px] h-12 text-base p-3 mb-2 rounded border border-gray-300"
        />
        <input
          type="text"
          placeholder="Profile picture URL (optional)"
          className="w-[350px] h-12 text-base p-3 mb-2 rounded border border-gray-300"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[350px] h-12 text-base p-3 mb-2 rounded border border-gray-300"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-[350px] h-12 text-base p-3 mb-2 rounded border border-gray-300"
          required
        />
        <button
          type="submit"
          className="w-[356px] h-12 text-base text-white bg-blue-600 rounded"
        >
          Sign In
        </button>
      </form>
      {error && <p className="text-red-600 mt-4">{error}</p>}
      <p className="mt-5">
        Not a member?{" "}
        <span className="text-blue-600 cursor-pointer">Register Now</span>
      </p>
    </div>
  );
}

export default Login;
