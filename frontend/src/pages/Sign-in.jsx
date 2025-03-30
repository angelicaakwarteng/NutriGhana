import { SlSocialGoogle } from "react-icons/sl";
import { FaApple } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const SignIn = () => {
  return (
    <div>
      {" "}
      <div className="h-screen flex justify-center items-center ">
        <div className="flex flex-col items-center text-center w-80 space-y-6">
          {/* Logo and Brand Name */}
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-4xl font-bold -mb-3 ">NutriGhana</h1>
          </div>

          {/* Welcome Text */}
          <h2 className="text-2xl font-medium">
            Begin your nutrition journey!
          </h2>

          {/* Sign-up Buttons */}
          <div className="w-full space-y-4">
            <button className="flex items-center justify-center w-full bg-yellow-500 text-white font-medium py-6  shadow-md space-x-2 rounded-full cursor-pointer">
              <SlSocialGoogle />

              <span>Sign up with Google</span>
            </button>

            <button className="flex items-center justify-center w-full border border-gray-300 py-6 rounded-full shadow-md space-x-2 cursor-pointerr">
              <FaApple />
              <span>Sign up with Apple</span>
            </button>
          </div>

          {/* Login Form */}
          <form action="" className="w-full space-y-3">
            {/* Name Input */}
            <div className="relative w-full">
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blacktext-xl h-5 w-5 text-yellow-500" />
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 pl-12  border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Email Input */}
            <div className="relative w-full">
              <MdEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blacktext-xl h-5 w-5 text-yellow-500 " />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 pl-12  border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Password Input */}
            <div className="relative w-full ">
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2  text-xl text-yellow-500" />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 pl-12  border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black "
              />
            </div>

            {/* Submit Button */}
            <button className="w-full bg-black text-white font-medium py-4 rounded-full shadow-md transition duration-200 cursor-pointer">
              Sign up
            </button>
          </form>

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
