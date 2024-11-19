const DateText = () => {
  // type에 따른 메시지와 클래스 설정

  return (
    <span className={`font-normal`}>
      {new Date().toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long", // "long"은 "월"을 "1월"처럼 표시
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true, // 오후/오전 형식
      })}
    </span>
  );
};

export default DateText;
