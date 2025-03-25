import React, { useState } from "react";

const Login = () => {
  const [isSignup, setIsSignup] = useState(true);

  return (
      <div className="flex h-screen bg-white w-full  ">
        {/* Left Side - Petrol Pump Illustration */}
        <div className="w-1/2 bg-gradient-to-b from-blue-300 to-pink-200 flex justify-center items-center p-5">
          <img
            src="/petrol-pump-img.png" 
            alt="Petrol Pump"
            className="w-full h-auto" 
          />
        </div>
        
        {/* Right Side - Signup/Login Form */}
        <div className="w-1/2 p-8 bg-custom-gradient flex flex-col justify-center">
          <div className="w-full">
          <h2 className="text-3xl font-bold text-center mb-6 w-full">{isSignup ? "Signup Form" : "Login Form"}</h2>
          <div className="flex justify-center mb-4 bg-white w-full  rounded-full border-2 border-l-black border-t-black border-b-black border-opacity-25  text-lg ">
            <button 
              className={`px-6 py-2 w-1/2 rounded-full ${!isSignup ? "bg-red-500  text-white" : "bg-transparent"}`}
              onClick={() => setIsSignup(false)}
            >
              Login
            </button>
            <button 
              className={`px-6 w-1/2 py-2 rounded-full ${isSignup ? "bg-red-500 text-white" : "bg-transparent"}`}
              onClick={() => setIsSignup(true)}                                    
            > 
              Signup
            </button>
          </div>
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border rounded"
          />
          {isSignup && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 mb-4 border rounded"
            />
          )}
          <button className="w-full p-3 bg-button-gradient text-white rounded-full">
            {isSignup ? "Signup" : "Login"}
          </button>
        </div>
      </div>
    // </div>
  );
};

export default Login;
