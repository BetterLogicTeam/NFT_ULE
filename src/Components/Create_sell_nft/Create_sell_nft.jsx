import React from "react";
import './Create_sell_nft.css'

export default function Create_sell_nft() {
  return (
    <div>
      <section class="dark:bg-jacarta-800 Create_sell_nft_div relative py-24">
        <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          {/* <img
            src="bg3.png"
            alt="gradient"
            class="h-full"
          /> */}
        </picture>
        <div class="container">
          <h2 class="font-display text-jacarta-700 mb-16 text-center text-3xl dark:text-white">
            Create and sell your NFTs
          </h2>
          <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div class="text-center">
              <div class="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-3">
                <div class="bg-accent inline-flex h-12 w-12 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="h-5 w-5 fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"></path>
                  </svg>
                </div>
              </div>
              <h3 class="font-display text-jacarta-700 mb-4 text-lg dark:text-white">
                1. Set up your wallet
              </h3>
              <p class="txt_black">
                Once you've set up your wallet of choice, connect it to
                OpenSeaby clicking the NFT Marketplacein the top right corner.
              </p>
            </div>
            <div class="text-center">
              <div class="mb-6 inline-flex rounded-full bg-[#C4F2E3] p-3">
                <div class="bg-green inline-flex h-12 w-12 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="h-5 w-5 fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
                  </svg>
                </div>
              </div>
              <h3 class="font-display text-jacarta-700 mb-4 text-lg dark:text-white">
                2. Create Your Collection
              </h3>
              <p class="txt_black">
                Click Create and set up your collection. Add social links, a
                description, profile &amp; banner images, and set a secondary
                sales fee.
              </p>
            </div>
            <div class="text-center">
              <div class="mb-6 inline-flex rounded-full bg-[#CDDFFB] p-3">
                <div class="bg-blue inline-flex h-12 w-12 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="h-5 w-5 fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M17.409 19c-.776-2.399-2.277-3.885-4.266-5.602A10.954 10.954 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v7c5.22 0 9.662 2.462 11.313 7h2.096zM18 1v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                  </svg>
                </div>
              </div>
              <h3 class="font-display text-jacarta-700 mb-4 text-lg dark:text-white">
                3. Add Your NFTs
              </h3>
              <p class="txt_black">
                Upload your work (image, video, audio, or 3D art), add a title
                and description, and customize your NFTs with properties, stats.
              </p>
            </div>
            <div class="text-center">
              <div class="mb-6 inline-flex rounded-full bg-[#FFD0D0] p-3">
                <div class="bg-red inline-flex h-12 w-12 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="h-5 w-5 fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829z"></path>
                  </svg>
                </div>
              </div>
              <h3 class="font-display text-jacarta-700 mb-4 text-lg dark:text-white">
                4. List Them For Sale
              </h3>
              <p class="txt_black">
                Choose between auctions, fixed-price listings, and
                declining-price listings. You choose how you want to sell your
                NFTs!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
