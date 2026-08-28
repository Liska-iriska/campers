"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import type { GalleryImage } from "@/types/camper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import css from "./Swiper.module.css";

type Props = {
  gallery: GalleryImage[];
  alt: string;
};

export default function CamperGallery({ gallery, alt }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const sortedGallery = [...gallery].sort((a, b) => a.order - b.order);

  return (
    <div className={css.gallery}>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#374F42",
          } as React.CSSProperties
        }
        loop={sortedGallery.length > 1}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.mainSwiper}
      >
        {sortedGallery.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.original}
              alt={alt}
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={sortedGallery.length > 1}
        spaceBetween={32}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.thumbsSwiper}
      >
        {sortedGallery.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.thumb}
              alt={`${alt} thumbnail`}
              width={135}
              height={145}
              style={{ objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
