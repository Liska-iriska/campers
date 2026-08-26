"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./Header.module.css";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link href="/" aria-label="home">
          <svg width={136} height={16} className={css.icon}>
            <use href="/sprite.svg#icon-logo" />
          </svg>
        </Link>
        <nav aria-label="Main Navigation">
          <ul className={css.navigation}>
            <li>
              <Link href="/" className={pathname === "/" ? css.active : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/catalog"
                className={pathname === "/catalog" ? css.active : ""}
              >
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
