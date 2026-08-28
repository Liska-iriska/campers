import { Camper } from "@/types/camper";
import CamperItem from "../CamperItem/CamperItem";
import css from "./CamperList.module.css";

type Props = {
  campers: Camper[];
};

const CamperList = ({ campers }: Props) => {
  return (
    <section className={css.section}>
      <ul className={css.list}>
        {campers.map((camper) => (
          <CamperItem key={camper.id} item={camper} />
        ))}
      </ul>
    </section>
  );
};

export default CamperList;
