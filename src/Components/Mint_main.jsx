import React, { useState } from 'react'
import Footer from "./Footer/Footer";
import Front2 from "./Front2/Front2";
import Front3 from "./Front3/Front3";
import Front4 from "./Front4/Front4";
import Mint from "./Mint/Mint";
import Mint_polygon from './Mint_Polygon/Mint_polygon';

export default function Mint_main({ chainid }) {

  // const [chainid_id, setchainid_id] = useState(chainid)

  let chainid_id = chainid

  console.log("chainid_id", chainid_id);



  return (
    <div>
      <div class="breadcrumb-area" >
        <div className='second_img'>
          <div class="container h-100">
            <div class="row h-100 align-items-center justify-content-center">
              <div class="col-lg-5">
                <div class="breadcrumb-title text-center">
                  <h2>Mint</h2>
                  <ul class="breadcrumb-list">
                    <li>Home</li>
                    <li><i class="fas fa-angle-double-right"></i></li>
                    <li>Mint</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Mint />


    </div>
  )
}