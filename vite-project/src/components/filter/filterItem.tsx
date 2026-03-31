import { useQuery } from "@tanstack/react-query";
import { filterItems } from "../../data/filterData";
import type { FilterType } from "../../types/CommonTypes";
import { getDepartments } from "../../data/APIGet";
import { useEffect, useState } from "react";
import { ComponentLoading } from "../shared/Loading";
import { ComponentError } from "../shared/Error";

export default function FilterItem({ filterType }: { filterType: FilterType }) {
  const isDepartment = filterType === "departament";
  const [isLoading, setIsLoading] = useState(true);
  const departmentsQury = useQuery({
    queryKey: ["departments"],
    queryFn: getDepartments,

    enabled: isDepartment,
  });
  useEffect(() => {
    setIsLoading(departmentsQury.isLoading);
  }, [departmentsQury]);

  if (departmentsQury.isError) return <ComponentError />;

  const departmentItems =
    departmentsQury.data?.map((item) => {
      return {
        item: item.name,
        id: item.id,
      };
    }) ?? [];
  const data = isDepartment ? departmentItems : filterItems[filterType];
  return (
    <>
      {isLoading ? (
        <ComponentLoading />
      ) : (
        data.map((item) => {
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
        })
      )}
    </>
  );
}
