"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getSingleCamper } from "@/lib/clientApi";
import Spinner from "@/components/Spinner/Spinner";
import css from "./CamperDetails.module.css";
import CamperGallery from "@/components/Swiper/Swiper";

const CamperDetailsClient = () => {
  const { camperId } = useParams<{ camperId: string }>();

  const { data: camper, isLoading } = useQuery({
    queryKey: ["camper", camperId],
    queryFn: () => getSingleCamper(camperId),
    refetchOnMount: false,
  });

  if (isLoading) {
    return (
      <div className={css.load}>
        <Spinner size={80} ariaLabel="camper-loading" showText={false} />
      </div>
    );
  }
  if (!camper) return null;

  return (
    <div>
      {camper.gallery.length > 0 && (
        <CamperGallery gallery={camper.gallery} alt={camper.name} />
      )}
      <h2>{camper.name}</h2>
      <p>{camper.description}</p>
    </div>
  );
};

export default CamperDetailsClient;
