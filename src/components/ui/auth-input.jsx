import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const AuthInput = ({ type, placeholder, ispassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="relative ">
        <input
          type={ispassword && showPassword ? "text" : type ?? "text"}
          className="
        font-montserrat text-neutral-900 bg-f5 rounded-xl w-full py-5 px-2 outline-none
        focus:outline-1 focus:outline-primary-500 focus:px-3 transition-all  "
          name=""
          placeholder={placeholder ?? "no Placeholder"}
          id=""
        />
        {ispassword && (
          <div className="absolute top-0 h-full right-5 flex items-center px-2">
            {showPassword ? (
              <EyeOff onClick={() => setShowPassword(!showPassword)} />
            ) : (
              <Eye onClick={() => setShowPassword(!showPassword)} />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AuthInput;
