import { Children, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChartPie, Settings, Package, ShoppingCart, Clock } from "lucide-react";
import UserCircle from "../ui/user-circle";

const NavBar = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const nav = useNavigate();
  const navList = [
    { name: "Dashboard", path: "/dashboard", icon: ChartPie },
    { name: "Transaksi", path: "/transaksi", icon: ShoppingCart },
    { name: "Billing", path: "/billing", icon: Clock },
    { name: "Master Data", path: "/master", icon: Package },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  useEffect(() => {
    if (window.location.pathname === "/login") {
      setIsLogin(true);
    } else if (window.location.pathname === "/signup") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [window.location.pathname]);

  const setSidebar = () => {
    setIsSidebar(!isSidebar);
    // alert(window.location.pathname);
  };

  const changePage = (path) => {
    setIsSidebar(false);

    nav(path);
  };

  return isLogin ? (
    <>{children}</>
  ) : (
    <>
      <div className="bg-gray-100 h-16 w-full sticky z-20">
        <div
          className={`${
            isSidebar ? "" : " -translate-x-full"
          } w-screen h-screen fixed z-20 flex transition-transform duraton-500`}
        >
          <div className="bg-neutral-100 shadow-2xl h-full w-72 flex-shrink-0">
            <div className="flex justify-center items-center mt-5">
              <div className="bg-gradient-to-r from-primary-400 to-primary-600 inline-block text-4xl h-12 text-transparent bg-clip-text">
                Logo
              </div>
            </div>
            <div className="text-center text-neutral-700">
              Navigasi Aplikasi
            </div>
            <hr className="border-primary-500 mx-5 my-5" />
            {navList.map((data, index) => (
              <button
                onClick={() => changePage(data.path)}
                key={index}
                className="mx-5 grid grid-cols-12 gap-2 group hover:bg-primary-300 ps-2 pe-8 py-2 rounded transition-colors mb-1"
              >
                <div className="col-span-2 flex justify-center">
                  <data.icon className="size-7 transition-colors text-neutral-700" />
                </div>
                <div className="col-span-10 flex items-center">
                  <div className="text-lg transition-colors text-neutral-700">
                    {data.name}
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div
            onClick={() => setSidebar()}
            className="flex-grow h-full bg-gray-800 opacity-60 relative z-30"
          ></div>
        </div>
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-2 h-full w-full ">
            <div className="flex items-center justify-start h-full ps-5">
              <button onClick={() => setSidebar()}>
                <img
                  src="/images/menu.png"
                  className="w-[32px] h-[32px]"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="col-span-10">
            <UserCircle />
          </div>
        </div>
        <div className="absolute z-0 w-full h-[4px] bg-gradient-to-r from-primary-200 to-primary-400 bottom-0"></div>
        <div className="">{children}</div>
      </div>
    </>
  );
};

export default NavBar;
