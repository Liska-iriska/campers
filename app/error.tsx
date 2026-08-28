"use client";

import { useEffect } from "react";
import css from "./page.module.css";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={css.errorPage}>
      <div className={css.errorContent}>
        <p className={css.errorCode}>Error</p>

        <h1 className={css.errorTitle}>Something went wrong</h1>

        <p className={css.errorMessage}>
          We couldn&apos;t complete your request. Please try again.
        </p>

        <button type="button" className={css.retryButton} onClick={reset}>
          Try again
        </button>
      </div>
    </div>
  );
}
