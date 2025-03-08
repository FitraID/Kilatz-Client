import { NavLink } from "react-router-dom";

const SignUpIndex = () => {
  return (
    <>
      <div className="bg-white w-full h-screen">
        {/* Header */}
        <div className="w-full h-44 bg-gradient-to-tr from-green-400 to-green-600 rounded-br-full relative shadow-xl">
          <div className="absolute w-full h-full flex justify-start items-center ps-5">
            <div className="text-white font-serif text-4xl">Daftarkan Akun</div>
          </div>
        </div>
        <div className="text-center mt-8 mb-8 text-3xl font-serif text-neutral-600">
          Daftar Di Sini
        </div>
        {/* Forms */}
        <div className="px-5">
          <div className="mb-5">
            <input
              type="text"
              className="input-login"
              placeholder="Masukan Username...."
              name=""
              id=""
            />
          </div>
          <div className="mb-8">
            <input
              type="password"
              className="input-login"
              placeholder="Masukan Password...."
              name=""
              id=""
            />
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              className="ms-1 me-2 size-4 accent-green-500"
              name=""
              id="remember"
            />
            <label htmlFor="remember" className=" text-neutral-600">
              Ingat Saya di login selanjutnya
            </label>
          </div>
          <div className="mb-3">
            <button className="w-full bg-green-400 py-3 rounded text-xl text-neutral-50">
              Login
            </button>
          </div>
          <div className="text-center  text-neutral-600">
            Sudah memiliki akun?{" "}
            <NavLink to={"/login"} className="underline text-green-500">
              Login Disini
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpIndex;
