"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCamperReviews } from "@/lib/clientApi";

type Props = {
  camperId: string;
};

function StarRating({ rating }: { rating: number }) {
  return (
    <span>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>{star <= rating ? "★" : "☆"}</span>
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
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <div>
              <span>{review.reviewer_name.charAt(0)}</span>
              <p>{review.reviewer_name}</p>
              <StarRating rating={review.reviewer_rating} />
            </div>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
