const AuthButton = ({ text, trigger }) => {
  return (
    <>
      <div className="w-full">
        <button
          className="py-3 font-montserrat text-fifth-500 font-extrabold rounded-3xl w-full transition-all
          bg-gradient-to-r from-primary-500 to-fifth-700
        hover:from-primary-700 hover:to-primary-500
        active:from-primary-900 active:to-primary-700
          "
          onClick={() => trigger()}
        >
          {text ?? "Sign Up"}
        </button>
      </div>
    </>
  );
};

export default AuthButton;
