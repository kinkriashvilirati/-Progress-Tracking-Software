import axios from "axios";
import type { Department, Priority } from "../types/APITypes";
const URL: string = "https://momentum.redberryinternship.ge/api/";
// https://momentum.redberryinternship.ge/api/priorities
export const getDepartments = async () => {
  const response = await axios.get<Department[]>(`${URL}departments`);
  return response.data;
};

export const getPriorities = async () => {
  try {
    const response = await fetch(`${URL}priorities`);
    if (!response.ok) throw new Error("Failed to fetch priorities");
    return response.json() as Promise<Priority[]>;
  } catch (err) {
    console.error(err);
  }
};
