import React, { useState } from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Front from "./Components/Front/Front";
import Front2 from "./Components/Front2/Front2";
// import Front3 from "./Components/Front3/Front3";
import Front4 from "./Components/Front4/Front4";
import Mint from "./Components/Mint/Mint";
import Crypto from "./Components/Crypto/Crypto";
import Road from "./Components/Road/Road";
import Slide from "./Components/Slide/Slide";
import Footer from "./Components/Footer/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Index_main from "./Components/Index_main";
import About_main from "./Components/About_main";
import Collection_main from "./Components/Collection_main";
import Benefits_main from "./Components/Benefits_main";
import Road_main from "./Components/Road_main";
import Mint_main from "./Components/Mint_main";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Terms from "./Components/Terms/Terms";
import Privacy_Policy from "./Components/Privacy_Policy/Privacy_Policy";
import ModelOpen from "./Components/Mint/ModelOpen";
import BSC_Minting from "./Components/BSC_Minting";
import Main_polygon from "./Components/Main_polygon";
import Mint_polygon from "./Components/Mint_Polygon/Mint_polygon";


function App() {
const [modalShow, setModalShow] = useState(false);
const [chainid, setchainid] = useState(false);


function value(myvalue){
  console.log('my value is',myvalue)

}



  return (
    <div className="App">
      <BrowserRouter>
        <Header  setchainid={setchainid} />
        <ModelOpen setModalShow={setModalShow} modalShow={modalShow} value={value} />
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Index_main chainid={chainid} />} />
          {/* <Route exact path="/About_main" element={<About_main />} />   */}
          <Route exact path="/Collection_main" element={<Collection_main />} />
          <Route exact path="/Benefits_main" element={<Benefits_main />} />
          <Route exact path="/Road_main" element={<Road_main />} />
          <Route exact path="/Mint_main" element={<BSC_Minting  />} />
          <Route exact path="/Terms_main" element={<Terms />} />
          <Route exact path="/Privacy_Policy" element={<Privacy_Policy />} />
          <Route exact path="/Minting_With_BSC" element={<Mint_main />} />
          <Route exact path="/Main_polygon" element={<Main_polygon />} />
          <Route exact path="/Mint" element={<Mint />} />

          <Route exact path="/Mint_polygon" element={<Mint_polygon />} />



        </Routes>
       
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
