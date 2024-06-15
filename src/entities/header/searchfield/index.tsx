import { FC } from "react";

export const SearchField: FC = () => {
  return (
    <div className="my-auto">
      <input
        type="text"
        name="Search"
        id="HeaderSearchInput"
        placeholder="Search for products..."
        className="px-3 w-[23rem] h-[3rem] border-2 border-gray-400 rounded-md text-gray-400"
      />
    </div>
  );
};
