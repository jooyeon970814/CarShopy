const Button = (props) => {
  const { type } = props;
  const status = {
    default: ["차량", "bg-slate-100"],
    Succese: ["출고", "bg-green-100"],
    CanCle: ["취소", "bg-red-100"],
    Fail: ["반려", "bg-red-100"],
    Error: ["서버 오류", "bg-red-100"],
  };
  const [message, color] = status[type] || status.Error;

  return (
    <span
      className={`rounded-full w-16 h-8 pt-1 text-center whitespace-nowrap ${color}`}
    >
      {message}
    </span>
  );
};

export default Button;
