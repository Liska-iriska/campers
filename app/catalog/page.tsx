import { fetchCatalog } from "@/lib/serverApi";
import CamperList from "@/components/CamperList/CamperList";
import EmptyPage from "@/components/EmptyPage/EmptyPage";

const Catalog = async () => {
  const response = await fetchCatalog(
    "Dnipro",
    1,
    4,
    "alcove",
    "automatic",
    "diesel",
  );

  return (
    <section>
      {response?.campers?.length > 0 ? (
        <CamperList campers={response.campers} />
      ) : (
        <EmptyPage />
      )}
    </section>
  );
};

export default Catalog;
