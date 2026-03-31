import axios from "axios";
import type { Department } from "../types/APITypes";
const URL: string = "https://momentum.redberryinternship.ge/api/";

export const getDepartments = async () => {
  const response = await axios.get<Department[]>(`${URL}departments`);
  return response.data;
};
