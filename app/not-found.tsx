import css from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page not found | NoteHub",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <div className={css.errorContainer}>
      <h1 className={css.errorTitle}>404 - Page not found</h1>
      <p className={css.errorDescription}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
