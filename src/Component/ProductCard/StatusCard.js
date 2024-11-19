import React from "react";
import DateText from "../DateText";
import { FaArrowLeft } from "react-icons/fa";

const StatusCard = ({ type, onClose }) => {
  const status = {
    default: ["현재 구매 가능", "text-2xl", "bg-slate-100"],
    Succese: ["승인 완료", "text-2xl text-green-600", "bg-green-100"],
    CanCle: ["구매 취소", "text-2xl text-red-600", "bg-red-100"],
    Fail: ["심사 불가", "text-2xl text-red-600", "bg-red-100"],
    Error: ["서버 오류", "text-2xl text-red-600", "bg-red-100"],
  };

  const [message, title, background] = status[type] || status.Error;

  return (
    <div className={`flex flex-col ${background} gap-3 p-5 font-semibold`}>
      {/* Header with Close Buttons */}
      <div className="flex items-center justify-between">
        <button onClick={onClose}>
          <FaArrowLeft fontSize="20px" />
        </button>
      </div>

      {/* Message */}
      <h2 className={`font-bold ${title}`}>{message}</h2>

      {/* Additional Content */}
      <div>
        <span>방문 가능 일정 | </span>
        <DateText />
      </div>
    </div>
  );
};

export default StatusCard;
