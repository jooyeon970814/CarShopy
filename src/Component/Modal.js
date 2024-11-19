import React from "react";
import ProductCard from "./ProductCard/ProductCard";

const Modal = ({ isOpen, onClose, selectedCar }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white w-[90%] max-w-sm h-auto max-h-[90vh] rounded-lg shadow-lg relative overflow-auto"
        onClick={(e) => e.stopPropagation()} // 모달 안쪽 클릭은 닫히지 않도록 설정
      >
        <ProductCard type="default" car={selectedCar} onClose={onClose} />
      </div>
    </div>
  );
};

export default Modal;
