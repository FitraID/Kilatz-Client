import { User2, LogOut } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const UserCircle = () => {
  const [isShown, setIsShown] = useState(false);

  const menuList = [
    {
      icon: User2,
      title: "Profile",
      path: "",
      iconColor: "",
    },
    {
      icon: LogOut,
      title: "Log Out",
      path: "/login",
      iconColor: "text-red-500",
    },
  ];
  return (
    <>
      <div className="flex justify-end items-center h-full pe-5 relative z-10">
        <div
          onClick={() => setIsShown(!isShown)}
          className="rounded-full bg-primary-500 w-10 h-10"
        >
          <img
            src="/images/user-face.jpeg"
            className="w-10 rounded-full h-10 bg-clip-content"
            alt=""
          />
        </div>
        {isShown && (
          <div className="absolute bg-fifth-600 shadow-xl z-10 right-5 top-16">
            {menuList.map((data, index) => (
              <>
                <NavLink
                  to={data.path}
                  className="flex flex-row gap-3 py-2 hover:bg-primary-50 active:bg-primary-300 ps-5 pe-16"
                >
                  <data.icon className={`size-5 ${data.iconColor}`} />
                  <div className={`font-montserrat ${data.iconColor}`}>
                    {data.title}
                  </div>
                </NavLink>
                {menuList.length != index + 1 && (
                  <div className="px-5">
                    <hr className="" />
                  </div>
                )}
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default UserCircle;
