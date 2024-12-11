import React, { useState, useEffect, useCallback } from "react"; 
import { FaArrowCircleLeft, FaArrowCircleRight, FaRegEdit, FaTrashAlt} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import "../../../src/App.css"

const WebsiteSettings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleEditIndex, setVisibleEditIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedItem, setEditedItem] = useState(null); // To track changes made in the modal

  const [carouselImages, setCarouselImages] = useState([
    require("../../assets/carouselImages/card1.png"),
    require("../../assets/carouselImages/card2.png"),
    require("../../assets/carouselImages/card3.png"),
  ]);

  const [carouselItems, setCarouselItems] = useState([
    {
      title: "Welcome to ZeroMiddleman.com",
      subtitle: "Connecting B2B buyers directly to the SOURCE",
      description: "Start Selling & Sourcing at right cost from the Original Source!",
      description2: "Tired of inflated prices and low margin due to unnecessary middlemen?",
      extraInfo: "Your Gateway to Trusted Business",
      extraInfo2: "Your Gateway to Success",
      buttonText: "Get Started",
    },
    {
      title: "Are You the Original Source for a Product or Service?",
      subtitle: "List your business with us for FREE today!",
      description: "Simply submit your application, and once we verify that you're the genuine source, you'll start receiving global inquiries.",
      extraInfo: "Don't miss out on this opportunity to connect directly with buyers worldwide!",
      buttonText: "Get Started",
    },
    {
      title: "Connect directly with verified global sources or access thousands of potential buyers worldwide",
      subtitle: "Cut out the middlemen and expand your reach",
      description: "Easily download all contacts in an Excel file and reach out at your convenience.",
      extraInfo: "",
      extraInfo2: "",
      buttonText: "Get Started",
    },
  ]);

  const navigate = useNavigate();
  const handleNavigation = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(selectedValue); // Navigate to the selected route
    }
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [carouselImages.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

  const handleButtonClick = (index) => {
    setVisibleEditIndex(index); // Show editable fields for the selected slide
    setEditedItem({ ...carouselItems[index] });  // Clone the current item to track changes

    setIsModalOpen(true); 
  };
  const closeModal = () => {
    setIsModalOpen(false);  // Close the modal when the close button is clicked
  };

  const saveChanges = () => {
    // Update the carouselItems only if there are changes
    if (editedItem) {
      handleContentChange(visibleEditIndex, 'title', editedItem.title);
      handleContentChange(visibleEditIndex, 'subtitle', editedItem.subtitle);
      handleContentChange(visibleEditIndex, 'description', editedItem.description);
      handleContentChange(visibleEditIndex, 'description2', editedItem.description2);
      handleContentChange(visibleEditIndex, 'extraInfo', editedItem.extraInfo);
      handleContentChange(visibleEditIndex, 'buttonText', editedItem.buttonText);
      setIsModalOpen(false);  // Close the modal after saving
    }
  };

  const handleFieldChange = (field, value) => {
    // Update the editedItem state when any input field changes
    setEditedItem({
      ...editedItem,
      [field]: value,
    });
  };

  const handleContentChange = (index, field, value) => {
    const updatedContent = [...carouselItems];
    updatedContent[index][field] = value;
    setCarouselItems(updatedContent);
  };

  const handleImageChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedImages = [...carouselImages];
        updatedImages[index] = reader.result;
        setCarouselImages(updatedImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const addNewSlide = () => {
    setCarouselItems((prevItems) => [
      ...prevItems,
      {
        title: "",
        subtitle: "",
        description: "",
        description2: "",
        extraInfo: "",
        extraInfo2: "",
        buttonText: "",
      },
    ]);
    setCarouselImages((prevImages) => [...prevImages, ""]);
  };

  const deleteSlide = (index) => {
    setCarouselItems((prevItems) => prevItems.filter((_, i) => i !== index));
    setCarouselImages((prevImages) => prevImages.filter((_, i) => i !== index));
    if (currentIndex === index) {
      setCurrentIndex(0); // Reset to the first slide if the current slide is deleted
    } else if (currentIndex > index) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
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

  return (
    <div className="mb-20">
      <div className="border-b border-gray-300 py-7">
        <h1 className="text-2xl px-10 font-semibold text-gray-600">
          Website Settings
        </h1>
      </div>
      <div className=" py-5 w-11/12 mx-auto">
        <select
          className="text-xl mx-auto  font-semibold outline-none border-2 border-gray-200 px-5 py-3 rounded-lg"
          name=""
          id=""
          onChange={handleNavigation}

        >
          <option value="/admindashboard/websitesettings">Home Page</option>
          <option value="/admindashboard/banner">Listing Service Home Page</option>
        </select>
      </div>

      <div className="border-2 border-gray-200 rounded-2xl mx-auto w-11/12 p-5">
      <div className="mx-auto">
          <select
            className="option-hover text-xl text-gray-600 hover:bg-gray-100 font-semibold outline-none w-[17%] py-3  rounded-lg"
            onChange={handleNavigation}
          >
            <option className="option-hover " value="/admindashboard/websitesettings">Banners</option>
             <option value="/admindashboard/trendingproducts">Trending Products</option>
           
            <option value="/admindashboard/exploreproducts">
              Explore Products with High Demand / Hot Enquiries
            </option>
            <option value="/admindashboard/successstories">Success Stories</option>
          </select>
        </div>
        <div className="pb-3 flex justify-center items-center gap-3">
        <div className="relative flex flex-col  group">
            {/* Icon */}
            <span className="text-3xl  text-gray-600">
              <IoInformationCircleOutline />
            </span>

            {/* Text to display on hover */}
            <span className="absolute top-10 z-30 bg-blue-100 p-5 w-[40vw] shadow-md rounded-md mt-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum blanditiis ab facilis commodi eaque. In ipsum perspiciatis ratione quidem corrupti labore vero earum sed velit voluptatum. Ab architecto mollitia laudantium?
            </span>
          </div>
          <h1 className="text-3xl  pb-2 text-center font-semibold">Banner Preview</h1>
        </div>
        <div
          className="relative overflow-hidden w-full mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="relative w-full h-[300px] md:h-[400px] flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselImages.map((imgSrc, index) => (
              <div
                key={index}
                className="relative w-full flex-shrink-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${imgSrc})` }}
              >
                <div className="w-full mx-auto absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                  <div className="w-[80%] text-center text-white px-4">
                    <h3 className="text-[24px] md:text-3xl font-bold">{carouselItems[index].title}</h3>
                    <h5 className="text-[18px] md:text-[24px] font-bold">{carouselItems[index].subtitle}</h5>
                    <p className="text-[14px] md:text-[20px] mt-2">{carouselItems[index].description}</p>
                    <p className="text-[14px] md:text-[20px] mt-2">{carouselItems[index].description2}</p>
                    {carouselItems[index].extraInfo && (
                      <p className="mt-2 text-[14px] md:text-[16px]">{carouselItems[index].extraInfo}</p>
                    )}
                    {carouselItems[index].extraInfo2 && (
                      <p className="mt-2 text-[14px] md:text-[16px]">{carouselItems[index].extraInfo2}</p>
                    )}
                    <button className="mt-4 px-4 py-2 bg-transparent border-2 border-blood text-blood font-bold rounded hover:bg-blood hover:text-white transition text-[14px] md:text-[16px]">
                      {carouselItems[index].buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-5 transform -translate-y-1/2 p-1 text-3xl bg-white rounded-full shadow-lg text-black hover:bg-gray-100"
          >
            <FaArrowCircleLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-5 transform -translate-y-1/2 p-1 text-3xl bg-white rounded-full shadow-lg text-black hover:bg-gray-100"
          >
            <FaArrowCircleRight />
          </button>
        </div>

        <div className="mt-4 text-center">
            <button
              onClick={addNewSlide}
              className="flex gap-2 items-center bg-green-500 px-10 font-medium text-white hover:bg-green-600 py-2 rounded-md"
            >

<span className="text-2xl ">
                <IoMdAddCircleOutline />
              </span>
               New Slide
            </button>
          </div>
              {/* Buttons to toggle editable fields */}
      <div className="flex gap-10 pt-5 pb-10 overflow-x-auto">
        {carouselItems.map((_, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="flex items-center px-1 justify-between">
              <p>{getOrdinalSuffix(index + 1)} slide</p>
              <button
                onClick={() => deleteSlide(visibleEditIndex)}
                className="text-blood hover:bg-red-100 p-2 rounded-md"
              >
                <FaTrashAlt />
              </button>
            </div>  
            <button
              onClick={() => handleButtonClick(index)}
              className="flex text-lg font-medium text-gray-800 items-center justify-center gap-1 px-20 py-2 rounded-md border border-gray-500 bg-gray-300"
            >
              <FaRegEdit />
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* Modal for editable fields */}
      {isModalOpen && (
        <div className="fixed pt-48 pb-20 inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 overflow-scroll">
          <div className="bg-white p-6  rounded-md w-[70%] relative  ">
            <button onClick={closeModal} className="text-red-500 hover:text-red-700 absolute top-2 right-2">
              X
            </button>
            <h2 className="text-xl text-oceanBlue font-semibold mb-4">
              Editable Fields for Slide {visibleEditIndex + 1}
            </h2>
           <div className="flex flex-col gap-5 text-gray-500">
           <div className="flex w-full gap-10">
            <div className="w-full flex flex-col gap-2">
            <label className="text-lg font-medium text-oceanBlue">Title</label>
            <input
              className="block outline-gray-300 w-full mb-2 p-2 border-b-2"
              type="text"
              value={editedItem?.title || ''}
              onChange={(e) => handleFieldChange('title', e.target.value)}
            />
            </div>
            <div className="w-full flex flex-col gap-2">
            <label className="text-lg font-medium text-oceanBlue">Subtitle</label>
            <input
              className="block outline-gray-300 w-full mb-2 p-2 border-b-2"
              type="text"
              value={editedItem?.subtitle || ''}
              onChange={(e) => handleFieldChange('subtitle', e.target.value)}
            />
                        </div>

          
              
            </div>
           
          <div className="flex w-full gap-10">
           
          <div className="w-full flex flex-col gap-2">
            <label className="text-lg font-medium text-oceanBlue">Description</label>
            <textarea
              className="block outline-gray-300 w-full mb-2 p-2 border-2 rounded-md"
              value={editedItem?.description || ''}
              onChange={(e) => handleFieldChange('description', e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-lg font-medium text-oceanBlue">Description 2</label>
            <textarea
              className="block outline-gray-300 w-full mb-2 p-2 border-2 rounded-md"
              value={editedItem?.description2 || ''}
              onChange={(e) => handleFieldChange('description2', e.target.value)}
            />
            </div>
          </div>
          
          <div className="flex w-full gap-10">
          <div className="w-full flex flex-col gap-2">     
          <label className="text-lg font-medium text-oceanBlue">Image</label>
            <input
              className="block mb-4 border-2 rounded-md p-2 "
              type="file"
              onChange={(event) => handleImageChange(visibleEditIndex, event)}
            />
              </div>
            <div className="w-full flex flex-col gap-2">
            <label className="text-lg font-medium text-oceanBlue">Button Text</label>
            <input
              className="block outline-gray-300 w-full mb-2 p-2 border-b-2"
              type="text"
              value={editedItem?.buttonText || ''}
              onChange={(e) => handleFieldChange('buttonText', e.target.value)}
            />
              </div>
            </div>
            <div className="flex flex-col w-full">
            <label className="text-lg font-medium text-oceanBlue">Extra Info</label>
            <textarea
              className="block outline-gray-300 w-full mb-2 p-2 border"
              value={editedItem?.extraInfo || ''}
              onChange={(e) => handleFieldChange('extraInfo', e.target.value)}
            />
            </div>
           </div>
            {/* Action Buttons */}
            <div className="flex justify-between mt-4">
              <button
                onClick={closeModal}
                className="bg-gray-300 text-black px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={saveChanges}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      
       
      </div>
    </div>
  );
};

export default WebsiteSettings;


