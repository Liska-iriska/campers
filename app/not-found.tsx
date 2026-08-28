import css from "./page.module.css";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "404 - Page not found",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <div className={css.errorContainer}>
      <Image
        className={css.img}
        src="/img/not-found@2x.webp"
        height={240}
        width={219}
        alt="Not found image"
        loading="lazy"
      />
      <h1 className={css.errorTitle}>404 - Page not found</h1>
      <p className={css.errorDescription}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
