import React from "react";
import "./Footer.css";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="dark:bg-jacarta-900 page-footer ft_bg">
        <div class="container">
          <div class="row_width pt_3">
            <div class="width_4">
              <a href="index.html" class="mb-6 aaa inline-block">
                <img
                  src="logoule.png"
                  class="max-h-7 dark:hidden"
                  alt="Xhibiter | NFT Marketplace"
                />
                <img
                  src="logo_white.png"
                  class="hidden max-h-7 dark:block"
                  alt="Xhibiter | NFT Marketplace"
                />
              </a>
              <p class="txt_white">
                Create, sell and collect truly rare digital artworks. Powered by
                blockchain technology.
              </p>
            </div>
            <div class="width_4">
              <h3 class="font-display text-jacarta-700 mb-6 text-sm dark:text-white">
                Useful Link
              </h3>
              <div class="row_width">
                <div class="width_50 ftr">
                  <ul class="ft_color flex flex-col space-y-1">
                    <li>
                      
                    <Link to="/" className="link_text" >
                      <a
                       
                        class="hover:text-accent dark:hover:text-white"
                      >
                        Home
                      </a>
                      </Link>
                    </li>
                    {/* <li>
                      <a
                        href="javascript:void(0)"
                        class="hover:text-accent dark:hover:text-white"
                      >
                        About
                      </a>
                    </li> */}
                    <li>
                    <Link to="/Collection_main" className="link_text" >
                      <a
                      
                        class="hover:text-accent dark:hover:text-white"
                      >
                        Collection
                      </a>
                      </Link>
                    </li>
                    <li>
                    <Link to="/Benefits_main" className="link_text" >
                      <a
                     
                        class="hover:text-accent dark:hover:text-white"
                      >
                        Benifits
                      </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="width_50 ftr2">
                  <ul class="ft_color flex flex-col space-y-1">
                  
                    <li>
                    <Link to="/Road_main" className="link_text" >
                      <a
                      
                        class="hover:text-accent dark:hover:text-white"
                      >
                        Roadmap
                      </a>
                      </Link>
                    </li>
                    <li>
                    <Link to="/Mint_main" className="link_text" >
                      <a
                
                        class="hover:text-accent dark:hover:text-white"
                      >
                        Mint
                      </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="width_4 icn">
              <h3 class="font-display text-jacarta-700 mb-6 text-sm dark:text-white">
                Social Link
              </h3>
              <div class="flex space-x-5">
                <a
                  href="https://t.me/joinchat/U8ot8F38yb4zZjY1"
                  target="_blank"
                  class="group social_icon"
                >
                  <i class="fa fa-paper-plane"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="flex flex-col end items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0">
            <span class="dark:text-jacarta-400 text-sm" style={{color:"white"}}>
              © 2022 nft.ule.community
            </span>
            <ul class="dark:text-jacarta-400 flex flex-wrap space-x-4 text-sm">
              <li>
                <a
                  href="javascript:void(0)"
                  class="hover:text-accent terms text-white"
                >
                  Terms and conditions
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="hover:text-accent policy text-white"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
