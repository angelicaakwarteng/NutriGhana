import React from "react";
import { SlSocialGoogle } from "react-icons/sl";
import { FaApple } from "react-icons/fa6";

const SignIn = () => {
  return (
    <div>
      {" "}
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col items-center text-center w-80 space-y-8">
          {/* Logo and Brand Name */}
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-3xl font-bold">NutriGhana</h1>
          </div>

          {/* Welcome Text */}
          <h2 className="text-2xl font-medium">
            Begin your nutrition <br /> journey!
          </h2>

          {/* Sign-up Buttons */}
          <div className="w-full space-y-4">
            <button className="flex items-center justify-center w-full bg-yellow-500 text-white font-medium py-6  shadow-md space-x-2 rounded-full">
              <SlSocialGoogle />

              <span>Sign up with Google</span>
            </button>

            <button className="flex items-center justify-center w-full border border-gray-300 py-6 rounded-full shadow-md space-x-2">
              <FaApple />
              <span>Sign up with Apple</span>
            </button>
          </div>

          {/* Sign-in Link */}
          <div className="text-l space-y-1 text-black">
            <p className="text-black"> Already have an account? {"  "} </p>
            <a href="/login" className="text-blue-600 font-medium">
              Sign in here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
