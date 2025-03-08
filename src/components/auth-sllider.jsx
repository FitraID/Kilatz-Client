import AuthButton from "./ui/auth-button";

const AuthSlider = ({ func }) => {
  return (
    <>
      <div className="h-screen w-screen flex flex-col px-7">
        <img src="images/woman-phone.png" className="mb-7" alt="" />
        <div className="text-center font-montserratBold text-black mb-7">
          Pantau Bisnis dan Kelola <br />
          Karyawan dari Mana Saja
        </div>
        <div className="text-center text-xs font-montserrat mb-20">
          Buat keputusan bisnis sampai dengan <br />
          penggajian lebih cepat lewat akses owner.
        </div>
        <div className="mb-10">
          <AuthButton trigger={func} text="Login" />
        </div>
        <div className="flex justify-center mb-1">
          <img src="/images/arrow-2.png" alt="" />
        </div>
        <div className="mb-5">
          <div className="font-montserrat text-xs text-center">
            Create an account <br />
            login
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthSlider;
