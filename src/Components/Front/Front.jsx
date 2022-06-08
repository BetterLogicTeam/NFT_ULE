import React from "react";
import "./Front.css";

// import "./styles.css";
import { EffectFlip, Pagination, Navigation } from "swiper";
export default function Front() {
  return (
    <div>
      <section
        id="about"
        class="relative first pb-10 pt-20 md:pt-32 lg:h-[88vh]"
      >
        <picture class="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
          <img src="gradient.jpg" alt="gradient" />
        </picture>
        <picture class="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
          <img src="gradient_dark.jpg" alt="gradient dark" />
        </picture>
        <div class="container head_div h-full">
          <div class="grid h-full items-center gap-4 md:grid-cols-12">
            <div class="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-4">
              <h1 class="text-jacarta-700 font-display mb-6  text-5xl dark:text-white md:text-left lg:text-6xl xl:text-7xl">
                Buy, sell and collect NFTs.
              </h1>
              <p class="txt_white mb-8 text-lg md:text-left">
                The world's largest digital marketplace for crypto collectibles
                and non-fungible tokens
              </p>
            </div>

            <div class="col-span-6 xl:col-span-8 hero_div">
              <div class="relative text-center md:pl-8 md:text-right">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mt-8 hero inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem]"
                >
                  <defs className="hero">
                    <clipPath id="clipping" clipPathUnits="userSpaceOnUse">
                      <path
                        d="
                                                M 0, 100
                                                C 0, 17.000000000000004 17.000000000000004, 0 100, 0
                                                S 200, 17.000000000000004 200, 100
                                                183, 200 100, 200
                                                0, 183 0, 100
                                                "
                        fill="#9446ED"
                      ></path>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#clipping)">
                    <image
                      href="hero.jpg"
                      className=""
                      width="200"
                      height="200"
                      clip-path="url(#clipping)"
                    ></image>
                  </g>
                </svg>
                <img
                  src="3D_elements.png"
                  alt=""
                  class="animate-fly hero2 absolute top-0 md:-right-[10%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="first">
        <div className="container">
          <div className="row front_ro">
            <div className="col-md-6 ">
              <h1 className="head">Buy, sell and collect NFTs.</h1>
              <p className="head2">
                The world's largest digital marketplace for crypto collectibles
                and non-fungible tokens
              </p>
            </div>
            <div className="col-md-1 col-12"></div>
            <div className="col-md-5 col-12 ">
              <img src="hero.jpg" alt="" />
              <img className="emg_2" src="3D_elements.png" alt="" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
