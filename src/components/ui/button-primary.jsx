const ButtonPrimary = ({ text, extraClass }) => {
  return (
    <>
      <button
        className={`
        ${extraClass}
        w-full rounded-full  transition-colors bg-primary-500 text-fifth-500 font-montserratBold
      hover:bg-primary-400 
      active:bg-primary-700 
      `}
      >
        {text ?? "Primary"}
      </button>
    </>
  );
};

export default ButtonPrimary;
