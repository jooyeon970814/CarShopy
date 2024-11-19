const SalesInfo = () => {
  return (
    <div className={`flex flex-col p-5  font-semibold`}>
      <h1 className="text-lg mb-1">방문 정보 </h1>
      <span className="flex justify-between">
        <p>고객명 :</p> <p>김기아</p>
      </span>
      <span className="flex justify-between">
        <p>연락처 :</p> <p>010-7890-7890</p>
      </span>
      <span className="flex justify-between ">
        <p className="whitespace-nowrap">방문장소 :</p>{" "}
        <p className="w-44">16919 서울시 강남구 삼성로 763 금탁프라자 301호</p>
      </span>
      <span className="flex justify-between">
        <p>방문 일정 :</p> <p>2025년 1월 9일 오후 2:00</p>
      </span>
    </div>
  );
};

export default SalesInfo;
