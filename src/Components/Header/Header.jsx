import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { loadWeb2 } from "../../apis/Api2";
import { loadWeb3 } from "../../apis/api";
import Web3 from "web3";


export default function Header() {
    let [btnTxt, setBtTxt] = useState("Connect")
    const selectoption = useRef();


    let NetId
    const getAccount = async () => {
        const web3 = window.web3;
        window.web3 = new Web3(window.ethereum);

        await window.ethereum.enable();

        await window.web3.eth.getChainId((err, netId) => {

            // console.log("netid", netId);
            NetId = netId

        }
        )
        let acc

        if (NetId == 56) {
            acc = await loadWeb3()
        } else {
            acc = await loadWeb2()
        }


        setBtTxt(acc)
        // console.log("ACC=", acc)
        if (acc == "No Wallet") {
            setBtTxt("No Wallet")
        }
        else if (acc == "Wrong Network") {
            setBtTxt("Wrong Network")
        } else {
            let myAcc = acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
            setBtTxt(myAcc);

        }
    }




    useEffect(() => {
        setInterval(() => {

            getAccount()

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
                        <Navbar.Brand className="pic">
                            <img src="logoule.png" alt="" width="80%" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                            <Nav className="ms-auto nav_in_responsive ">
                                <Nav.Link className="hzn" >
                                    <Link to="/" className="link_text" >Home</Link>
                                </Nav.Link>



                                <Nav.Link className="hzn" href="#collection">
                                    <Link to="/Collection_main" className="link_text" >Collection</Link>
                                </Nav.Link>
                                <Nav.Link className="hzn" href="#benefits">
                                    <Link to="/Benefits_main" className="link_text" >Benefits</Link>
                                </Nav.Link>
                                <Nav.Link className="hzn" href="#roadmap">
                                    <Link to="/Road_main" className="link_text" >Roadmap</Link>
                                </Nav.Link>

                               

                                <div class="dropdown ms-4">
                                    <button class="btn btn-secondary dropdown-toggle select_main" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Mint
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" > <Link to="Minting_With_BSC" className="text-d" > <img src="bsc3.png"  alt="" /> BCS</Link></a></li>
                                        <li><a class="dropdown-item" ><Link to="/Main_polygon" className="text-d"> <img src="polygon.png"  alt="" />  Polygon</Link></a></li>

                                    </ul>
                                </div>


                                <button className="btn btna_navbar_here ms-4">{btnTxt}</button>





                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}
