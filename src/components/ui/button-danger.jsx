const ButtonDanger = ({ text, extraClass }) => {
  return (
    <>
      <button
        className={`
        w-full rounded-full  transition-colors bg-red-500 text-fifth-500 font-montserratBold
        hover:bg-red-400 
        active:bg-red-700 
        ${extraClass}
        `}
      >
        {text ?? "Danger"}
      </button>
    </>
  );
};

export default ButtonDanger;
