"use client";

import { useSearchParams } from "next/navigation";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCatalog } from "@/lib/serverApi";
import CamperList from "@/components/CamperList/CamperList";
import EmptyPage from "@/components/EmptyPage/EmptyPage";
import css from "./@sidebar/Sidebar.module.css";
import Spinner from "@/components/Spinner/Spinner";

const Catalog = () => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location") ?? undefined;
  const form = searchParams.get("form") ?? undefined;
  const transmission = searchParams.get("transmission") ?? undefined;
  const engine = searchParams.get("engine") ?? undefined;

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["campers", location, form, transmission, engine],
      queryFn: ({ pageParam }) =>
        fetchCatalog(location, pageParam, 4, form, transmission, engine),
      initialPageParam: 1,
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
    });

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  if (isLoading) {
    return (
      <div className={css.load}>
        <Spinner size={80} ariaLabel="catalog-loading" />
      </div>
    );
  }

  return (
    <section className={css.mainSection}>
      {campers.length > 0 ? (
        <CamperList
          campers={campers}
          onLoadMore={() => fetchNextPage()}
          isLoadingMore={isFetchingNextPage}
          hasMore={!!hasNextPage}
        />
      ) : (
        <EmptyPage />
      )}
    </section>
  );
};

export default Catalog;
