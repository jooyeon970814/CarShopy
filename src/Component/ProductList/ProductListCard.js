import React from "react";

const ProductListCard = ({
  carName,
  imageUrl,
  trim,
  carNumber,
  registrationDate,
  mileage,
  onClick,
}) => {
  const carDetails = [
    { label: "차량명", value: carName },
    { label: "트림", value: trim },
    { label: "차량번호", value: carNumber },
    { label: "차량등록일", value: registrationDate },
    { label: "주행거리", value: mileage },
  ];

  return (
    <div
      className="flex flex-col gap-4 p-4 font-semibold border border-gray-300 rounded-lg shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100 cursor-pointer hover:shadow-xl transition-shadow"
      onClick={onClick}
    >
      <div>
        <img
          className="w-full h-48 object-cover rounded-t-md"
          src={imageUrl}
          alt={carName}
          onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
        />
      </div>
      <div className="flex flex-col gap-3">
        {carDetails.map((detail, index) => (
          <div className="flex justify-between" key={index}>
            <p className="text-gray-600">{detail.label}:</p>
            <p className="text-black font-medium">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListCard;
