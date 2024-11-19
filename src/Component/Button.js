import React from "react";

const Button = ({ type, setType, onClick }) => {
  const status = {
    default: ["구매", "bg-slate-100"],
    Succese: ["확정", "bg-black text-white"],
    CanCle: ["취소", "bg-slate-100"],
    Fail: ["거래불가", "bg-red-100"],
    Error: ["서버 오류", "bg-red-100"],
  };

  const [message, background] = status[type] || status.Error;

  return (
    <button
      onClick={onClick}
      className={`rounded-md py-4 w-44 whitespace-nowrap border-2 border-black ${background}`}
    >
      {message}
    </button>
  );
};

export default Button;
