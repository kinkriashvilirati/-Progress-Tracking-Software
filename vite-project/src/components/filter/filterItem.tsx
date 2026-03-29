import { filterItems } from "../../data/filterData";
import type { FilterType } from "../../types/CommonTypes";

export default function FilterItem({ filterType }: { filterType: FilterType }) {
  const data = filterItems[filterType];
  return (
    <>
      {data.map((item) => {
        console.log(item);
        return (
          <label
            key={item.id}
            className="flex items-center gap-5 cursor-pointer"
          >
            <input type="checkbox" className="peer sr-only" />

            <span className="flex h-5 w-5 items-center justify-center rounded border border-primary bg-transparent text-transparent peer-checked:text-primary">
              ✓
            </span>

            <span>{item.item}</span>
          </label>
        );
      })}
    </>
  );
}
