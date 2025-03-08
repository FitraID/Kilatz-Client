import { useNavigate, useParams } from "react-router-dom";

const ModifyBarang = () => {
  const { id } = useParams();
  const title = !id ? "Tambah Barang" : "Rokok Surya";
  const subtitle = !id
    ? "Tambahkan barang baru ke database"
    : "Edit data dari Rokok Surya";
  const buttonText = !id ? "Tambah Barang" : "Edit Item ini";

  const nav = useNavigate();

  function tousandSeparator(e) {
    let text = e.target.value.replace(/[^0-9]/g, "");
    let formatted = Number(text).toLocaleString("en-ID");
    e.target.value = formatted;
  }

  return (
    <>
      <div className="mx-5 my-5">
        <button
          onClick={() => nav("/master")}
          className="bg-neutral-100 hover:bg-white active:bg-neutral-200 px-5 py-2 mb-3 rounded"
        >
          Kembali
        </button>
        <div className="card-white">
          <div className="text-2xl bg-gradient-to-r from-amber-500 to-amber-600 inline-block text-transparent bg-clip-text p-0 m-0">
            {title}
          </div>
          <div className="text-xs text-neutral-500 mb-1">{subtitle}</div>
          <div className="w-20 h-[2px] bg-amber-500 mb-3"></div>
          {/* Form Section */}
          <div className="mb-3">
            <div className="text-lg text-neutral-600 mb-1 font-semibold">
              Nama
            </div>
            <input
              type="text"
              name=""
              className="text-md input-primary w-full"
              placeholder="rokok..."
              id=""
            />
          </div>
          <div className="mb-3">
            <div className="text-lg text-neutral-600 mb-1 font-semibold">
              Harga
            </div>
            <input
              type="text"
              placeholder="20000"
              name=""
              onChange={tousandSeparator}
              className="text-md input-primary w-full"
              id=""
            />
          </div>
          <div className="mb-5">
            <div className="text-lg text-neutral-600 mb-1 font-semibold">
              Stok
            </div>
            <input
              type="number"
              name=""
              className="text-md input-primary w-32"
              id=""
            />
          </div>
          <div className="mb-3">
            <button className="button-primary w-full">{buttonText}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModifyBarang;
