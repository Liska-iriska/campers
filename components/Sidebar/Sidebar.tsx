"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchCampersFilters } from "@/lib/clientApi";
import css from "./Sidebar.module.css";

function formatLabel(text: string): string {
  return text
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Sidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data: filters } = useQuery({
    queryKey: ["campersFilters"],
    queryFn: fetchCampersFilters,
    staleTime: Infinity,
  });

  const [location, setLocation] = useState(searchParams.get("location") ?? "");
  const [form, setForm] = useState(searchParams.get("form") ?? "");
  const [engine, setEngine] = useState(searchParams.get("engine") ?? "");
  const [transmission, setTransmission] = useState(
    searchParams.get("transmission") ?? "",
  );

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location.trim()) params.set("location", location.trim());
    if (form) params.set("form", form);
    if (engine) params.set("engine", engine);
    if (transmission) params.set("transmission", transmission);
    router.push(`/catalog?${params.toString()}`);
  };

  const handleClear = () => {
    setLocation("");
    setForm("");
    setEngine("");
    setTransmission("");
    router.push("/catalog");
  };

  if (!filters) return null;

  return (
    <div className={css.sidebar}>
      <div className={css.container}>
        <div className={css.block}>
          <label className={css.label} htmlFor="location">
            Location
          </label>
          <div className={css.inputWrap}>
            <svg className={css.icon} width={20} height={20}>
              <use href="/sprite.svg#icon-map" />
            </svg>
            <input
              id="location"
              className={css.input}
              type="text"
              placeholder="City"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        <h3 className={css.filtersTitle}>Filters</h3>
        <div className={css.fieldsets}>
          <fieldset className={css.block}>
            <legend className={css.groupLabel}>Camper form</legend>
            {filters.forms.map((f) => (
              <label key={f} className={css.radioLabel}>
                <input
                  type="radio"
                  name="form"
                  value={f}
                  checked={form === f}
                  onChange={() => setForm(f)}
                  className={css.radio}
                />
                {formatLabel(f)}
              </label>
            ))}
          </fieldset>
          <fieldset className={css.block}>
            <legend className={css.groupLabel}>Engine</legend>
            {filters.engines.map((e) => (
              <label key={e} className={css.radioLabel}>
                <input
                  type="radio"
                  name="engine"
                  value={e}
                  checked={engine === e}
                  onChange={() => setEngine(e)}
                  className={css.radio}
                />
                {formatLabel(e)}
              </label>
            ))}
          </fieldset>
          <fieldset className={css.block}>
            <legend className={css.groupLabel}>Transmission</legend>
            {filters.transmissions.map((t) => (
              <label key={t} className={css.radioLabel}>
                <input
                  type="radio"
                  name="transmission"
                  value={t}
                  checked={transmission === t}
                  onChange={() => setTransmission(t)}
                  className={css.radio}
                />
                {formatLabel(t)}
              </label>
            ))}
          </fieldset>
        </div>
        <div className={css.btns}>
          <button className={css.searchBtn} onClick={handleSearch}>
            Search
          </button>
          <button className={css.clearBtn} onClick={handleClear}>
            <svg className={css.svg} width={24} height={24}>
              <use href="/sprite.svg#icon-close" />
            </svg>
            Clear filters
          </button>
        </div>
      </div>
    </div>
  );
}
