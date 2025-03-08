import { Eye, Trash2, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MasterBarang = () => {
  const listBarangs = [
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

  const [searchResult, setSearchResult] = useState(listBarangs);
  const nav = useNavigate();

  function doSearch(e) {
    let searchKey = e.target.value.toLowerCase();

    if (!e.target.value) {
      setSearchResult(listBarangs);
    } else {
      let newArr = listBarangs.filter((item) =>
        item.name.toLowerCase().includes(searchKey)
      );
      setSearchResult(newArr);
    }
  }

  function movePage(path) {
    nav(path);
  }

  return (
    <>
      <div className="my-5 mx-3">
        <div className="card-white mb-3">
          <div className="flex justify-center">
            <div className="mb-3 text-3xl py-1 text-center bg-gradient-to-r from-primary-500 to-primary-600 inline-block text-transparent bg-clip-text">
              List Items
            </div>
          </div>
          <div className="mb-3 relative z-0">
            <div className="absolute z-0 w-12 h-full flex items-center gap-2 ps-2">
              <Search className="size-7 text-neutral-900" />
              <div className="bg-neutral-900 h-5 w-[1px]"></div>
            </div>
            <input
              type="text"
              name=""
              className="w-full outline-primary-500 ring-1 ring-primary-200 ps-14 pe-2 py-2 focus:shadow-md focus:shadow-primary-500 transition-all"
              placeholder="search barang...."
              onChange={doSearch}
              id=""
            />
          </div>
          <div className="h-[50vh] overflow-auto">
            <table className="table-primary">
              <thead>
                <tr>
                  <th className="w-52 lg:w-auto text-start">Nama</th>
                  <th>Stok</th>
                  <th className="text-end ">Action</th>
                </tr>
              </thead>
              <tbody>
                {searchResult.length > 0 ? (
                  searchResult.map((data, index) => (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.stock}</td>
                      <td>
                        <div className="flex flex-wrap justify-end items-center gap-2 pe-2">
                          <button
                            onClick={() =>
                              movePage(`/master/barangs/${data.id}`)
                            }
                            className="bg-primary-400 hover:bg-primary-500 active:bg-primary-300 py-1 px-2 rounded shadow-lg shadow-gray-400"
                          >
                            <Eye className="size-5" />
                          </button>
                          <button
                            onClick={() =>
                              movePage(`/master/barangs/${data.id}`)
                            }
                            className="bg-red-400 hover:bg-red-500 active:bg-red-300 py-1 px-2 rounded shadow-lg shadow-gray-400"
                          >
                            <Trash2 className="size-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <>
                    <tr>
                      <td colSpan={3} className="w-full ">
                        <div className="flex justify-center">
                          Tidak Ada Data
                        </div>
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <button
          onClick={() => movePage("/master/barangs")}
          className="bg-primary-500 hover:bg-primary-600 active:bg-primary-400 text-neutral-100 w-full py-3 mb-5 rounded shadow-md transition-all text-xl"
        >
          Tambah Item
        </button>
      </div>
    </>
  );
};

export default MasterBarang;
