import React, { useState, useEffect, useCallback } from "react"; 
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoInformationCircleOutline } from "react-icons/io5";

const Banners = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [carouselImages, setCarouselImages] = useState([
    require("../../../assets/carouselImages/Buyer.jpg"),
    require("../../../assets/carouselImages/Seller.jpg"),
    require("../../../assets/carouselImages/Experience.jpg"),
  ]);

  const [carouselItems, setCarouselItems] = useState([
    {
        title: "Buyer Listing Services",
        subtitle: "",
      description: " Are You tired of buying from middlemen that eats away all your margin? List your requirements with us for FREE today!",
      description2: "",
      extraInfo: " Simply signup as Buyer, and post all your requirements and you'll start receiving quotes only from a genuine source that simplifies your sourcing and increases your margin by several folds. Don't miss out on this opportunity to connect directly with real sources worldwide!",
      extraInfo2: "",
      buttonText: "CLick Here",
    },
    {
        title: "Experience the Power of Zero Middle Man!",
        subtitle: "",
      description: "Are you ready to elevate your business? Schedule a personalized demo with us and discover how our platform can streamline your buying and selling processes.",
      extraInfo: "",
      buttonText: "Book Demo",
    },
    {
      title: "Seller Listing Services",
      subtitle: "Cut out the middlemen and expand your reach",
      description: "Are You the Original Source for a Product or Service? List your business with a FREE demo",
      extraInfo: "Simply submit your application, and once we verify that you're the genuine source, you'll start receiving global inquiries. Don't miss out on this opportunity to connect directly with buyers worldwide!",
      extraInfo2: "",
      buttonText: "Click Here",
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

  const handleContentChange = (index, field, value) => {
    const updatedContent = [...carouselItems];
    updatedContent[index][field] = value;
    setCarouselItems(updatedContent);
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
      >
        <option value="/admindashboard/banner">Listing Service Home Page</option>
      <option value="/admindashboard/websitesettings">Home Page</option>
      </select>
    </div>

    <div className="border-2 border-gray-200 rounded-2xl mx-auto w-11/12 p-5">
    <div className="mx-auto">
        <select
          className="text-xl text-gray-600 font-semibold outline-none w-[17%] py-3  rounded-lg"
          onChange={handleNavigation}
        >
          <option value="/admindashboard/banner">Banners</option>
           <option value="/admindashboard/lisitngproducts">Trending Products</option>
         
          <option value="/admindashboard/listingexplore">
            Explore Products with High Demand / Hot Enquiries
          </option>
          
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
        <h1 className="text-3xl  pb-2 text-center font-semibold"> Banner Preview</h1>
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
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white px-4">
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

      <div>
        <h1 className="text-xl px-5 py-10 text-center font-normal">Edit your Carousel content and images here</h1>
        <div className="space-y-8">
          {carouselItems.map((item, index) => (
            <div key={index} className="border p-4 rounded-md">
              <label htmlFor={`image-${index}`}>Image {index + 1}</label>
              <input
                className="block mb-4"
                type="file"
                id={`image-${index}`}
                onChange={(event) => handleImageChange(index, event)}
              />
              <label>Title</label>
              <input
                className="block outline-gray-300  w-full mb-2 p-2 border"
                type="text"
                value={item.title}
                onChange={(e) => handleContentChange(index, "title", e.target.value)}
              />
              <label>Subtitle</label>
              <input
                className="block outline-gray-300  w-full mb-2 p-2 border"
                type="text"
                value={item.subtitle}
                onChange={(e) => handleContentChange(index, "subtitle", e.target.value)}
              />
              <label>Description</label>
              <textarea
                className="block outline-gray-300  w-full mb-2 p-2 border"
                value={item.description}
                onChange={(e) => handleContentChange(index, "description", e.target.value)}
              />
              <label>Description 2</label>
              <textarea
                className="block outline-gray-300  w-full mb-2 p-2 border"
                value={item.description2}
                onChange={(e) => handleContentChange(index, "description2", e.target.value)}
              />
              <label>Extra Info</label>
              <textarea
                className="block outline-gray-300  w-full mb-2 p-2 border"
                value={item.extraInfo}
                onChange={(e) => handleContentChange(index, "extraInfo", e.target.value)}
              />
              <label>Extra Info 2</label>
              <textarea
                className="block outline-gray-300  w-full mb-2 p-2 border"
                value={item.extraInfo2}
                onChange={(e) => handleContentChange(index, "extraInfo2", e.target.value)}
              />
              <label>Button Text</label>
              <input
                className="block outline-gray-300  w-full mb-2 p-2 border"
                type="text"
                value={item.buttonText}
                onChange={(e) => handleContentChange(index, "buttonText", e.target.value)}
              />
              <button
                onClick={() => deleteSlide(index)}
                className="mt-4 px-4 py-2 border-2 border-blood text-blood font-bold rounded hover:bg-blood hover:text-white transition"
              >
                Delete Slide
              </button>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={addNewSlide}
            className="px-4 py-2 bg-oceanBlue text-white font-bold rounded hover:text-oceanBlue hover:bg-white hover:border-2 border-oceanBlue transition"
          >
            Add New Slide
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banners