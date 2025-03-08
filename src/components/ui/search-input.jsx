import { Search, X } from "lucide-react";

const SearchInput = ({ value, onChange }) => {
  return (
    <>
      <div className="relative z-0">
        <input
          type="text"
          className="
          outline-none w-full border-[1px] border-fourth-600 py-2 rounded-xl ps-10
          focus:border-primary-500/75
          "
          name=""
          placeholder="Search Billing..."
          id=""
        />
        <div className="absolute h-full w-10 top-0 left-0 flex items-center justify-center rounded-r-xl">
          <Search className="text-fourth-900" />
        </div>
        <div className="absolute h-full w-10 top-0 right-0 flex items-center justify-center rounded-r-xl">
          <X className="text-fourth-900" />
        </div>
      </div>
      ;
    </>
  );
};

export default SearchInput;
