"use client";

import { useEffect, useState } from "react";
import Slider1 from "@/components/sections/Slider1";
import Product1 from "@/components/sections/Product1";
import Category from "@/components/sections/Category";
import DealProduct1 from "@/components/sections/DealProduct1";
import Shop from "@/components/sections/Shop";

export default function HomeContent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Este componente será renderizado apenas como placeholder no servidor
  if (!isClient) {
    return (
      <div className="home-content-placeholder">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Carregando conteúdo...</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Renderiza o conteúdo real apenas no cliente
  return (
    <>
      <Slider1 />
      <Product1 />
      <Category />
      <DealProduct1 />
      <Shop />
    </>
  );
}
