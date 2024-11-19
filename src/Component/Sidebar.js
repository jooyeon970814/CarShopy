import React from "react";
import {
  FaCarAlt,
  FaCar,
  FaTruck,
  FaMotorcycle,
  FaBicycle,
} from "react-icons/fa";

const Side = ({ isOpen, categories, onCarSelect, selectedCategory }) => {
  const handleCategoryClick = (category) => {
    onCarSelect(category);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "승용차":
        return <FaCar />;
      case "트럭":
        return <FaTruck />;
      case "오토바이":
        return <FaMotorcycle />;
      case "SUV":
        return <FaBicycle />;
      default:
        return <FaCarAlt />;
    }
  };

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen w-56 bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-3 shadow-xl transform transition-transform duration-300 ease-in-out
        ${
          isOpen
            ? "translate-x-0 lg:hidden"
            : "-translate-x-full lg:translate-x-0 lg:static lg:inset-0 lg:h-auto lg:block"
        }
       `}
    >
      <nav>
        <ul className="fixed scroll">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => handleCategoryClick(category)}
                className={`flex w-full items-center gap-3 rounded-lg px-4 py-2 text-left text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                }`}
              >
                {getCategoryIcon(category)}
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Side;
