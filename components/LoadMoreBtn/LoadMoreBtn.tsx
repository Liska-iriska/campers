import css from "./LoadMoreBtn.module.css";

type Props = {
  onClick: () => void;
  isLoading?: boolean;
};

export default function LoadMoreBtn({ onClick, isLoading = false }: Props) {
  return (
    <button
      type="button"
      className={css.btn}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : "Load more"}
    </button>
  );
}
