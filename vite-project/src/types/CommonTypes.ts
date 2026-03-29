export type Theme = "light" | "dark";
export interface ButtonStateProps {
  content: string;
  status: string;
}
export interface NavItems {
  logo: string;
  createEmployee: string;
  createExercise: string;
}

export type FilterType = "departament" | "priority" | "employee";
export interface FilterProps {
  isFilter: boolean;
  setIsFilter?: React.Dispatch<React.SetStateAction<boolean>>;
  filterType?: FilterType;
}
