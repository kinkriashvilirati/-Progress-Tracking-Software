import type { ButtonStateProps, NavItems } from "../types/CommonTypes";

export const stateButtons: ButtonStateProps[] = [
  { content: "საწყისები", status: "start" },
  { content: "პროგრესში", status: "progress" },
  { content: "მზადტესტირებისთვის", status: "test" },
  { content: "დასრულებული", status: "finish" },
];

export const navItems: NavItems = {
  logo: "MOMENTUM",
  createEmployee: "მომხმარებლის დამატება",
  createExercise: "+ დასრულების დამატება",
};
