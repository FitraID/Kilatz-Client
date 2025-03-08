import { PencilIcon } from "lucide-react";

const BillingCard = ({ data }) => {
  return (
    <>
      <div className="w-full ">
        <div className="bg-green-500 w-full h-28 rounded-tr-xl rounded-tl-xl flex justify-center items-center">
          <div className="font-montserratBold text-f5 text-xl text-center">
            No. {data.no} <span className="uppercase">({data.device})</span>
          </div>
        </div>
        <div className="shadow-lg w-full rounded-br-xl rounded-bl-xl">
          <div className="grid grid-cols-2 px-2 pt-2 pb-3">
            <div>
              <div className="font-montserrat text-xs mb-1">Sisa Waktu</div>
              <div className="font-montserrat text-md w-full rounded border border-primary-600 text-primary-600 text-center">
                02:00:00
              </div>
            </div>
            <div className="flex justify-end items-center pe-3">
              <button className="bg-primary-500 hover:bg-primary-00 active:bg-primary-700 px-2 py-1 rounded">
                <PencilIcon className="size-5 text-f5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingCard;
