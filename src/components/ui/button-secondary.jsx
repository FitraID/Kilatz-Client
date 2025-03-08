const ButtonSecondary = ({ text, extraClass }) => {
  return (
    <>
      <button
        className={`
        w-full rounded-full  transition-colors bg-fourth-500 text-fifth-500 font-montserratBold
        hover:bg-fourth-400 
        active:bg-fourth-700 
        ${extraClass}
        `}
      >
        {text ?? "Secondary"}
      </button>
    </>
  );
};

export default ButtonSecondary;
