import React from "react";
import BSC_Minting from "./BSC_Minting";
import Bsc_mint_home from "./Bsc_mint_home";
import Create_sell_nft from "./Create_sell_nft/Create_sell_nft";
import Crypto from "./Crypto/Crypto";
import Explore from "./Explore/Explore";
import Footer from "./Footer/Footer";
import Front from "./Front/Front";
import Front2 from "./Front2/Front2";
import Front3 from "./Front3/Front3";
import Front4 from "./Front4/Front4";
import Header from "./Header/Header";
import Mint from "./Mint/Mint";
import Mint_polygon from "./Mint_Polygon/Mint_polygon";
import Mint_2 from "./Mint_2/Mint_2";
// import Explore from "./Explore/Explore";
import Road from "./Road/Road";
import Slide from "./Slide/Slide";

export default function Index_main({chainid}) {
  let chain_id_here=chainid
  return (
    <div className="App">
      <Front />
      <Front2 />
      {/* <Front3 /> */}
      <Front4 />
     {/* <Bsc_mint_home/> */}
     
      {/* <Crypto /> */}
      {/* <Explore /> */}
      {/* <Road /> */}
      {/* <Mint_2 /> */}
      <Create_sell_nft />
      {/* <Slide /> */}
    </div>
  );
}
