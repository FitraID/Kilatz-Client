import { useState } from "react";
import AuthSlider from "../components/auth-sllider";
import AuthInput from "../components/ui/auth-input";
import AuthButton from "../components/ui/auth-button";

const LoginPage = () => {
  const [sliderShow, setSliderShow] = useState(true);

  function changeSlider() {
    setSliderShow(!sliderShow);
  }

  return (
    <>
      {/* Slider */}
      <div
        className={`fixed bg-fifth-500 ${
          sliderShow ? "" : "-translate-y-full"
        } overflow-auto transition-all duration-500 ease-in-out z-30`}
      >
        <AuthSlider func={changeSlider} />
      </div>
      {/* Login Form */}
      <div className="px-5 relative z-10">
        <img
          onClick={() => changeSlider()}
          src="./images/arrow-left.png"
          alt=""
        />
        <div className="py-5">
          <div className="mb-2">
            <div className="font-montserratBold">Welcome Back</div>
          </div>
          <div className="mb-10">
            <div className="font-montserrat font-light text-xs">
              Log in with the account you have
            </div>
          </div>
          <div className="mb-10">
            <div className="font-montserratBold text-xs mb-2">
              Email <span className="text-red-500">*</span>
            </div>
            <div>
              <AuthInput type="email" placeholder="user332@gmai..." />
            </div>
          </div>
          <div className="mb-5">
            <div className="font-montserratBold text-xs mb-2">
              Password <span className="text-red-500">*</span>
            </div>
            <div>
              <AuthInput
                type="password"
                placeholder="Your Password..."
                ispassword={true}
              />
            </div>
          </div>
          <div className="mb-10">
            <div className="flex flex-row items-center gap-2">
              <div className="rounded-xl ">
                <input
                  type="checkbox"
                  className="shadow-xl shadow-neutral-500 accent-primary-500/75 size-4"
                  name=""
                  id=""
                />
              </div>
              <div className="font-montserrat text-xs">Remember Me</div>
            </div>
          </div>
          <div className="mb-2">
            <AuthButton text="Login" />
          </div>
          <div className="mb-12 flex justify-center">
            <a
              href="#"
              className="text-center font-montserrat underline text-xs"
            >
              Forgot Password?
            </a>
          </div>
          <div className="mb-3">
            <div className="font-montserrat font-bold text-xs text-center">
              You Don't have an account?{" "}
              <a
                href="#"
                className="font-montserrat text-primary-500 underline"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-12">
        <div className="col-span-4 flex items-center ">
          <div className="bg-neutral-900 w-full h-[1px] "></div>
        </div>
        <div className="col-span-4 text-[10px] text-center ">
          Or Sign Up With
        </div>
        <div className="col-span-4 flex items-center">
          <div className="bg-neutral-900 w-full h-[1px]"></div>
        </div>
      </div> */}
    </>
  );
};

export default LoginPage;
