import { api } from "./api";
import { Camper, FiltersResponse, CampersResponse } from "@/types/camper";

export const fetchCatalog = async (
  location?: string,
  page: number = 1,
  perPage: number = 4,
  form?: string,
  transmission?: string,
  engine?: string,
) => {
  const response = await api.get<CampersResponse>("/campers", {
    params: {
      location: location?.trim() || undefined,
      page,
      perPage,
      form,
      transmission,
      engine,
    },
  });
  return response.data;
};
