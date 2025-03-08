import { PlusIcon } from "lucide-react";
import { Search } from "lucide-react";
import { useState } from "react";

const TransaksiInput = ({ current, setFunc }) => {
  const barangs = [
    { id: 1, stock: 10, name: "Rokok Surya", price: 28000 },
    { id: 2, stock: 3, name: "Rokok Climax", price: 28000 },
    { id: 3, stock: 3, name: "Rokok Raptor", price: 7000 },
    { id: 4, stock: 3, name: "Rokok Djarum", price: 30000 },
    { id: 5, stock: 3, name: "Rokok Mangga 76", price: 140000 },
    { id: 6, stock: 3, name: "Marimas", price: 4000 },
    { id: 7, stock: 3, name: "Kopi", price: 3000 },
    { id: 8, stock: 20, name: "Es Teh", price: 4000 },
    { id: 8, stock: 20, name: "Es Teh", price: 4000 },
    { id: 8, stock: 20, name: "Es Teh", price: 4000 },
    { id: 8, stock: 20, name: "Es Teh", price: 4000 },
  ];
  const [searchResult, setSearchResult] = useState(barangs);

  const tousandSeparator = (price) => {
    const formatted = price.toLocaleString("en-ID");
    return formatted;
  };

  const addItem = (data) => {
    const model = {
      id: data.id,
      name: data.name,
      price: data.price,
      qty: 1,
    };
    // console.log("current : " + current);

    if (current.length > 0) {
      const newIndex = current.findIndex((item) => item["id"] === model.id);
      // console.log("index : " + newIndex);

      if (newIndex !== -1) {
        const updatedItem = {
          ...current[newIndex],
          qty: current[newIndex].qty + 1,
        };

        const newArr = [...current];

        newArr[newIndex] = updatedItem;
        setFunc(newArr);
      } else {
        const newArr = [...current, model];
        setFunc(newArr);
      }
    } else {
      const newArr = [...current, model];
      setFunc(newArr);
    }
  };

  //Search Func
  function doSearch(e) {
    let key = e.target.value.toLowerCase();

    if (!e) {
      setSearchResult(barangs);
    } else {
      let newArr = barangs.filter((item) =>
        item.name.toLowerCase().includes(key)
      );
      setSearchResult(newArr);
    }
  }

  return (
    <>
      <div className="mb-20">
        <div className="sticky mb-5 z-0">
          <div className="bg-neutral-100 px-5 py-3 shadow-lg">
            <div className="relative">
              <div className="absolute z-10 w-12 h-full flex items-center gap-2 ps-2">
                <Search className="size-7 text-neutral-900" />
                <div className="bg-neutral-900 h-5 w-[1px]"></div>
              </div>
              <input
                type="text"
                name=""
                placeholder="Search Items..."
                onChange={doSearch}
                className="w-full outline-primary-500 ring-1 ring-primary-200 ps-14 pe-2 py-2 focus:shadow-md focus:shadow-primary-500 transition-all"
                id=""
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 max-h-[90svh] overflow-auto w-full px-5 pb-40">
          {searchResult.length > 0 ? (
            searchResult.map((data, index) => (
              <div
                key={index}
                className="bg-neutral-100 pb-5 rounded-xl shadow-xl shadow-gray-500 transition-colors"
              >
                <div className="flex justify-center items-center w-full h-32 bg-primary-100  mb-2 rounded-md transition-colors">
                  <div className="text-2xl text-neutral-600">
                    {data.name.substring(0, 2)}
                  </div>
                </div>
                <div className="text-sm font-semibold text-neutral-600 px-3">
                  {data.name}
                </div>
                <div className="flex justify-between px-3 items-center ">
                  <div>
                    <div className="text-lg text-primary-600">
                      Rp.{tousandSeparator(data.price)}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <PlusIcon
                      onClick={() => addItem(data)}
                      className="text-neutral-100 cursor-pointer rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 size-10 p-1 shadow-xl"
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="text-center py-10 text-gray-500">Data Kosong</div>
              <div className="text-center py-10 text-gray-500">
                Tidak ada Data
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TransaksiInput;
