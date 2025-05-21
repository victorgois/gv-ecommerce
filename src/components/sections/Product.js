"use client";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "@/features/shopSlice";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".tp-product-arrow__next",
    prevEl: ".tp-product-arrow__prev",
  },
};

export default function Product({
  title = "Produtos Populares",
  showTabs = true,
  showSlider = false,
  products = [],
  className = "",
}) {
  const [activeIndex, setActiveIndex] = useState(1);
  const dispatch = useDispatch();

  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  const addToCart = (id) => {
    dispatch(addCart(id));
  };

  const renderProductGrid = (items) => (
    <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 tpproduct">
      {items.map((item, i) => (
        <div key={i} className="tpproductitem">
          <div className="tpproductitem__thumb p-relative">
            <Link href={`/shop/${item.id}`}>
              <img
                src={`/assets/img/product/${item.imgf}`}
                alt="product-thumb"
              />
              <img
                className="thumbitem-secondary"
                src={`/assets/img/product/${item.imgb}`}
                alt="product-thumb"
              />
            </Link>
            <div className="tpproductitem__thumb-action">
              <Link href="#" onClick={() => addToCart(item.id)}>
                <i className="fal fa-shopping-basket" />
              </Link>
              <Link className="quckview" href="#">
                <i className="fal fa-eye" />
              </Link>
              <Link className="wishlist" href="/wishlist">
                <i className="fal fa-heart" />
              </Link>
            </div>
          </div>
          <div className="tpproductitem__content">
            <h4 className="tpproductitem__title">
              <Link href={`/shop/${item.id}`}>{item.title}</Link>
            </h4>
            <div className="tpproductitem__price">
              <span className="price">R$ {item.price.max}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderProductSlider = (items) => (
    <div className="swiper-container product-slider-active">
      <Swiper {...swiperOptions}>
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="tpproductitem">
              <div className="tpproductitem__thumb p-relative">
                <Link href={`/shop/${item.id}`}>
                  <img
                    src={`/assets/img/product/${item.imgf}`}
                    alt="product-thumb"
                  />
                  <img
                    className="thumbitem-secondary"
                    src={`/assets/img/product/${item.imgb}`}
                    alt="product-thumb"
                  />
                </Link>
                <div className="tpproductitem__thumb-action">
                  <Link href="#" onClick={() => addToCart(item.id)}>
                    <i className="fal fa-shopping-basket" />
                  </Link>
                  <Link className="quckview" href="#">
                    <i className="fal fa-eye" />
                  </Link>
                  <Link className="wishlist" href="/wishlist">
                    <i className="fal fa-heart" />
                  </Link>
                </div>
              </div>
              <div className="tpproductitem__content">
                <h4 className="tpproductitem__title">
                  <Link href={`/shop/${item.id}`}>{item.title}</Link>
                </h4>
                <div className="tpproductitem__price">
                  <span className="price">R$ {item.price.max}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  return (
    <section className={`product-area pb-65 ${className}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="tpsection mb-40">
              <h4 className="tpsection__title">{title}</h4>
            </div>
          </div>
          {showTabs && (
            <div className="col-lg-4 col-md-6">
              <div className="tpproductnav tpnavbar">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className={
                        activeIndex == 1 ? "nav-link active" : "nav-link"
                      }
                      onClick={() => handleOnClick(1)}
                    >
                      Todos
                    </button>
                    <button
                      className={
                        activeIndex == 2 ? "nav-link active" : "nav-link"
                      }
                      onClick={() => handleOnClick(2)}
                    >
                      Populares
                    </button>
                    <button
                      className={
                        activeIndex == 3 ? "nav-link active" : "nav-link"
                      }
                      onClick={() => handleOnClick(3)}
                    >
                      Promoções
                    </button>
                    <button
                      className={
                        activeIndex == 4 ? "nav-link active" : "nav-link"
                      }
                      onClick={() => handleOnClick(4)}
                    >
                      Mais Vendidos
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
        <div className="tab-content" id="nav-tabContent">
          {showSlider
            ? renderProductSlider(products)
            : renderProductGrid(products)}
        </div>
      </div>
    </section>
  );
}
