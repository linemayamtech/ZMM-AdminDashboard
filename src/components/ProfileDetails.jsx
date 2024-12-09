import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

const ProfileDetails = () => {
  const [showModal, setShowModal] = useState(false); // Toggle first modal
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false); // Toggle second modal
  const [isSubmitted, setIsSubmitted] = useState(false); // Toggle success modal

  // Old Password
  const [oldPassword, setOldPassword] = useState("");
  const [oldPasswordError, setOldPasswordError] = useState("");

  // New Password
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState({});

  const handleOldPasswordSubmit = (e) => {
    e.preventDefault();
    if (!oldPassword.trim()) {
      setOldPasswordError("Required");
    } else {
      setOldPasswordError("");
      setShowModal(false); // Close the first modal
      setIsPasswordModalOpen(true); // Open the new password modal
    }
  };

  const handleNewPasswordSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    if (!newPassword.trim()) {
      errors.newPassword = "Required";
    }
    if (!confirmPassword.trim()) {
      errors.confirmPassword = "Required";
    } else if (newPassword !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length === 0) {
      setIsPasswordModalOpen(false); // Close the second modal
      setIsSubmitted(true); // Show the success message modal
    }
    setNewPasswordError(errors);
  };

  return (
    <>
      <div className="mb-20">
        <div className="border-b border-gray-300 py-7">
          <h1 className="text-2xl px-10 font-semibold text-gray-600">
            Profile Details
          </h1>
        </div>
        <div className="text-center flex flex-col gap-3 py-5">
          <h3 className="text-xl font-semibold text-gray-600">Hi, Mohamed</h3>
          <h4 className="text-lg">
            Welcome to{" "}
            <span className="text-[#ff0000] font-semibold text-xl">
              ZeroMiddleman
            </span>{" "}
            Admin Dashboard
          </h4>
          <p className="px-56">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            quis minus animi illum unde impedit, ratione odit accusamus
            laboriosam distinctio ducimus consectetur fuga omnis provident
            temporibus modi voluptatibus? Ipsam, hic?
          </p>
        </div>
        <div className="border-2 border-gray-200 rounded-2xl w-3/4 mx-auto p-5">
          <div className="flex items-center justify-between border-b pb-4 border-gray-300">
            <p className="text-xl font-semibold">Details</p>
            <button
              className="flex items-center p-1 px-5 rounded-md bg-[#171c26] text-white"
              onClick={() => setShowModal(true)}
            >
              <FaEdit className="mr-2" />
              Edit
            </button>
            {/* Old Password Modal */}
            {showModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md relative">
                  <button
                    className="absolute top-2 right-2 text-gray-600"
                    onClick={() => setShowModal(false)}
                  >
                    &times;
                  </button>
                  <h2 className="text-xl font-bold mb-2">
                    Edit Profile Details
                  </h2>
                  <p className="mb-4">Enter your old password to proceed.</p>
                  <form onSubmit={handleOldPasswordSubmit}>
                    <div className="mb-4 px-5 flex flex-col gap-2">
                      <label
                        className="block text-gray-700 text-sm font-medium"
                        htmlFor="oldPassword"
                      >
                        Old Password*
                      </label>
                      <input
                        type="password"
                        id="oldPassword"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        placeholder="Enter your old password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {oldPasswordError && (
                        <p className="text-red-500 text-sm">
                          {oldPasswordError}
                        </p>
                      )}
                      <button
                        type="submit"
                        className="w-full bg-[#ff0000] hover:bg-red-700 text-white font-bold my-5 py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            {/* New Password Modal */}
            {isPasswordModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md relative">
                  <button
                    className="absolute top-2 right-2 text-gray-600"
                    onClick={() => setIsPasswordModalOpen(false)}
                  >
                    &times;
                  </button>
                  <h2 className="text-xl font-bold mb-2">New Password</h2>
                  <p className="mb-4">Set a new password below.</p>
                  <form onSubmit={handleNewPasswordSubmit}>
                    <div className="mb-4 px-5 flex flex-col gap-2">
                      <label className="block text-gray-700 text-sm font-medium">
                        New Password*
                      </label>
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {newPasswordError.newPassword && (
                        <p className="text-red-500 text-sm">
                          {newPasswordError.newPassword}
                        </p>
                      )}
                      <label className="block text-gray-700 text-sm font-medium mt-4">
                        Confirm Password*
                      </label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm new password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {newPasswordError.confirmPassword && (
                        <p className="text-red-500 text-sm">
                          {newPasswordError.confirmPassword}
                        </p>
                      )}
                      <button
                        type="submit"
                        className="w-full bg-[#ff0000] hover:bg-red-700 text-white font-bold my-5 py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            {/* Success Modal */}
            {isSubmitted && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md relative">
                  <button
                    className="absolute top-2 right-2 text-gray-600"
                    onClick={() => setIsSubmitted(false)}
                  >
                    &times;
                  </button>
                  <h2 className="text-xl font-bold mb-2">Success</h2>
                  <p className="mb-4">Your password has been updated!</p>
                  <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* Other Details */}
          <div className="flex gap-10 justify-center items-center py-10">
            <div className="border-e  w-40 p-5 border-gray-300 flex flex-col items-center justify-center gap-10">
              <img
                className="w-full "
                src={require("../assets/Abu Photo.png")}
                alt=""
              />
              <input className="w-[85%]" type="file" name="" id="" />
            </div>
            <div className="">
              <table className="">
                <tr className="">
                  <td className="p-3">Name :</td>
                  <td className="p-3">Mohamed</td>
                </tr>
                <tr>
                  <td className="p-3">Email :</td>
                  <td className="p-3">abucr3@gmail.com</td>
                </tr>
                <tr>
                  <td className="p-3">Role :</td>
                  <td className="p-3">Admin</td>
                </tr>
              </table>
            </div>
            <div>
              <table>
                <tr>
                  <td className="p-3">Name :</td>
                  <td className="p-3">Mohamed</td>
                </tr>
                <tr>
                  <td className="p-3">Email :</td>
                  <td className="p-3">abucr3@gmail.com</td>
                </tr>
                <tr>
                  <td className="p-3">Role :</td>
                  <td className="p-3">Admin</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
