import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FilterProps, FilterType } from "../../types/CommonTypes";
import { useState } from "react";
import FilterModule from "./FIlterModule";

export default function Filter({ isFilter, setIsFilter }: FilterProps) {
  const [filterType, setFilterType] = useState<FilterType>();

  const handleClick = (type: FilterType) => {
    if (!setIsFilter) return;
    if (filterType == type) {
      setIsFilter((prev) => !prev);
    } else {
      setIsFilter(true);
    }
    setFilterType(type);
  };

  return (
    <div className=" relative flex flex-col border rounded-2xl border-border-gray justify-between gap-4  max-w-full py-2 my-3 sm:flex-row sm:max-w-4/5 lmd:max-w-3/4 lg:max-w-1/2 lg:px-3 px-2">
      <div
        className="filterPart"
        onClick={() => {
          handleClick("departament");
        }}
      >
        <p>დეპარტამენტი</p>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div
        className="filterPart"
        onClick={() => {
          handleClick("priority");
        }}
      >
        <p>პრიორიტეტი</p>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div
        className="filterPart"
        onClick={() => {
          handleClick("employee");
        }}
      >
        <p>თანამშრომლები</p>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div className={isFilter ? `` : `max-h-0 overflow-hidden `}>
        <FilterModule
          isFilter={isFilter}
          setIsFilter={setIsFilter}
          filterType={filterType}
        />
      </div>
    </div>
  );
}
