import { useQuery } from "@tanstack/react-query";
import type { FilterType } from "../../types/CommonTypes";
import { getDepartments, getPriorities } from "../../data/APIGet";
import { ComponentLoading } from "../shared/Loading";
import { ComponentError, EmptyFilter } from "../shared/Error";
import type { FilterItem } from "../../types/APITypes";

export default function FilterItem({ filterType }: { filterType: FilterType }) {
  const isDepartment = filterType === "departament";
  const isPriority = filterType === "priority";
  const isEmployee = filterType === "employee";

  const departmentsQury = useQuery({
    queryKey: ["departments"],
    queryFn: getDepartments,
    enabled: isDepartment,
  });

  const priorityQuery = useQuery({
    queryKey: ["priorities"],
    queryFn: getPriorities,
    enabled: isPriority,
  });
  const isLoading = priorityQuery.isLoading || departmentsQury.isLoading;

  if (isLoading) return <ComponentLoading />;
  const priorityItems = priorityQuery.data?.map((item) => {
    return {
      name: item.name,
      id: item.id,
    };
  });

  const departmentItems =
    departmentsQury.data?.map((item) => {
      return {
        name: item.name,
        id: item.id,
      };
    }) ?? [];

  let data: FilterItem[] = [];
  if (isDepartment) {
    data = departmentItems ?? [];
  } else if (isPriority) {
    data = priorityItems ?? [];
  } else if (isEmployee) {
    data = [];
  }

  if (departmentsQury.isError) return <ComponentError />;
  if (data.length === 0) return <EmptyFilter />;
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

              <span className="flex bg-finish h-5 w-5 items-center justify-center rounded border border-primary bg-transparent text-transparent peer-checked:text-primary">
                ✓
              </span>

              <span>{item.name}</span>
            </label>
          );
        })
      )}
    </>
  );
}
