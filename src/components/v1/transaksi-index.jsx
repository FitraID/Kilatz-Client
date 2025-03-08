import { useState } from "react";
import TransaksiInput from "./transaksi-input";
import TransaksiList from "./transaksi-list";
import TransactionPayment from "./transaksi-payment";

const TransaksiIndex = () => {
  const [currentList, setCurrentList] = useState([]);
  const [isPaying, setIsPaying] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const changeSection = () => {
    if (!isPaying) {
      setIsPaying(!isPaying);

      setTimeout(() => {
        setIsHidden(!isHidden);
      }, 500);
    } else {
      setIsHidden(!isHidden);

      setTimeout(() => {
        setIsPaying(!isPaying);
      }, 500);
    }
  };

  return (
    <>
      <div
        className={`${isPaying ? "-translate-x-full" : ""} ${
          isHidden ? "hidden" : ""
        } duration-700 transition-all`}
      >
        <TransaksiInput current={currentList} setFunc={setCurrentList} />
        <TransaksiList current={currentList} setFunc={changeSection} />
      </div>
      <div className={`${isPaying ? "" : "hidden"} w-screen h-full`}>
        <TransactionPayment
          current={currentList}
          func={changeSection}
          setFunc={setCurrentList}
        />
      </div>
    </>
  );
};

export default TransaksiIndex;
