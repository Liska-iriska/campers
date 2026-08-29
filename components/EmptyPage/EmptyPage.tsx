"use client";

import { useSearchParams } from "next/navigation";
import css from "./EmptyPage.module.css";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TravelTrucks | Error",
  description: "Error page",
};

export default function EmptyState() {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");

  const clearFiltersHref = location
    ? `/catalog?location=${encodeURIComponent(location)}`
    : "/catalog";
  return (
    <div className={css.overlay}>
      <div className={css.errorContainer}>
        <Image
          className={css.img}
          src="/img/not-found@2x.webp"
          height={463}
          width={488}
          alt="Nothing found"
          loading="lazy"
        />
        <h2 className={css.errorTitle}>No campers found</h2>
        <p className={css.errorDescription}>
          We couldn&apos;t find any campers that match your filters.
          <br />
          Try adjusting your search or clearing some filters.
        </p>
        <div className={css.btns}>
          <Link href={clearFiltersHref} className={css.btn}>
            <svg className={css.icon} width="24" height="24">
              <use href="/sprite.svg#icon-close" />
            </svg>
            Clear filters
          </Link>
          <Link href="/catalog" className={css.link}>
            View all campers
          </Link>
        </div>
      </div>
    </div>
  );
}
