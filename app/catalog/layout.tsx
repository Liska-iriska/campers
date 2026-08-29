import { Metadata } from "next";
import css from "./@sidebar/Sidebar.module.css";

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

export const metadata: Metadata = {
  title: "TravelTrucks | Catalog",
  description: "You can find everything you want in our catalog",
  openGraph: {
    title: "TravelTrucks | Catalog",
    description: "You can find everything you want in our catalog",
    url: `https://campers-beryl-theta.vercel.app/catalog`,
    siteName: "TravelTrucks | Catalog",
    images: [
      {
        url: "https://campers-beryl-theta.vercel.app/img/main-img@2x.webp",
        width: 1200,
        height: 630,
        alt: "TravelTrucks logo",
      },
    ],
    type: "website",
  },
};

const CampersLayout = ({ children, sidebar }: Props) => {
  return (
    <section className={css.layoutStyle}>
      <aside className={css.aside}>{sidebar}</aside>
      <div className={css.children}>{children}</div>
    </section>
  );
};

export default CampersLayout;
