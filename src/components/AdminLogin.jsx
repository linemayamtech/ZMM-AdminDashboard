import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default behavior
    let validationErrors = {};

    if (!email.trim()) {
      validationErrors.email = "This field is required";
    }
    if (!password.trim()) {
      validationErrors.password = "This field is required";
    }

    setErrors(validationErrors);

    // Proceed with login only if no validation errors
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted with:", { email, password });
      navigate("/admindashboard"); // Navigate after successful validation
    }
  };

  return (
    <>
      <div className="background w-full h-[100vh] flex items-center ">
        <div className="flex justify-center mx-auto w-3/4 h-[72vh] rounded-xl ">
          <div className="bgimg w-1/2 rounded-s-2xl">
            <div className="h-full flex flex-col items-center justify-center gap-5 px-20 ">
              <h1 className="text-white text-4xl">
                Welcome to <span className="text-[#ff0000]">ZeroMiddleMan</span> Admin Dashboard
              </h1>
              <p className="text-white ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
                massa. Vestibulum lacinia arcu eget nulla. Donec vitae sapien ut
                libero venenatis faucibus.
              </p>
            </div>
          </div>
          <div className="bg-white w-1/2 p-5 px-7 rounded-e-2xl">
            <div className="flex justify-center">
              <img src={require("../assets/logo.png")} alt="" />
            </div>
            <div className="mb-5">
              <h1 className="text-[#ff0000] text-xl font-semibold text-center">
                ADMIN LOGIN
              </h1>
            </div>
            <div className="flex flex-col gap-5">
              {/* Email Field */}
              <div className="flex flex-col">
                <div className="px-2 flex items-center gap-2">
                  <span className="text-2xl">
                    <IoIosMail />
                  </span>
                  <label className="text-xl" htmlFor="email">
                    Mail Id
                  </label>
                </div>
                <input
                  id="email"
                  className="px-5 py-2 outline-[#ff0000] border-2 border-gray-200 rounded-md"
                  type="text"
                  placeholder="Enter your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="flex flex-col">
                <div className="px-2 flex items-center gap-2">
                  <span className="text-xl">
                    <FaLock />
                  </span>
                  <label className="text-xl" htmlFor="password">
                    Password
                  </label>
                </div>
                <input
                  id="password"
                  className="px-5 py-2 outline-[#ff0000] border-2 border-gray-200 rounded-md"
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex justify-between">
                  {errors.password && (
                    <p className=" text-red-500 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
                  <p className="text-blue-500 text-sm underline text-end ">
                    Forget Password?
                  </p>
                </div>
              </div>
            </div>

            {/* Login Button */}
            <div className="flex justify-center mt-5">
              <button
                className="px-24 py-2 text-white font-semibold text-lg bg-[#ff0000] hover:bg-[#d93030] rounded-md"
                type="button"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
