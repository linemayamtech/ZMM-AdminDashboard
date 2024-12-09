import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    const [isimgDropdownVisible, setIsimgDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsimgDropdownVisible(!isimgDropdownVisible);
  };
  const data = {
    India: {
      states: {
        Maharashtra: ["Mumbai", "Pune", "Nagpur"],
        Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
      },
    },
    USA: {
      states: {
        California: ["Los Angeles", "San Francisco", "San Diego"],
        Texas: ["Houston", "Austin", "Dallas"],
      },
    },
    Canada: {
      states: {
        Ontario: ["Toronto", "Ottawa", "Mississauga"],
        Quebec: ["Montreal", "Quebec City", "Laval"],
      },
    },
  };

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setStates(Object.keys(data[country].states));
    setSelectedState("");
    setCities([]);
    setSelectedCity("");
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
    setCities(data[selectedCountry].states[state]);
    setSelectedCity("");
  };

  const [placeholder, setPlaceholder] = useState("I'm Looking For.........");
  const [isopen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isopen);
  };

  // Handler to update the placeholder based on the selected option
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;

    // Change placeholder based on the selected option
    if (selectedValue === "Categories") {
      setPlaceholder("Click here to choose your Categories");
    } else if (selectedValue === "HSN Code") {
      setPlaceholder("Click here to select HSN");
    } else if (selectedValue === "Products") {
      setPlaceholder("Type the product name that you want to search");
    } else if (selectedValue === "Services") {
      setPlaceholder("Type the service name that you want to search");
    } else if (selectedValue === "Others") {
      setPlaceholder("Type your keywords that you want to .....");
    } else {
      setPlaceholder("I'm Looking For.........");
    }
  };
  // Separate state for each NavDropdown
  const [showSignIn, setShowSignIn] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showPostReq, setShowPostReq] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);
  const [showBusiness, setShowBusiness] = useState(false);

  const handleSignInMouseEnter = () => setShowSignIn(true);
  const handleSignInMouseLeave = () => setShowSignIn(false);

  const handleRegisterMouseEnter = () => setShowRegister(true);

  const handleRegisterMouseLeave = () => setShowRegister(false);

  const handleServicesMouseEnter = () => setShowServices(true);
  const handleServicesMouseLeave = () => setShowServices(false);

  const handleBenefitsMouseEnter = () => setShowBenefits(true);
  const handleBenefitsMouseLeave = () => setShowBenefits(false);

  const handleBusinessMouseEnter = () => setShowBusiness(true);
  const handleBusinessMouseLeave = () => setShowBusiness(false);

  const handlePostReqMouseEnter = () => setShowPostReq(true);
  const handlePostReqMouseLeave = () => setShowPostReq(false);
  return (
    <>
      <div className="w-full sticky top-0 z-10 bg-white px-3  shadow-md pb-2">
        <div className="flex items-center">
          <div className="border-e p-2 border-gray-300">
            <img src={require("../assets/logo.png")} alt="" />
          </div>
          <div className="w-full flex flex-col gap-3 px-5">
            <div className="flex justify-between border-b p-2 border-gray-300 items-center">
              <div>
                <p>+1 222-555-33-99</p>
              </div>
              <div className="flex gap-5">
                <button className="bg-blood-gradient text-white p-2 px-5 hover:bg-[#ff0000] rounded-full">
                  Listing Service Dashboard
                </button>
                <button className="bg-blood-gradient text-white p-2 px-5 hover:bg-[#ff0000] rounded-full">
                  Liaison Service Dashboard
                </button>
                <button className="bg-blood-gradient text-white p-2 px-5 hover:bg-[#ff0000] rounded-full">
                  Directory Service Dashboard
                </button>
              </div>
            </div>
            <div className="flex justify-evenly gap-5 items-center">
              <div>
                <form>
                  <div className="hidden lg:flex w-[10vw] py-2 justify-evenly border rounded-3xl bg-white    border-oceanBlue">
                    <div className="">
                      <input type="radio" name="choose" value="Option 1" />
                      <label className="ps-1 text-oceanBlue">Buyer</label>
                    </div>
                    <div className="">
                      <input type="radio" name="choose" value="Option 2" />
                      <label className="ps-1 text-oceanBlue">Seller</label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="relative group">
                {/* Button */}
                <button className="border text-nowrap border-oceanBlue text-oceanBlue px-5 py-2 rounded-full">
                  Choose Country
                </button>

                {/* Dropdown Div */}
                <div className="absolute left-0 top-full hidden group-hover:flex flex-col gap-4 w-full mx-auto p-4 border rounded-md shadow-md bg-white">
                  {/* Country Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <select
                      className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={selectedCountry}
                      onChange={(e) => handleCountryChange(e.target.value)}
                    >
                      <option value="">Select</option>
                      {Object.keys(data).map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* State Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <select
                      className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={selectedState}
                      onChange={(e) => handleStateChange(e.target.value)}
                      disabled={!states.length}
                    >
                      <option value="">Select</option>
                      {states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* City Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      City / District
                    </label>
                    <select
                      className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      disabled={!cities.length}
                    >
                      <option value="">Select</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="">
                <select className="w-36 outline-none border border-oceanBlue text-oceanBlue px-5 py-2 rounded-full" name="" id="">
                    <option disabled value="">Nature of Bussiness</option>
                    <option className="text-oceanBlue" value="">B2B Product Buyer</option>
                    <option value="">B2B Product Seller</option>
                    <option value="">Product Trader</option>
                    <option className="w-10 text-wrap" value="">Institution bulk buyer for self consumption</option>
                    <option value="">B2B Original Service Seller</option>
                    <option value="">B2B Original Service Buyer</option>
                    <option value="">Service Reseller</option>
                </select>
              </div>

              <div className="flex border border-black rounded-full ps-5 pe-1 h-11 ">
                <form className="flex items-center">
                  <div>
                    <select
                      className="border-none outline-none"
                      name=""
                      id=""
                      onChange={handleSelectChange}
                    >
                      <option value="Products">Products</option>
                      <option value="Categories">Categories</option>
                      <option value="HSN Code">HSN Code</option>
                      <option value="Services">Services</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className=" ">
                    <input
                      className="w-[300px] outline-none"
                      type="text"
                      placeholder={placeholder} // Set the placeholder dynamically
                    />
                  </div>
                  <div className="flex bg-blood rounded-full ms-2 p-[6px] px-3  bottom-[2px]">
                    <div className="pt-1 text-white">
                      <IoIosSearch />
                    </div>

                    <button className="text-white">Search</button>
                  </div>
                </form>
              </div>
              <div className="relative">
      {/* Profile Image */}
      <div
        className="border-2 w-12 border-gray-400 rounded-full p-0.5 cursor-pointer"
        onClick={toggleDropdown}
      >
        <img
          src={require("../assets/Abu Photo.png")}
          alt="profile"
          className="rounded-full"
        />
      </div>

      {/* Dropdown Menu */}
      {isimgDropdownVisible && (
        <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          {/* User Info */}
          <div className="flex gap-3 p-4 border-b border-gray-300">
            <img
              src={require("../assets/Abu Photo.png")}
              alt="profile"
              className="w-12 h-12 rounded-full mb-2"
            />
            <div>
            <h1 className="text-sm font-semibold text-gray-800">
              Jack Thomeson
            </h1>
            <p className="text-sm text-gray-500">abucr3@gmail.com</p>
            </div>
            
          </div>

          {/* Options */}
          <div className="py-2">
            <Link to={"/admindashboard/profiledetails"} className="flex items-center px-4 py-2 w-full text-sm text-gray-800 hover:bg-gray-100"  onClick={toggleDropdown}>
              <FaUser className="mr-2" />
              My Profile
            </Link>
            <Link to={"/"} className="flex items-center px-4 py-2 w-full text-sm text-gray-800 hover:bg-gray-100"  onClick={toggleDropdown}>
              <FaSignOutAlt className="mr-2" />
              Log out
            </Link>
          </div>
        </div>
      )}
    </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
