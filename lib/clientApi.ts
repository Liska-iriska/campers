import { api } from "./api";
// import { isAxiosError } from "axios";
import { CamperDetails, Review } from "@/types/camper";

export interface FiltersResponse {
  forms: string[];
  transmissions: string[];
  engines: string[];
}

export interface BookingRequestData {
  name: string;
  email: string;
}

export interface BookingRequestResponse {
  message: string;
}

export const getSingleCamper = async (id: string): Promise<CamperDetails> => {
  const response = await api.get<CamperDetails>(`/campers/${id}`);
  return response.data;
};

export const fetchCampersFilters = async (): Promise<FiltersResponse> => {
  const response = await api.get<FiltersResponse>(`/campers/filters`);
  return response.data;
};

export const fetchCamperReviews = async (
  camperId: string,
): Promise<Review[]> => {
  const response = await api.get<Review[]>(`/campers/${camperId}/reviews`);
  return response.data;
};

export const createBookingRequest = async (
  camperId: string,
  data: BookingRequestData,
): Promise<BookingRequestResponse> => {
  const response = await api.post<BookingRequestResponse>(
    `/campers/${camperId}/booking-requests`,
    data,
  );
  return response.data;
};
