import React from "react";
import { SlSocialGoogle } from "react-icons/sl";
import { FaApple } from "react-icons/fa6";
const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center text-center w-80 space-y-8">
        {/* Logo and Brand Name */}
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-3xl font-bold">NutriGhana</h1>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-medium">
          Continue your nutrition journey!
        </h2>

        {/* Sign-up Buttons */}
        <div className="w-full space-y-4">
          <button className="flex items-center justify-center w-full bg-yellow-500 text-white font-medium py-6  shadow-md space-x-2 rounded-full">
            <SlSocialGoogle />

            <span>Sign in with Google</span>
          </button>

          <button className="flex items-center justify-center w-full border border-gray-300 py-6 rounded-full shadow-md space-x-2">
            <FaApple />
            <span>Sign in with Apple</span>
          </button>
        </div>

        {/* Sign-in Link */}
        <div className="text-l space-y-1 text-black">
          <p className="text-black">Don't have an account? {"  "} </p>
          <a href="signIn" className="text-blue-600 font-medium">
            Sign up here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
