import { api } from "./api";
// import { isAxiosError } from "axios";
import { CamperDetails } from "@/types/camper";

export const getSingleCamper = async (id: string): Promise<CamperDetails> => {
  const response = await api.get<CamperDetails>(`/campers/${id}`);
  return response.data;
};
