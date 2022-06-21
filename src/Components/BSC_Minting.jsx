import React, { useState } from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header/Header";

import Footer from "../Components/Footer/Footer";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    BrowserRouter,
    Link,
} from "react-router-dom";
import Index_main from "../Components/Index_main";

import Collection_main from "../Components/Collection_main";
import Benefits_main from "../Components/Benefits_main";
import Road_main from "../Components/Road_main";
import Mint_main from "../Components/Mint_main";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Terms from "../Components/Terms/Terms";
import Privacy_Policy from "../Components/Privacy_Policy/Privacy_Policy";
import ModelOpen from "../Components/Mint/ModelOpen";
import './Mint/Mint.css';

export default function BSC_Minting() {
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

            <div className="mint">



                <div className="container">

                    <h1>Please Select  BlockChain Network</h1>
                    <div className="main_div_btn_here">

                        <div className="btn-area1 mt-5 ">
                            <Link to="/minting_maine_here"> <a class="btn btn_main_mint fs-2" >
                                BSC
                            </a></Link>
                        </div>

                        <div className="btn-area1 mt-5">
                            <Link to="/Main_polygon"> <a class="btn btn_main_mint2 fs-2 ">
                                Polygon
                            </a></Link>


                        </div>



                    </div>



                </div>
            </div>


        </div>
    )
}
