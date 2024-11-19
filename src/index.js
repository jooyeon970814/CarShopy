import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Headers from "./Component/Headers";
import Side from "./Component/Sidebar";
import { generateRandomCarData } from "./Util/gen.js";

const AppWrapper = () => {
  const [isOpen, setIsOpen] = useState(false); // Hide sidebar on mobile by default
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [data, setData] = useState(() => {
    const names = [
      "소나타",
      "그랜저",
      "투싼",
      "싼타페",
      "아반떼",
      "K5",
      "K7",
      "스포티지",
      "셀토스",
      "모닝",
      "카니발",
      "제네시스",
      "펠리세이드",
    ];

    return generateRandomCarData(names);
  });

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleCarSelect = (category) => {
    setSelectedCategory(category);

    // Close sidebar on mobile after selection
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  const carsToDisplay =
    selectedCategory === "전체"
      ? data
      : data.filter((car) => car.carName === selectedCategory);

  // Generate unique categories
  const uniqueCarNames = [...new Set(data.map((car) => car.carName))];

  return (
    <div className="flex bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Sidebar */}
      <Side
        isOpen={isOpen}
        categories={["전체", ...uniqueCarNames]}
        onCarSelect={handleCarSelect}
        selectedCategory={selectedCategory}
      />

      {/* Main Content */}
      <div className="flex-1 min-h-screen">
        {/* Header */}
        <Headers toggleSidebar={toggleSidebar} />

        {/* Product List */}
        <div className="transition-all duration-300 pt-16 px-4">
          <App cars={carsToDisplay} />
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppWrapper />);
