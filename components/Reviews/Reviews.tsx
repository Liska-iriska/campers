"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCamperReviews } from "@/lib/clientApi";

import css from "./Reviews.module.css";
type Props = {
  camperId: string;
};

function StarRating({ rating }: { rating: number }) {
  return (
    <span className={css.rate}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span className={css.icon} key={star}>
          {star <= rating ? "★" : "☆"}
        </span>
      ))}
    </span>
  );
}

export default function Reviews({ camperId }: Props) {
  const { data: reviews, isLoading } = useQuery({
    queryKey: ["reviews", camperId],
    queryFn: () => fetchCamperReviews(camperId),
  });

  if (isLoading) return null;
  if (!reviews || reviews.length === 0) return null;

  return (
    <div className={css.section}>
      <h2 className={css.heading}>Reviews</h2>
      <ul className={css.list}>
        {reviews.map((review) => (
          <li className={css.listItem} key={review.id}>
            <div className={css.container}>
              <span className={css.photo}>
                {review.reviewer_name.charAt(0)}
              </span>
              <div className={css.rating}>
                <p className={css.name}>{review.reviewer_name}</p>
                <StarRating rating={review.reviewer_rating} />
              </div>
            </div>
            <p className={css.review}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
