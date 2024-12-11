import React, { useState, useEffect } from "react";
import { PiShieldCheck } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import Modal from "react-modal"; // Import Modal

function Prod({ product }) {
  return (
    <div className="flex flex-col h-full max-w-[1400px]">
      <div className="bg-white shadow-lg rounded-lg p-4 w-[250px] mx-1 flex flex-col h-[380px] relative top-40 mb-72">
        <span className="bg-oceanBlue text-white text-[10px] py-1 px-2 rounded-md absolute top-0 right-0 shadow-lg">
          {product.discount}
        </span>
        <div className="flex justify-center mb-2">
          <img
            className="rounded-lg w-40 h-32"
            src={product.imgSrc}
            alt="Product"
          />
        </div>

        <h5 className="text-lg font-semibold">{product.title}</h5>
        <p className="text-sm text-gray-700 mb-2 flex-grow overflow-hidden">
          {product.description}
        </p>
        <div className="flex justify-start items-center">
          <p className="text-sm px-1">{product.sellerName}</p>
          <img src={product.flagImgSrc} alt="Flag" className="w-7 h-4 px-1" />
          <p className="text-sm">{product.country}</p>
          <button className="w-20 text-[12px] flex items-center justify-center bg-blue-100 text-oceanBlue font-extrabold px-4 rounded-md shadow-md ms-2">
            Verified
            <span className="ml-1">
              <PiShieldCheck />
            </span>
          </button>
        </div>
        <h5 className="text-lg font-semibold mt-2">
          {product.price}
          <span className="line-through text-[13px] text-gray-500 ml-2">
            {product.oldPrice}
          </span>
        </h5>
        <div className="flex justify-around mt-4 gap-2">
          <button className="bg-blood text-white font-semibold py-2 px-2 rounded-md">
            Get Quotes
          </button>
          <button className="border border-oceanBlue text-oceanBlue hover:bg-oceanBlue hover:text-white font-semibold py-2 px-4 rounded-md">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
const ListingServiceTrendingProducts = () => {

  const [initialProducts, setInitialProducts] = useState([
    {
      id: 1,
      title: "Brand NEW Fiber Helmet",
      discount: "Up to 30% off",
      price: "$2,000 INR",
      oldPrice: "$3000",
      description:
        "Electronics is the study and use of electrical components like transistors.",
      sellerName: "TL Faizal",
      imgSrc: require("../../../assets/products/helmet.png"),
      country: "India",
      btn: "Verified",
      flagImgSrc: require("../../../assets/products/India.png"),
    },
    {
      id: 2,
      title: "Brand NEW Headset",
      discount: "Up to 20% off",
      price: "$1,200 INR",
      oldPrice: "$1500",
      description:
        "Audio equipment designed for immersive sound experience....",
      sellerName: "Abubakar",

      imgSrc: require("../../../assets/products/helmet.png"),
      country: "India",
      flagImgSrc: require("../../../assets/products/India.png"),
    },
    {
      id: 3,
      title: " Bluetooth Speaker",
      discount: "Up to 25% off",
      price: "$800 INR",
      oldPrice: "$1000",
      description: "Compact speaker with high-quality sound output....",
      sellerName: "JP",

      imgSrc: require("../../../assets/products/helmet.png"),
      country: "India",
      flagImgSrc: require("../../../assets/products/India.png"),
    },
    {
      id: 4,
      title: "Smart Fitness Watch",
      discount: "Up to 35% off",
      price: "$3,500 INR",
      oldPrice: "$4500",
      description: "Track your health and fitness with advanced sensors....",
      sellerName: "Alagar",

      imgSrc: require("../../../assets/products/helmet.png"),
      country: "India",
      flagImgSrc: require("../../../assets/products/India.png"),
    },
    {
      id: 5,
      title: "4K HD Drone",
      discount: "Up to 40% off",
      price: "$7,500 INR",
      oldPrice: "$10000",
      description: "Capture stunning aerial footage with this 4K drone....",
      sellerName: "Sanjay",
      imgSrc: require("../../../assets/products/helmet.png"),
      country: "India",
      flagImgSrc: require("../../../assets/products/India.png"),
    },
    {
      id: 6,
      title: "Gaming Mouse",
      discount: "Up to 15% off",
      price: "$600 INR",
      oldPrice: "$750",
      description: "Ergonomic design with customizable buttons for gamers....",
      sellerName: "JP",

      imgSrc: require("../../../assets/products/helmet.png"),
      country: "India",
      flagImgSrc: require("../../../assets/products/India.png"),
    },
    {
      id: 7,
      title: "Wireless Keyboard",
      discount: "Up to 10% off",
      price: "$900 INR",
      oldPrice: "$1000",
      description: "Sleek wireless keyboard with long battery life....",
      sellerName: "JP",

      imgSrc: require("../../../assets/products/helmet.png"),
      country: "India",
      flagImgSrc: require("../../../assets/products/India.png"),
    },
    {
      id: 8,
      title: "HD Webcam",
      discount: "Up to 18% off",
      price: "$1,500 INR",
      oldPrice: "$1800",
      description: "High-definition webcam for video conferencing....",
      sellerName: "JP",

      imgSrc: require("../../../assets/products/helmet.png"),
      country: "India",
      flagImgSrc: require("../../../assets/products/India.png"),
    },
  ]);

  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Brand NEW Fiber Helmet",
      discount: "Up to 30% off",
      price: "$2,000 INR",
      oldPrice: "$3000",
      description:
        "Electronics is the study and use of electrical components like transistors.",
      sellerName: "TL Faizal",
      imgSrc: require("../../../assets/products/helmet.png"),
      country: "India",
      flagImgSrc: require("../../../assets/products/India.png"),
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCard, setNewCard] = useState({

    title: "",
    discount: "",
    price: "",
    oldPrice: "",
    description: "",
    sellerName: "",
    imgSrc:"",
    flagImgSrc:"",
    flag:"",
    
    
    
    
  });
  const handleAddCard = () => {
    setProducts([...products, { id: products.length + 1, ...newCard }]);
    setNewCard({
      title: "",
      discount: "",
      price: "",
      oldPrice: "",
      description: "",
      sellerName: "",
      imgSrc:"",
      flagImgSrc:"",
      flag:"",
    });
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);

  // Add a new card
  // const handleAddCard = () => {
  //   const newProduct = {
  //     id: products.length + 1,
  //     title: `New Product ${products.length + 1}`,
  //     discount: "New Discount",
  //     price: `$${(products.length + 1) * 1000} INR`,
  //     oldPrice: `$${(products.length + 2) * 1000}`,
  //     description: "Newly added product description.",
  //     sellerName: "New Seller",
  //     imgSrc: require("../../assets/products/helmet.png"),
  //     country: "India",
  //     flagImgSrc: require("../../assets/products/India.png"),
  //   };
  //   setProducts([...products, newProduct]);
  // };

  // Filter products based on search query
  useEffect(() => {
    const filteredProducts = initialProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProducts(filteredProducts);
  }, [searchQuery, initialProducts]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const nextSlide = () => {
    if (currentIndex < products.length - cardsPerPage) {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth >= 1530) {
        setCardsPerPage(4); // Display 4 cards on large screens
      } else if (window.innerWidth >= 1200) {
        setCardsPerPage(3); // Display 2 cards on medium screens
      } else if (window.innerWidth >= 768) {
        setCardsPerPage(2); // Display 2 cards on medium screens
      } else {
        setCardsPerPage(1); // Display 1 card on small screens (mobile)
      }
    };

    updateCardsPerPage(); // Set on initial load
    window.addEventListener("resize", updateCardsPerPage); // Update on resize

    return () => {
      window.removeEventListener("resize", updateCardsPerPage); // Cleanup listener on unmount
    };
  }, []);

  //navigation to pages
  const navigate = useNavigate();
  const handleNavigation = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(selectedValue); // Navigate to the selected route
    }
  };

  const [isEditing, setIsEditing] = useState(false);

  const handleImageChange = (id, event) => {
    const file = event.target.files[0];
    if (file) {
      const newImgSrc = URL.createObjectURL(file);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? { ...product, imgSrc: newImgSrc } : product
        )
      );
    }
  };

  const handleTitleChange = (id, newTitle) => {
    const newProducts = products.map((product) =>
      product.id === id ? { ...product, title: newTitle } : product
    );
    setProducts(newProducts);
  };
  const handleDescChange = (id, newDesc) => {
    const newProducts = products.map((product) =>
      product.id === id ? { ...product, description: newDesc } : product
    );
    setProducts(newProducts);
  };
  const handleSellerNameChange = (id, newSeller) => {
    const newProducts = products.map((product) =>
      product.id === id ? { ...product, sellerName: newSeller } : product
    );
    setProducts(newProducts);
  };
  const handleFlagChange = (id, event) => {
    const file = event.target.files[0];
    if (file) {
      const newFlagImgSrc = URL.createObjectURL(file); // Generate URL for the flag image
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id
            ? { ...product, flagImgSrc: newFlagImgSrc }
            : product
        )
      );
    }
  };
  const handleCounrtyChange = (id, newCountry) => {
    const newProducts = products.map((product) =>
      product.id === id ? { ...product, country: newCountry } : product
    );
    setProducts(newProducts);
  };
  const handleDiscountChange = (id, newDiscount) => {
    const newProducts = products.map((product) =>
      product.id === id ? { ...product, discount: newDiscount } : product
    );
    setProducts(newProducts);
  };
  const handlePriceChange = (id, newPrice) => {
    const newProducts = products.map((product) =>
      product.id === id ? { ...product, price: newPrice } : product
    );
    setProducts(newProducts);
  };
  const handleOldPriceChange = (id, oldPrice) => {
    const newProducts = products.map((product) =>
      product.id === id ? { ...product, oldPrice: oldPrice } : product
    );
    setProducts(newProducts);
  };
  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="mb-20">
    <div className="border-b border-gray-300 py-7">
      <h1 className="text-2xl px-10 font-semibold text-gray-600">
        Website Settings
      </h1>
    </div>
    <div className="px-14 py-5 mx-auto">
      <select
        onChange={handleNavigation}
        className="text-xl font-semibold outline-none border-2 border-gray-200 px-5 py-3 rounded-lg"
        name=""
        id=""
      >
          <option value="/admindashboard/banner">
          Listing Service Home Page
        </option>
        <option value="/admindashboard/websitesettings">Home Page</option>
      
      </select>
    </div>
    <div className=" border-2 border-gray-200 rounded-2xl mx-auto w-11/12 p-5">
      <div className="mx-auto">
        <select
          className="text-xl text-gray-600 font-semibold outline-none w-[17%] py-3  rounded-lg"
          onChange={handleNavigation}
        >
         
             
             <option value="/admindashboard/lisitngproducts">Trending Products</option>
             <option className="option-hover " value="/admindashboard/banner">Banners</option>
             <option value="/admindashboard/listingexplore">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            blanditiis ab facilis commodi eaque. In ipsum perspiciatis ratione
            quidem corrupti labore vero earum sed velit voluptatum. Ab
            architecto mollitia laudantium?
          </span>
        </div>
        <h1 className="text-3xl text-center font-semibold">
          Lisitng Trending Products
        </h1>
      </div>
      <div
        className="w-full bg-no-repeat bg-cover" // Full-width background
        style={{
          backgroundImage:
            window.innerWidth >= 768
              ? `url(${require("../../../assets/products/CardBAckg.jpg")})`
              : "none",
        }}
      >
        <div className="max-w-[1400px] mx-auto relative flex flex-col items-center">
          {" "}
          {/* Centered container */}
          <h1 className="absolute top-24 text-center md:text-white font-semibold text-3xl mb-18">
            Products with Attractive Price
          </h1>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2   text-5xl text-white hover:text-gray-400"
            onClick={prevSlide}
          >
            ❮
          </button>
          <div className="flex gap-4 justify-center">
            {products
              .slice(currentIndex, currentIndex + cardsPerPage)
              .map((product) => (
                <Prod
                  key={product.id}
                  product={product}
                  isEditing={isEditing}
                  onTitleChange={handleTitleChange} // Ensure this function is implemented
                />
              ))}
          </div>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-5xl text-white hover:text-gray-400"
            onClick={nextSlide}
          >
            ❯
          </button>
        </div>
      </div>
      {/* to change the images  in the cards */}
      <div className="p-6">
        {/* Button to toggle editing mode */}
        <div className="flex gap-5 justify-between">
          <div className="flex gap-5">
            <button
              onClick={toggleEditing}
              className="bg-oceanBlue text-white hover:border-2 border-oceanBlue hover:bg-white hover:text-oceanBlue font-medium px-10 py-2 rounded-md"
            >
              {isEditing ? (
                <div className="flex items-center gap-2 font-semibold">
                  Cancel
                  <span className="text-2xl">
                    <MdKeyboardArrowUp />
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2 font-semibold">
                  Edit Cards
                  <span className="text-2xl">
                    <MdKeyboardArrowDown />
                  </span>
                </div>
              )}
            </button>

            

            <button
              onClick={handleOpenModal}
              className="border-2 border-blood text-blood hover:bg-blood hover:text-white px-10 font-semibold py-2 rounded-md"
            >
              Add Cards
            </button>
           
            <Modal
              isOpen={isModalOpen}
              onRequestClose={handleCloseModal}
              ariaHideApp={false}
              className="bg-white p-6 mt-32  items-center rounded-lg shadow-lg max-w-md mx-auto "
            >
              <h2 className="text-xl font-semibold mb-4">Add New Card</h2>

              <div className="flex gap-5">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={newCard.title}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-2"
              />
                 <input
                type="text"
                name="sellerName"
                placeholder="Seller Name"
                value={newCard.sellerName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-2"
              />
              </div>

              <div className="flex gap-5">
              <input
                type="text"
                name="price"
                placeholder="Price"
                value={newCard.price}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                name="oldPrice"
                placeholder="Old Price"
                value={newCard.oldPrice}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-2"
              />
              </div>
              
             
              <div className="flex gap-5">
              <input 
               type="text"
              name="country"
              placeholder="Country"
              value={newCard.country}
              onChange={handleInputChange}
              className="w-full p-2 border rounded mb-2" />
            
         
            <input
              type="text"
              name="discount"
              placeholder="Discount"
              value={newCard.discount}
              onChange={handleInputChange}
              className="w-full p-2 border rounded mb-2"
            />
              </div>
              <textarea
                name="description"
                placeholder="Description"
                value={newCard.description}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-2"
              />
              <div className="flex mb-2 flex-col w-full border border-200 rounded-md">
              <label htmlFor="">Product Image</label>
              <input value={newCard.imgSrc} placeholder="image" type="file" name="" id="" />
              </div>
             
             <div className="flex mb-2 flex-col w-full border border-200 rounded-md">
             <label htmlFor="">Flag</label>
             <input value={newCard.flagImgSrc} placeholder="image" type="file" name="" id="" />
             </div>
              <div className="flex justify-end">
                <button
                  onClick={handleCloseModal}
                  className="bg-gray-300 px-4 py-2 rounded-md mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddCard}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Add
                </button>
              </div>
            </Modal>

           

           

            {/* <div className="flex flex-wrap mt-4">
              {products.map((product) => (
                <Prod key={product.id} product={product} />
              ))}
            </div> */}
          </div>

          <div className="w-1/3  px-5 border bg-gray-200 rounded-lg border-gray-400 shadow-sm flex items-center">
            <input
              type="text"
              className="w-full  py-2  bg-gray-200 outline-none"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <span className="text-2xl">
              <IoIosSearch />
            </span>
          </div>
        </div>

        {/* Render table when editing */}
        {isEditing && (
          <div className="mt-4 flex flex-col gap-3 overflow-x-auto">
            <table className="border-collapse border border-gray-300 w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">
                    Card No
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Image</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Product Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Seller Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Flag</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Country
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Discount
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    New Price
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Old Price
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-t">
                    <td className="text-center">{product.id}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="file"
                        id={`img${product.id}`}
                        accept="image/*"
                        onChange={(e) => handleImageChange(product.id, e)}
                        className="mt-2 w-[220px] "
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={product.title}
                        onChange={(e) =>
                          handleTitleChange(product.id, e.target.value)
                        }
                        className="outline-none border border-gray-300 p-2 rounded-md w-[200px]"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={product.sellerName}
                        onChange={(e) =>
                          handleSellerNameChange(product.id, e.target.value)
                        }
                        className="outline-none border border-gray-300 p-2 rounded-md w-[200px]"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="file"
                        id={`flagImg${product.id}`}
                        accept="image/*"
                        onChange={(e) => handleFlagChange(product.id, e)}
                        className="mt-2 w-[220px]"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={product.country}
                        onChange={(e) =>
                          handleCounrtyChange(product.id, e.target.value)
                        }
                        className="outline-none border border-gray-300 p-2 rounded-md w-[200px]"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={product.discount}
                        onChange={(e) =>
                          handleDiscountChange(product.id, e.target.value)
                        }
                        className="outline-none border border-gray-300 p-2 rounded-md w-[200px]"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={product.price}
                        onChange={(e) =>
                          handlePriceChange(product.id, e.target.value)
                        }
                        className="outline-none border border-gray-300 p-2 rounded-md w-[200px]"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={product.oldPrice}
                        onChange={(e) =>
                          handleOldPriceChange(product.id, e.target.value)
                        }
                        className="outline-none border border-gray-300 p-2 rounded-md w-[200px]"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <textarea
                        value={product.description}
                        onChange={(e) =>
                          handleDescChange(product.id, e.target.value)
                        }
                        className="outline-none border border-gray-300 p-2 rounded-md w-[200px]"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  </div>
  )
}

export default ListingServiceTrendingProducts




