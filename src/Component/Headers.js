import { IoMdMenu } from "react-icons/io";
<IoMdMenu />;
const Headers = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 right-0 border-b border-slate-200 p-5 font-bold flex border-b border-slate-200 p-5 bg-gradient-to-br from-blue-50 to-indigo-100 font-bold flex gap-3 items-center  bg-white  z-50">
      <button onClick={toggleSidebar} className="">
        <IoMdMenu />
      </button>
      <h1 className="text-lg">Car Shoopy</h1>
    </header>
  );
};

export default Headers;
