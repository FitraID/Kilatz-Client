import { NavLink } from "react-router-dom";
import { postWithData } from "../../hooks/postHooks";

const LoginIndex = () => {
  const AttempLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    let data = {
      email: formData.get("username"),
      password: formData.get("password"),
    };

    let result = await postWithData("login", data);
    console.log(result);
  };

  return (
    <>
      <div className="bg-white w-full h-screen">
        {/* Header */}
        <div className="w-full h-44 bg-gradient-to-tr from-green-400 to-green-600 rounded-bl-full relative shadow-xl">
          <div className="absolute w-full h-full flex justify-end items-center pe-5">
            <div className="text-white font-serif text-4xl">
              Angkringan Login
            </div>
          </div>
        </div>
        <div className="text-center mt-8 mb-5 text-3xl font-serif text-neutral-600">
          Selamat Datang!
        </div>
        {/* Forms */}
        <form onSubmit={AttempLogin}>
          <div className="px-5">
            <div className="mb-5">
              <div className="font-semibold text-neutral-600 mb-2">
                Username
              </div>
              <input
                type="email"
                className="input-login"
                placeholder="User121...."
                name="username"
                id=""
              />
            </div>
            <div className="mb-8">
              <div className="font-semibold text-neutral-600 mb-2">
                Password
              </div>
              <input
                type="password"
                className="input-login"
                placeholder=""
                name="password"
                id="password"
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
              <button
                type="submit"
                className="w-full bg-green-400 py-3 rounded text-xl text-neutral-50"
              >
                Login
              </button>
            </div>
            <div className="text-center  text-neutral-600">
              Belum punya Akun?{" "}
              <NavLink to={"/signup"} className="underline text-green-500">
                Daftar disini
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginIndex;
