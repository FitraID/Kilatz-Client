const DashboardStock = () => {
  const dataStok = [
    { nama: "Roti", stok: "4" },
    { nama: "Ampar", stok: "2" },
    { nama: "Rokok", stok: "1" },
    { nama: "Rokok", stok: "1" },
    { nama: "Rokok", stok: "0" },
    { nama: "Rokok", stok: "1" },
    { nama: "Gula", stok: "3" },
    { nama: "Kopi", stok: "2" },
  ];

  var sorted = dataStok.sort((a, b) => a.stok - b.stok);

  return (
    <>
      <div className="card-white">
        <div className="text-center text-2xl text-neutral-900">
          Laporan Stok
        </div>
        <div className="text-center text-neutral-500 mb-3">
          Laporan terhadap barang yang memiliki stok minim
        </div>
        <div className="flex justify-center mb-3">
          <div className="h-[2px] w-40 bg-primary-400"></div>
        </div>
        <div className="flex justify-center overflow-auto max-h-[70svh]">
          <table className="table-primary">
            <thead>
              <tr>
                <th className="text-start">Nama</th>
                <th>Stok</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((data, index) => (
                <tr>
                  <td>{data.nama}</td>
                  <td>{data.stok}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashboardStock;
