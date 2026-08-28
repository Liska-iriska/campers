import css from "./Spinner.module.css";

type SpinnerProps = {
  size?: number;
  color?: string;
  secondaryColor?: string;
  thickness?: number;
  className?: string;
  ariaLabel?: string;
  showText?: boolean;
};

export default function Spinner({
  size = 60,
  color = "var(--green)",
  secondaryColor = "#D1E0D8",
  thickness = 4,
  className,
  ariaLabel = "Loading",
  showText = true,
}: SpinnerProps) {
  return (
    <>
      <div className={css.overlay}>
        <div className={css.wrap}>
          <span
            className={`${css.spinner} ${className ?? ""}`}
            style={{
              width: size,
              height: size,
              borderWidth: thickness,
              borderColor: secondaryColor,
              borderTopColor: color,
            }}
            role="status"
            aria-label={ariaLabel}
          />
          {showText && (
            <div className={css.loadDescription}>
              <h2 className={css.loadHeading}>Loading tracks...</h2>
              <p className={css.description}>
                Please wait while we fetch the best <br />
                travel trucks for you
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
