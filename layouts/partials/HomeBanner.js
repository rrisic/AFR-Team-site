"use client";

import Circle from "@layouts/components/Circle";
import ImageFallback from "@layouts/components/ImageFallback";
import SocialButtons from "@layouts/components/SocialButtons";
import { gsap } from "@lib/gsap";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import brands from "../../data/brands";

const HomeBanner = ({ banner: bannerData }) => {
  const sponsorsRef = useRef(null);

  useEffect(() => {
    const ctx2 = gsap.context(() => {
      const banner = document.querySelector(".banner");
      const bannerContent = document.querySelector(".banner-content");
      const header = document.querySelector(".header");
      const tl = gsap.timeline();

      tl.fromTo(
        ".banner-title",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }
      )
        .fromTo(
          ".banner-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          ">-0.4"
        );

      // Scroll-based reveal for sponsors section
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out"
            });
          }
        });
      }, {
        threshold: 0.1
      });

      if (sponsorsRef.current) {
        observer.observe(sponsorsRef.current);
      }

      return () => {
        observer.disconnect();
      };
    });

    return () => ctx2.revert();
  }, []);

  return (
    <section className="section banner pt-0">
      <div className="container-xl">
        <div className="relative">
          {/* Hero Section with Background Image */}
          <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
            <div className="absolute inset-0 z-0">
              <ImageFallback
                className="h-full w-full object-cover"
                src={bannerData.image}
                fill={true}
                priority={true}
                alt="AFR Formula Car"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            {/* Content Overlay */}
            <div className="relative z-10 flex h-full items-center justify-center">
              <div className="banner-content text-center">
                {markdownify(
                  bannerData.title,
                  "h1",
                  "mb-8 banner-title opacity-0 text-white text-5xl md:text-6xl lg:text-7xl font-bold"
                )}
                <div className="banner-btn opacity-0">
                  <SocialButtons />
                </div>
              </div>
            </div>
          </div>

          {/* Sponsors Section */}
          <div ref={sponsorsRef} className="mt-[100px] opacity-0 translate-y-20 transition-all duration-700 ease-out" id="sponsors-section">
            <div className="col-12 mb-1">
              <div className="text-center relative flex items-center justify-center">
                <button
                  className="swiper-button-prev !static !translate-y-0 !mr-4 !w-12 !h-12 !rounded-full !bg-racing-navy !flex !items-center !justify-center !transition-all !duration-300 hover:!bg-racing-gold group !after:!hidden"
                  aria-label="Previous slide"
                >
                  <svg
                    className="!w-6 !h-6 !text-white !transition-colors !duration-300 group-hover:!text-racing-navy"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <div>
                  <Link href="/sponsors" className="group">
                    <h2 className="text-2xl font-semibold text-white mb-1 transition-colors duration-300 group-hover:text-racing-gold">AFR Sponsors</h2>
                    <div className="w-24 h-1 bg-racing-gold mx-auto rounded-full transition-colors duration-300 group-hover:bg-white"></div>
                  </Link>
                </div>
                <button
                  className="swiper-button-next !static !translate-y-0 !ml-4 !w-12 !h-12 !rounded-full !bg-racing-navy !flex !items-center !justify-center !transition-all !duration-300 hover:!bg-racing-gold group !after:!hidden"
                  aria-label="Next slide"
                >
                  <svg
                    className="!w-6 !h-6 !text-white !transition-colors !duration-300 group-hover:!text-racing-navy"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="animate from-right col-12">
              <Swiper
                loop={true}
                slidesPerView={3}
                breakpoints={{
                  640: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                }}
                spaceBetween={30}
                modules={[Autoplay, Navigation]}
                autoplay={{ 
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                  disabledClass: '!hidden'
                }}
                slidesPerGroup={1}
                className="mt-[-20px] swiper-container relative"
              >
                {brands.map((brand) => (
                  <SwiperSlide
                    className="h-48 cursor-pointer px-6 py-6 grayscale transition hover:grayscale-0 lg:px-10"
                    key={"brand-" + brand.id}
                  >
                    <Link href={brand.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                      <div className="relative h-full">
                        <ImageFallback
                          className="object-contain"
                          src={brand.image}
                          sizes="100vw"
                          alt={brand.name}
                          fill={true}
                          priority={true}
                        />
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
