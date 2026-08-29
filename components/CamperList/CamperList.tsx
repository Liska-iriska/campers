"use client";

import { Camper } from "@/types/camper";
import CamperItem from "../CamperItem/CamperItem";
import css from "./CamperList.module.css";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { useEffect, useRef } from "react";

type Props = {
  campers: Camper[];
  onLoadMore: () => void;
  isLoadingMore: boolean;
  hasMore: boolean;
};

const CamperList = ({ campers, onLoadMore, isLoadingMore, hasMore }: Props) => {
  const listRef = useRef<HTMLUListElement>(null);
  const prevLength = useRef(campers.length);

  useEffect(() => {
    if (campers.length > prevLength.current) {
      const newFirstCard = listRef.current?.children[
        prevLength.current
      ] as HTMLElement;
      newFirstCard?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    prevLength.current = campers.length;
  }, [campers.length]);

  return (
    <>
      <ul className={css.list} ref={listRef}>
        {campers.map((camper) => (
          <CamperItem key={camper.id} item={camper} />
        ))}
      </ul>
      {hasMore && (
        <LoadMoreBtn onClick={onLoadMore} isLoading={isLoadingMore} />
      )}
    </>
  );
};
export default CamperList;
