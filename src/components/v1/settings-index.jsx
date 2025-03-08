const SettingIndex = () => {
  return (
    <>
      <div className="m-5">
        <div className="text-3xl mb-3">Settings</div>
        <div className="card-white">
          <div className="mb-5">
            <div className="mb-2 text-lg">Setting kertas</div>
            <input
              type="number"
              name=""
              className="input-primary w-full"
              placeholder="20..."
              id=""
            />
          </div>
          <button className="button-primary w-32">Simpan</button>
        </div>
      </div>
    </>
  );
};

export default SettingIndex;
