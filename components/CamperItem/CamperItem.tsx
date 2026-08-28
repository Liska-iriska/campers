import { Camper } from "@/types/camper";
import css from "./CamperItem.module.css";
import Image from "next/image";
import Link from "next/link";

type Props = {
  item: Camper;
};

const CamperItem = ({ item }: Props) => {
  console.log("CamperItem id:", item.id);
  return (
    <li className={css.section}>
      <Image
        className={css.img}
        src={item.coverImage}
        height={240}
        width={219}
        alt={item.name}
        loading="lazy"
      />

      <div className={css.container}>
        <div className={css.heading}>
          <p>{item.name}</p>
          <p>€{item.price}</p>
        </div>
        <div className={css.headingTwo}>
          <p>
            <svg className={css.iconRate} width="16" height="16">
              <use href="/sprite.svg#icon-rating" />
            </svg>
            {item.rating}({item.totalReviews} Reviews)
          </p>
          <p>
            <svg className={css.icon} width="16" height="16">
              <use href="/sprite.svg#icon-map" />
            </svg>
            {item.location}
          </p>
        </div>
        <p className={css.description}>{item.description}</p>
        <div className={css.about}>
          <p className={css.aboutP}>
            <svg className={css.icon} width="20" height="20">
              <use href="/sprite.svg#icon-engine" />
            </svg>
            {item.engine}
          </p>
          <p className={css.aboutP}>
            <svg className={css.icon} width="20" height="20">
              <use href="/sprite.svg#icon-transmission" />
            </svg>
            {item.transmission}
          </p>
          <p className={css.aboutP}>
            <svg className={css.icon} width="20" height="20">
              <use href="/sprite.svg#icon-form" />
            </svg>
            {item.form}
          </p>
        </div>
        <Link className={css.link} href={`/catalog/${item.id}`}>
          Show more
        </Link>
      </div>
    </li>
  );
};

export default CamperItem;
