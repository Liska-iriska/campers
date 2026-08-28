import { api } from "./api";
// import { isAxiosError } from "axios";
import { CamperDetails } from "@/types/camper";

export interface FiltersResponse {
  forms: string[];
  transmissions: string[];
  engines: string[];
}

export const getSingleCamper = async (id: string): Promise<CamperDetails> => {
  const response = await api.get<CamperDetails>(`/campers/${id}`);
  return response.data;
};

export const fetchCampersFilters = async (): Promise<FiltersResponse> => {
  const response = await api.get<FiltersResponse>(`/campers/filters`);
  return response.data;
};
