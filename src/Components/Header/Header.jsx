import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { loadWeb2 } from "../../apis/Api2";
import { loadWeb3 } from "../../apis/api";
import Web3 from "web3";

export default function Header() {
  let [btnTxt, setBtTxt] = useState("Connect");
  const selectoption = useRef();

  let NetId;
  const getAccount = async () => {
    const web3 = window.web3;
    window.web3 = new Web3(window.ethereum);

    await window.ethereum.enable();

    await window.web3.eth.getChainId((err, netId) => {
      // console.log("netid", netId);
      NetId = netId;
    });
    let acc;

    if (NetId == 56) {
      acc = await loadWeb3();
    } else {
      acc = await loadWeb2();
    }

    setBtTxt(acc);
    // console.log("ACC=", acc)
    if (acc == "No Wallet") {
      setBtTxt("No Wallet");
    } else if (acc == "Wrong Network") {
      setBtTxt("Wrong Network");
    } else {
      let myAcc =
        acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
      setBtTxt(myAcc);
    }
  };

  useEffect(() => {
    setInterval(() => {
      getAccount();
    }, 1000);
  }, []);
  return (
    <div>
     


      <div className="maina">
        <Navbar
          className="Headera"
          collapseOnSelect
          expand="xl"
          bg="black"
          variant="dark"
        >
          <Container>

            <Link to="/" >
              <Navbar.Brand className="pic">
                <img src="logoule.png" alt="" width="80%" />
              </Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto nav_in_responsive ">
               

                <div class="dropdown ms-2 mt-2">
                  <button
                    class="btn btn-secondary dropdown-toggle select_main"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mint
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >

                    <li>
                      <a class="dropdown-item">
                        {" "}
                        <Link to="Mint_With_100" className="text-d">
                          {" "}
                        
                          Mint With 100 USD
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        {" "}
                        <Link to="Mint_With_200" className="text-d">
                          {" "}
                        
                          Mint With 200 USD
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        {" "}
                        <Link to="Mint_With_300" className="text-d">
                          {" "}
                        
                          Mint With 300 USD
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        {" "}
                        <Link to="Mint_With_400" className="text-d">
                          {" "}
                        
                          Mint With 400 USD
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        {" "}
                        <Link to="Mint_With_500" className="text-d">
                          {" "}
                        
                          Mint With 500 USD
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        {" "}
                        <Link to="Mint_With_1000" className="text-d">
                          {" "}
                        
                          Mint With 1000 USD
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        {" "}
                        <Link to="Mint_With_2000" className="text-d">
                          {" "}
                        
                          Mint With 2000 USD
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        {" "}
                        <Link to="Mint_With_3000" className="text-d">
                          {" "}
                        
                          Mint With 3000 USD
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        {" "}
                        <Link to="Mint_With_4000" className="text-d">
                          {" "}
                        
                          Mint With 4000 USD
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        {" "}
                        <Link to="Mint_With_5000" className="text-d">
                          {" "}
                        
                          Mint With 5000 USD
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        {" "}
                        <Link to="Mint_With_10000" className="text-d">
                          {" "}
                        
                          Mint With 10000 USD
                        </Link>
                      </a>
                    </li>
                    {/* <li>
                      <a class="dropdown-item">
                        <Link to="/Main_polygon" className="text-d">
                          {" "}
                          <img src="polygon.png" alt="" /> Polygon
                        </Link>
                      </a>
                    </li> */}
                  </ul>
                </div>

                <Nav.Link className="hzn" href="#collection">
                  <Link
                    to="/Collection_main"
                    className="link_text btn btna_navbar_here"
                  >
                    Collection
                  </Link>
                </Nav.Link>

                <div className="asl">
                  <button className="btn btna_navbar_herea">{btnTxt}</button>

                </div>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
