import React, { useState } from "react";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaRegEdit,
} from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { IoInformationCircleOutline } from "react-icons/io5";

const SuccessStories = () => {
  const initialSlides = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "JOHN SMITH",
      image: require("../../assets/successStories/john.png"),
    },
    {
      text: "Another slide content here.",
      name: "JANE DOE",
      image: require("../../assets/Abu Photo.png"),
    },
    {
      text: "More information in this slide.",
      name: "MIKE ROSS",
      image: require("../../assets/successStories/john.png"),
    },
    {
      text: "Yet another slide with interesting content.",
      name: "RACHEL GREEN",
      image: require("../../assets/Abu Photo.png"),
    },
  ];

  const [slides, setSlides] = useState(initialSlides);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({ text: "", name: "", image: null });

  // Navigation Handlers
  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Open Edit Modal
  const handleEditClick = (index) => {
    setEditingIndex(index);
    setFormData({
      text: slides[index].text,
      name: slides[index].name,
      image: null, // Reset image to allow new upload
    });
    setIsEditing(true);
  };

  const navigate = useNavigate();
  const handleNavigation = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(selectedValue); // Navigate to the selected route
    }
  };

  // Update Form Data
  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "image" ? files[0] : value,
    }));
  };

  // Save Edits
  const handleSave = () => {
    const updatedSlides = [...slides];

    updatedSlides[editingIndex] = {
      ...updatedSlides[editingIndex],
      text: formData.text,
      name: formData.name,
      image: formData.image
        ? URL.createObjectURL(formData.image) // Use the new image if uploaded
        : slides[editingIndex].image, // Retain old image if no new image is uploaded
    };

    setSlides(updatedSlides);
    setIsEditing(false);

    // Reset image in formData after saving
    setFormData((prevData) => ({
      ...prevData,
      image: null,
    }));
  };

  const handleDelete = (index) => {
    const updatedSlides = slides.filter((_, i) => i !== index);
    setSlides(updatedSlides);

    // Adjust the current index if necessary
    if (currentIndex >= updatedSlides.length) {
      setCurrentIndex(updatedSlides.length - 1); // Move to the last slide if the current index is out of bounds
    }
  };

  const getOrdinalSuffix = (num) => {
    if (num % 100 >= 11 && num % 100 <= 13) return `${num}th`;
    switch (num % 10) {
      case 1:
        return `${num}st`;
      case 2:
        return `${num}nd`;
      case 3:
        return `${num}rd`;
      default:
        return `${num}th`;
    }
  };

  // Function to add a new slide
  const handleAddNewSlide = () => {
    const newSlide = {
      text: "New slide content here.", // Default text
      name: "New User", // Default name
      image: require("../../assets/successStories/john.png"), // Placeholder/default image
    };
    setSlides([...slides, newSlide]);
  };

  return (
    <div className="mb-20">
      <div className="border-b border-gray-300 py-7">
        <h1 className="text-2xl px-10 font-semibold text-gray-600">
          Website Settings
        </h1>
      </div>
      <div className="px-14 py-10 flex items-center gap-2 mx-auto">
        <select  onChange={handleNavigation} className="text-xl font-semibold outline-none border-2 border-gray-200 px-5 py-3 rounded-lg">
        <option value="/admindashboard/websitesettings">Home Page</option>
        <option value="/admindashboard/banner">Listing Service Home Page</option>
        </select>
      </div>
      <div className="border-2 border-gray-200 rounded-2xl mx-auto w-11/12 p-5">
        <div className="mx-auto">
          <select
            className="text-xl text-gray-600 font-semibold outline-none w-[17%] py-3  rounded-lg"
            onChange={handleNavigation}
          >
            <option value="/admindashboard/successstories">Success Stories</option>
            <option value="/admindashboard/websitesettings">Banners</option>
            <option value="/admindashboard/trendingproducts">Trending Products</option>

            <option value="/admindashboard/exploreproducts">
              Explore Products with High Demand / Hot Enquiries
            </option>
          </select>
        </div>
        <div className="flex justify-center items-center gap-3">
          <div className="relative flex flex-col  group">
            {/* Icon */}
            <span className="text-3xl pt-1.5 text-gray-600">
              <IoInformationCircleOutline />
            </span>

            {/* Text to display on hover */}
            <span className="absolute top-10 z-30 bg-blue-100 p-5 w-[40vw] shadow-md rounded-md mt-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum blanditiis ab facilis commodi eaque. In ipsum perspiciatis ratione quidem corrupti labore vero earum sed velit voluptatum. Ab architecto mollitia laudantium?
            </span>
          </div>
          <h1 className="text-3xl font-semibold"> Success Stories</h1>
        </div>
        <div className="w-full py-5 flex flex-col justify-center items-center TestinomialImg">
          <div className="flex flex-col items-center justify-center w-full max-w-[1400px] h-[330px] text-white font-bold rounded-[20px] bg-[#333333] backdrop-blur-lg relative">
            <button
              onClick={handleLeftClick}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl"
            >
              <FaArrowCircleLeft />
            </button>
            <p className="text-sm mx-10 md:text-lg italic text-center md:mx-32">
              <span>"</span>
              {slides[currentIndex].text}
            </p>
            <button
              onClick={handleRightClick}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-3xl"
            >
              <FaArrowCircleRight />
            </button>
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].name}
              className="mt-4 h-24 w-24"
            />
            <h1 className="italic text-lg">{slides[currentIndex].name}</h1>
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-2xl p-5">
          <div>
            <button
              onClick={handleAddNewSlide}
              className="flex gap-2 items-center bg-green-500 px-10 font-medium text-white hover:bg-green-600 py-2 rounded-md"
            >
              <span className="text-2xl ">
                <IoMdAddCircleOutline />
              </span>
              New Slide
            </button>
          </div>
          <div className="flex gap-10 pt-5 pb-10 overflow-x-auto">
            {slides.map((slide, index) => (
              <div key={index} className="flex flex-col gap-1">
                <div className="flex items-center px-1 justify-between">
                  <p>{getOrdinalSuffix(index + 1)} slide</p>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-blood hover:bg-red-100 p-2 rounded-md"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
                <button
                  onClick={() => handleEditClick(index)}
                  className="flex text-lg font-medium text-gray-800 items-center justify-center gap-1 px-20 py-2 rounded-md border border-gray-500 bg-gray-300"
                >
                  <FaRegEdit />
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="fixed  top-32 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-5 w-1/2">
            <h2 className="text-lg font-bold mb-4">Edit Slide</h2>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              className="w-full outline-gray-300 border-b-2 px-2 py-1 mb-4"
            />
            <label className="block mb-2">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleFormChange}
              className="w-1/2 border-2 rounded-md mb-4"
            />
            <label className="block mb-2">Text</label>
            <textarea
              name="text"
              value={formData.text}
              onChange={handleFormChange}
              className="w-full outline-gray-300 rounded-md border-2 px-2 py-1 mb-4"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsEditing(false)}
                className="px-10 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-10 py-2 bg-oceanBlue hover:text-oceanBlue hover:border-2 border-oceanBlue hover:bg-white text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessStories;
