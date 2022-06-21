import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,

} from "react-router-dom";
import BSC_Minting from './BSC_Minting'
import Index_main from './Index_main';

export default function Bsc_mint_home() {
    return (
        <div>
            <div className="mint">



                <div className="container">

                    <h1>Please Select  BlockChain Network</h1>
                    <div className="main_div_btn_here">

                        <div className="btn-area1 mt-5 ">
                            <Link to="/Minting_With_BSC"> <a class="btn btn_main_mint fs-2" >
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
