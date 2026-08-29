"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getSingleCamper } from "@/lib/clientApi";
import Spinner from "@/components/Spinner/Spinner";
import css from "./CamperDetails.module.css";
import CamperGallery from "@/components/Swiper/Swiper";
import BookingForm from "@/components/BookingForm/BookingForm";
import Reviews from "@/components/Reviews/Reviews";
import { notFound } from "next/navigation";

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
  if (!camper) {
    notFound();
  }

  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.swiper}>
          {camper.gallery.length > 0 && (
            <CamperGallery gallery={camper.gallery} alt={camper.name} />
          )}
        </div>
        <div className={css.sectionTwo}>
          <div className={css.cont}>
            <h2 className={css.heading}>{camper.name}</h2>
            <div className={css.headingTwo}>
              <p>
                <svg className={css.iconRate} width="16" height="16">
                  <use href="/sprite.svg#icon-rating" />
                </svg>
                {camper.rating}({camper.totalReviews} Reviews)
              </p>
              <p>
                <svg className={css.icon} width="16" height="16">
                  <use href="/sprite.svg#icon-map" />
                </svg>
                {camper.location}
              </p>
            </div>
            <p className={css.price}>€{camper.price}</p>
            <p className={css.description}>{camper.description}</p>
          </div>
          <div className={css.cont}>
            <h2 className={css.heading}>Vehicle details</h2>
            <ul className={css.list}>
              <li className={css.amenity}>{camper.transmission}</li>
              <li className={css.amenity}>{camper.engine}</li>
              {camper.amenities.map((amenity) => (
                <li className={css.amenity} key={amenity}>
                  {amenity === "ac" || amenity === "tv"
                    ? amenity.toUpperCase()
                    : amenity}
                </li>
              ))}
            </ul>
            <div className={css.table}>
              <ul className={css.tableTwo}>
                <li className={css.tableItem}>Form</li>
                <li className={css.tableItem}>Length</li>
                <li className={css.tableItem}>Width</li>
                <li className={css.tableItem}>Height</li>
                <li className={css.tableItem}>Tank</li>
                <li className={css.tableItem}>Consumption</li>
              </ul>
              <ul className={css.tableThree}>
                <li className={css.tableItem}>{camper.form}</li>
                <li className={css.tableItem}>{camper.length}</li>
                <li className={css.tableItem}>{camper.width}</li>
                <li className={css.tableItem}>{camper.height}</li>
                <li className={css.tableItem}>{camper.tank}</li>
                <li className={css.tableItem}>{camper.consumption}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={css.table}>
        <Reviews camperId={camperId} />
        <BookingForm camperId={camperId} />
      </div>
    </section>
  );
};

export default CamperDetailsClient;
