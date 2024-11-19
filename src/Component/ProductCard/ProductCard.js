import React, { useState } from "react";
import StatusCard from "./StatusCard";
import Button from "../Button";
import ProductInfo from "./ProductInfo";

const ProductCard = ({ type, car, onClose }) => {
  const [currentType, setCurrentType] = useState(type);

  const handleConfirm = () => {
    setCurrentType("Succese");
  };

  const handleReject = () => {
    if (currentType === "Succese") setCurrentType("CanCle");
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto font-semibold border border-solid rounded-lg">
      <StatusCard type={currentType} onClose={onClose} />
      <div className="ProductCard p-4">
        <div className="mt-1 gap-2 flex flex-col productcontent">
          <ProductInfo car={car} />
          <div className="mt-5 flex gap-2 justify-center">
            <Button type="CanCle" onClick={handleReject} />
            <Button type="Succese" onClick={handleConfirm} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
