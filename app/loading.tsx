import Spinner from "@/components/Spinner/Spinner";
import css from "./page.module.css";

export default function Loading() {
  return (
    <div className={css.load}>
      <Spinner size={80} ariaLabel="oval-loading" />
    </div>
  );
}
