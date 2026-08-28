import { api } from "./api";
import { Camper, CampersResponse } from "@/types/camper";

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

export const getSingleCamper = async (id: string) => {
  console.log("Fetching camper with id:", id);
  const response = await api.get<Camper>(`/campers/${id}`);
  return response.data;
};
