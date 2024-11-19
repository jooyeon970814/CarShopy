import React, { useState } from "react";
import ProductListCard from "./Component/ProductList/ProductListCard";
import Modal from "./Component/Modal";

function App({ cars }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleOpenModal = (car) => {
    console.log("Modal Opened with car:", car); // 디버깅용 로그
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Modal Closed"); // 디버깅용 로그
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 py-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      {cars.map((car, index) => (
        <div className="p-4" key={index}>
          <ProductListCard
            carName={car.carName}
            imageUrl={car.imageUrl}
            trim={car.trim}
            carNumber={car.carNumber}
            registrationDate={car.registrationDate}
            mileage={car.mileage}
            onClick={() => handleOpenModal(car)}
          />
        </div>
      ))}
      {/* Modal 컴포넌트 */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedCar={selectedCar}
      />
    </div>
  );
}

export default App;
