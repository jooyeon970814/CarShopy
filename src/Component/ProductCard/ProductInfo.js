import React from "react";

const ProductInfo = ({ car }) => {
  const { carName, imageUrl, trim, carNumber, registrationDate, mileage } = car;

  return (
    <div className="flex flex-col font-semibold space-y-4">
      <div className="rounded-lg overflow-hidden mb-6">
        <img
          className="object-contain mx-auto rounded-lg overflow-hidden w-full h-auto max-h-60"
          src={imageUrl}
          alt={carName}
        />
      </div>
      <div className="space-y-2 text-sm sm:text-base">
        <div className="flex justify-between">
          <p>차량명 :</p> <p>{carName}</p>
        </div>
        <div className="flex justify-between">
          <p>트림 :</p> <p>{trim}</p>
        </div>
        <div className="flex justify-between">
          <p>차량번호 :</p> <p>{carNumber}</p>
        </div>
        <div className="flex justify-between">
          <p>차량등록일 :</p> <p>{registrationDate}</p>
        </div>
        <div className="flex justify-between">
          <p>주행거리 :</p> <p>{mileage}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
