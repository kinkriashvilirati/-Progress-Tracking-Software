interface FilterItem {
  item: string;
  id: number;
}
interface FilterItems {
  priority: FilterItem[];
  departament: FilterItem[];
  employee: FilterItem[];
}
// "departament" | "priority" | "employee"

export const filterItems: FilterItems = {
  departament: [],
  priority: [
    { item: "ახალი", id: 1 },
    { item: "პრიორიტეტი", id: 2 },
    { item: "საშუალო", id: 3 },
  ],
  employee: [],
};
