import BillingCard from "../components/ui/billing-card";
import ButtonDanger from "../components/ui/button-danger";
import ButtonPrimary from "../components/ui/button-primary";
import ButtonSecondary from "../components/ui/button-secondary";
import SearchInput from "../components/ui/search-input";

const BillingPage = () => {
  const dataBilling = [
    {
      no: 1,
      device: "ps3",
      waktuMulai: "2025-01-03 20:00:00",
    },
    {
      no: 2,
      device: "ps5",
      waktuMulai: "2025-01-03 20:00:00",
    },
    {
      no: 3,
      device: "ps4",
      waktuMulai: "2025-01-03 20:00:00",
    },
  ];
  return (
    <>
      <div className="px-5 pt-2">
        <SearchInput />
      </div>
      <div className="px-5 pb-5 grid grid-cols-2 gap-2 overflow-auto max-h-[73svh]">
        {dataBilling.map((data, index) => (
          <BillingCard data={data} />
        ))}
      </div>
      <div className="fixed w-full flex gap-2 fhlex-row bottom-2 px-5">
        <ButtonPrimary extraClass="py-3" text="Billing Baru" />
        <ButtonDanger text="Hapus Billing" />
      </div>
    </>
  );
};

export default BillingPage;
