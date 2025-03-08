import { X } from "lucide-react";
import { useEffect, useState } from "react";

const TransactionPayment = ({ current, func, setFunc }) => {
  let totalPrice = 0;
  const [change, setChange] = useState(0);

  current.forEach((data, index) => {
    totalPrice += data.price * data.qty;
  });

  function setTousand(text) {
    return text.toLocaleString("en-ID");
  }

  function tousandSeparator(e) {
    let text = e.target.value.replace(/[^0-9]/g, "");
    let formatted = Number(text).toLocaleString("en-ID");
    e.target.value = formatted;
    calculate(text);
  }

  function tousand(number) {
    return number.toLocaleString("en-ID");
  }

  function calculate(number) {
    let payment = number.replace(".", "");
    let changes = payment - totalPrice;

    setChange(changes);
  }

  function deleteItem(index) {
    const newCurrent = [...current];
    newCurrent.splice(index, 1);

    setFunc(newCurrent);
  }

  return (
    <>
      <div className="m-5">
        <button
          onClick={() => func()}
          className="bg-neutral-100 hover:bg-white active:bg-neutral-200 px-5 py-2 mb-3 rounded"
        >
          Kembali
        </button>
        <div className="card-white-no-px-py pb-5 mb-5">
          <div className=" bg-gradient-to-r from-primary-500 to-primary-600 mb-3 rounded-tl-md rounded-tr-md py-3">
            <div className="text-xs text-center text-neutral-100">
              Total Tagihan
            </div>
            <div className="flex justify-center text-neutral-100 text-5xl">
              <div>
                <span className="text-sm">Rp.</span>
                {setTousand(totalPrice)}
              </div>
            </div>
          </div>
          <div className="px-5 mb-2">
            <div className="mb-3">
              <div className="mb-1 font-semibold">Bayar</div>
              <input
                type="text"
                name=""
                onChange={tousandSeparator}
                placeholder="masukan nominal..."
                className="input-primary px-5 w-full"
                id=""
              />
            </div>
            <div className="mb-7">
              <div className="mb-1 font-semibold">Kembali</div>
              <div className="w-full py-2 bg-primary-200 rounded px-5 text-neutral-700">
                {change === 0 ? <>Uang Pas</> : <>Rp.{tousand(change)}</>}
              </div>
            </div>
            <div className="mb-3">
              <button disabled className="button-primary w-full">
                Bayar
              </button>
            </div>
          </div>
        </div>
        <div className="card-white">
          <div className="text-center text-sm">***</div>
          <div className="text-center text-lg font-semibold text-neutral-600">
            Total Item
          </div>
          <div className="text-center text-sm text-neutral-400 mb-3">
            Terimakasih Sudah Berbelanja
          </div>
          <hr className="border border-dashed border-black mb-3" />
          {current.map((data, index) => (
            <div className="grid grid-cols-12 mb-2" key={index}>
              <div className="col-span-9 h-full">
                <div className="">
                  {data.name} x {data.qty}
                </div>
                <div className="text-sm font-mono">{data.price}</div>
              </div>
              <div className="col-span-3 h-full flex flex-row gap-2 items-center justify-end">
                <div className="font-mono">{data.qty * data.price}</div>
                <X
                  onClick={() => deleteItem(index)}
                  className="size-5 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TransactionPayment;
