"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useIsBrowser } from "@/hooks/useIsBrowser";

export default function Slider1() {
  const isBrowser = useIsBrowser();

  if (!isBrowser) {
    return (
      <div className="slider-placeholder py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">{/* Espaço reservado para o slider */}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="slider-area pt-20">
      <div className="container">
        {/* Conteúdo do slider */}
        <Swiper>
          <SwiperSlide>{/* Conteúdo do slide */}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
