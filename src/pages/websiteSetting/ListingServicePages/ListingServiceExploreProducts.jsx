import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import country from "../../../assets/products/Country.png";
import { IoInformationCircleOutline } from "react-icons/io5";

const ListingServiceExploreProducts = () => {

    const [selectedCards, setSelectedCards] = useState([]);

    const cardsData = [
      {
        id: 1,
        countryFlag: country,
        title: "Wanted : Fresh fruits like green banana",
        date: "Sep 20, 2024",
        buyer: "Buyer From India",
        verified: "Verified",
        review: "4.5/5",
        description:
          "We are seeking quotations from reputable suppliers for the procurement of high-quality fresh fruits. Our goal is to ensure a consistent supply of fresh produce to meet our business needs and customer demands.",
      },
      {
        id: 2,
        countryFlag: country,
        title: "Wanted : Fresh fruits like mango",
        date: "Sep 22, 2024",
        buyer: "Buyer From India",
        verified: "Verified",
        review: "4.5/5",
        description:
          "Looking for suppliers who can provide ripe mangoes in bulk. Please reach out if you can offer competitive pricing.",
      },
      {
        id: 3,
        countryFlag: country,
        title: "Wanted : Organic apples",
        date: "Sep 25, 2024",
        buyer: "Buyer From India",
        verified: "Verified",
        review: "4.5/5",
        description:
          "We are interested in sourcing organic apples. Need details about your supply capacity and pricing.",
      },
      {
        id: 4,
        countryFlag: country,
        title: "Wanted : Organic apples",
        date: "Sep 25, 2024",
        buyer: "Buyer From India",
        verified: "Verified",
        review: "4.5/5",
        description:
          "We are interested in sourcing organic apples. Need details about your supply capacity and pricing.",
      },
      {
        id: 5,
        countryFlag: country,
        title: "Wanted : Organic apples",
        date: "Sep 25, 2024",
        buyer: "Buyer From India",
        verified: "Verified",
        review: "4.5/5",
        description:
          "We are interested in sourcing organic apples. Need details about your supply capacity and pricing.",
      },
      {
        id: 6,
        countryFlag: country,
        title: "Wanted : Organic apples",
        date: "Sep 25, 2024",
        buyer: "Buyer From India",
        verified: "Verified",
        review: "4.5/5",
        description:
          "We are interested in sourcing organic apples. Need details about your supply capacity and pricing.",
      },
      {
        id: 7,
        countryFlag: country,
        title: "Wanted : Organic apples",
        date: "Sep 25, 2024",
        buyer: "Buyer From India",
        verified: "Verified",
        review: "4.5/5",
        description:
          "We are interested in sourcing organic apples. Need details about your supply capacity and pricing.",
      },
      {
        id: 8,
        countryFlag: country,
        title: "Wanted : Organic apples",
        date: "Sep 25, 2024",
        buyer: "Buyer From India",
        verified: "Verified",
        review: "4.5/5",
        description:
          "We are interested in sourcing organic apples. Need details about your supply capacity and pricing.",
      },
      {
        id: 9,
        countryFlag: country,
        title: "Wanted : Organic apples",
        date: "Sep 25, 2024",
        buyer: "Buyer From India",
        verified: "Verified",
        review: "4.5/5",
        description:
          "We are interested in sourcing organic apples. Need details about your supply capacity and pricing.",
      },
      {
        id: 10,
        countryFlag: country,
        title: "Wanted : Fresh grapes",
        date: "Sep 27, 2024",
        buyer: "Buyer From India",
        verified: "Verified",
        review: "4.5/5",
        description:
          "Seeking suppliers for fresh grapes. Contact us with your best offers.",
      },
    ];
    const navigate = useNavigate();
    const handleNavigation = (event) => {
      const selectedValue = event.target.value;
      if (selectedValue) {
        navigate(selectedValue); // Navigate to the selected route
      }
    };
  
    const handleCheckboxChange = (id) => {
      if (selectedCards.includes(id)) {
        // Remove card if already selected
        setSelectedCards((prevSelected) =>
          prevSelected.filter((cardId) => cardId !== id)
        );
      } else if (selectedCards.length < 4) {
        // Add card only if fewer than 4 are selected
        setSelectedCards((prevSelected) => [...prevSelected, id]);
      } else {
        alert("You can select a maximum of 4 cards.");
      }
    };
  
    // Default to the first four cards if no cards are selected
    const displayedCards =
      selectedCards.length > 0
        ? cardsData.filter((card) => selectedCards.includes(card.id))
        : cardsData.slice(0, 4);
  
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  
  return (
<div className="mb-20">
      <div className="border-b border-gray-300 py-7">
        <h1 className="text-2xl px-10 font-semibold text-gray-600">
          Website Settings
        </h1>
      </div>
      <div className="px-14 py-10 mx-auto">
        <select  onChange={handleNavigation} className="text-xl font-semibold outline-none border-2 border-gray-200 px-5 py-3 rounded-lg">
        <option value="/admindashboard/banner">Listing Service Home Page</option>
        <option value="/admindashboard/websitesettings">Home Page</option>
        
        </select>
      </div>
      <div className="border-2 border-gray-200 rounded-2xl mx-auto w-11/12 p-5">
        <div className="mx-auto">
          <select
            className="text-xl text-gray-600 font-semibold outline-none py-3 rounded-lg"
            onChange={handleNavigation}
          >
            <option value="/admindashboard/listingexplore">
              Explore Products with High Demand / Hot Enquiries
            </option>
             <option className="option-hover " value="/admindashboard/banner">Banners</option>
             <option value="/admindashboard/lisitngproducts">Trending Products</option>
           
            
         
          
          </select>
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
            <h1 className="text-3xl  py-5 text-center font-semibold">
               Listing Explore Products with High Demand / Hot Enquiries
            </h1>
          </div>
          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
            {displayedCards.map((card) => (
              <div
                key={card.id}
                className="bg-white border border-gray-300 rounded-lg p-4 shadow-lg"
              >
                <div className="flex items-center mb-2 gap-5 p-5 flex-col sm:flex-row">
                  <div className="flex md:items-center gap-2">
                    <img
                      src={card.countryFlag}
                      alt="Country Flag"
                      className="w-8 h-auto"
                    />
                    <span>IN</span>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h3 className="text-sm text-blue-400 font-semibold">
                        {card.title}
                      </h3>
                    </div>
                    <div className="text-gray-500 text-sm">
                      <h1>{card.date}</h1>
                    </div>
                  </div>
                </div>
                <div className="flex  flex-col sm:flex-row items-center mb-2 gap-5">
                  <p className="font-bold">{card.buyer}</p>
                  <div className="flex items-center justify-center gap-1">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                      {card.verified}
                    </span>
                    <span className="text-orange-600 text-sm ml-2">
                      {card.review}
                    </span>
                    <button className="text-orange-600 underline">
                      review
                    </button>
                  </div>
                </div>
                <p className="mb-2 text-sm">
                  {card.description} {/* Button to open the modal */}
                  <button
                    onClick={toggleModal}
                    className="text-oceanBlue underline"
                  >
                    More
                  </button>
                  {/* Modal */}
                  {isModalOpen && (
                    <div
                      className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50"
                      onClick={toggleModal}
                    >
                      <div
                        className="bg-white w-2/3 p-6 rounded shadow-lg relative"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Close button */}
                        <button
                          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-5xl"
                          onClick={toggleModal}
                        >
                          &times;
                        </button>

                        <h3 className="text-xl font-semibold mb-4">
                          Buyer From India
                        </h3>

                        <div className="space-y-5 px-5 flex flex-col justify-between">
                          <div className="flex">
                            <p className="w-full text-xl">
                              Destination:{" "}
                              <span className="font-light">India</span>
                            </p>
                            <p className="w-full  text-xl">
                              Target Price:{" "}
                              <span className="font-light">Negotiable</span>
                            </p>
                            <p className="w-full  text-xl">
                              Payment Terms:{" "}
                              <span className="font-light">Bank Transfer</span>
                            </p>
                          </div>
                          <div className="flex">
                            <p className="w-full  text-xl">
                              Looking for supplier from:{" "}
                              <span className="font-light">India</span>
                            </p>
                            <p className="w-full  text-xl">
                              Quantity Required:{" "}
                              <span className="font-light"> 500 tons</span>
                            </p>
                            <p className="w-full  text-xl">
                              Date:{" "}
                              <span className="font-light">Sep 20, 2024</span>
                            </p>
                          </div>

                          <p className=" text-xl">
                            Shipping Terms:{" "}
                            <span className="font-light">CIF</span>
                          </p>
                          <p className="text-xl">Product Description:</p>
                          <p className="border border-gray-300 rounded-md p-5 pb-10">
                            We are seeking quotations from reputable suppliers
                            for the procurement of high-quality fresh fruits.
                            Our goal is to ensure a consistent supply of fresh
                            produce to meet our business needs and customer
                            demands.
                          </p>
                        </div>

                        {/* Enquire Now Button */}
                        <div className="flex justify-end">
                          <button
                            className=" mt-4 bg-oceanBlue text-white px-4 py-2 rounded hover:border border-oceanBlue hover:text-oceanBlue hover:bg-white"
                            onClick={toggleModal}
                          >
                            Enquire Now
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </p>
              </div>
            ))}
          </div>
          {/* Table Section */}
          <div>
            <h1 className="text-xl px-5 py-10 text-center font-normal">
              Edit your High Demand / Hot Enquiries Below Here
            </h1>
            <p>Select only 4 Product with High Demand / Hot Enquiries</p>

            <div className="flex w-full gap-5 justify-between py-5">
              <input
                className="border w-full px-5 py-2 border-gray-300 outline-none rounded-md"
                placeholder="Search"
                type="search"
                name=""
                id=""
              />
              <select
                className="w-full outline-none border px-5 py-2 border-gray-300 rounded-md"
                name=""
                id=""
              >
                <option disabled value="">
                  Country
                </option>
                <option value="">India</option>
                <option value="">US</option>
                <option value="">Germany</option>
                <option value="">China</option>
              </select>
              <input
                className="w-full outline-none border px-5 py-2 border-gray-300 rounded-md"
                type="date"
                name=""
                id=""
              />
              <select
                className="w-full outline-none border px-5 py-2 border-gray-300 rounded-md"
                name=""
                id=""
              >
                <option disabled value="">
                  Filter
                </option>
                <option value="">Seller RFQS</option>
                <option value="">Buyer RFQS</option>
                <option value="">Newest on top</option>
                <option value="">Oldest on top</option>
              </select>
            </div>
            <table className="table-auto w-full border-collapse border border-gray-300 rounde-xl">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-5">Select</th>
                  <th className="border border-gray-300 px-4 py-5">Country</th>
                  <th className="border border-gray-300 px-4 py-5">
                    Buyer / Seller with country
                  </th>
                  <th className="border border-gray-300 px-4 py-5">Wanted</th>
                  <th className="border border-gray-300 px-4 py-5">
                    RFQs posted on
                  </th>
                </tr>
              </thead>
              <tbody>
                {cardsData.map((card) => (
                  <tr key={card.id}>
                    <td className="border text-center border-gray-300 px-4 py-2">
                      <input
                        type="checkbox"
                        checked={selectedCards.includes(card.id)}
                        onChange={() => handleCheckboxChange(card.id)}
                      />
                    </td>
                    <td className="flex gap-2 border  border-gray-200 px-4 py-2">
                      <img
                      onClick={toggleModal}
                        src={card.countryFlag}
                        alt="Country Flag"
                        className="w-8 h-auto"
                      />
                      <span>IN</span>
                    </td>
                    <td onClick={toggleModal} className="border border-gray-300 px-4 py-2 hover:underline">
                      {card.buyer}
                    </td>
                    <td onClick={toggleModal} className="border border-gray-300 px-4 py-2 hover:underline">
                      {card.title}
                    </td>
                    <td onClick={toggleModal} className="border border-gray-300 px-4 py-2 hover:underline">
                      {card.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
)
}

export default ListingServiceExploreProducts