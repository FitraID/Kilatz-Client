import { ChevronRight } from "lucide-react";

const TransaksiList = ({ current, setFunc }) => {
  var totalPrice = 0;
  var totalQty = 0;

  current.forEach((data, index) => {
    totalPrice += data.price * data.qty;
    totalQty += data.qty;
  });

  const tousandSeparator = (price) => {
    const formatted = price.toLocaleString("en-ID");
    return formatted;
  };

  return (
    <>
      <div
        onClick={() => setFunc()}
        className="fixed z-10 bottom-0 px-5 w-full"
      >
        <div className="rounded bg-gradient-to-tr from-primary-400 via-primary-500 to-primary-600 px-5 py-4 mb-2">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <div className="text-neutral-50 ms-3 text-xl">
                {totalQty} Items
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="text-neutral-50 ms-3 text-xl">
                Total : Rp.{tousandSeparator(totalPrice)}
              </div>
              <ChevronRight className="size-7 text-neutral-50" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransaksiList;
