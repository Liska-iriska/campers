import { fetchCatalog } from "@/lib/serverApi";
import CamperList from "@/components/CamperList/CamperList";

const Catalog = async () => {
  const response = await fetchCatalog(
    "Kyiv",
    1,
    4,
    "alcove",
    "automatic",
    "diesel",
  );

  return (
    <section>
      <h1>Catalog List</h1>
      {response?.campers?.length > 0 && (
        <CamperList campers={response.campers} />
      )}
    </section>
  );
};

export default Catalog;
