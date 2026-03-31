import type { FilterProps } from "../../types/CommonTypes";
import FilterItem from "./filterItem";

export default function FilterModule({ isFilter, filterType }: FilterProps) {
  return (
    <div
      className={`absolute bg-bg ${isFilter ? "block" : "hidden"} border-border-gray border rounded-2xl  top-35 sm:bottom-auto sm:top-10 max-h- w-full py-2 my-3 px-3 right-0`}
    >
      <div>{filterType && <FilterItem filterType={filterType} />}</div>
      <div className="flex justify-end">
        <button className="btn w-38.75 rounded-4xl">არჩევა</button>
      </div>
    </div>
  );
}
