import axios from "axios";
const URL: string = "https://momentum.redberryinternship.ge/api/";

export const getDepartment = async () => {
  const response = await axios.get(URL + "departments");
  return response.data;
};
