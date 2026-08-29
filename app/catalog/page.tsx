import { fetchCatalog } from "@/lib/serverApi";
import CamperList from "@/components/CamperList/CamperList";
import EmptyPage from "@/components/EmptyPage/EmptyPage";
import css from "./@sidebar/Sidebar.module.css";

interface Props {
  searchParams: Promise<{
    location?: string;
    form?: string;
    transmission?: string;
    engine?: string;
  }>;
}

const Catalog = async ({ searchParams }: Props) => {
  const { location, form, transmission, engine } = await searchParams;

  const response = await fetchCatalog(
    location ?? undefined,
    1,
    4,
    form ?? undefined,
    transmission ?? undefined,
    engine ?? undefined,
  );

  return (
    <section className={css.mainSection}>
      {response?.campers?.length > 0 ? (
        <CamperList campers={response.campers} />
      ) : (
        <EmptyPage />
      )}
    </section>
  );
};

export default Catalog;
