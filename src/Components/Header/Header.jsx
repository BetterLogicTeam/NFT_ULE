import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { loadWeb3, } from '../../apis/api';
export default function Header({setchainid}) {
    let [btnTxt, setBtTxt] = useState("Connect")
    const selectoption = useRef();

    const getAccount = async () => {
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
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



     const chain_id_here=()=>{
        let selecthere = selectoption.current.value;
        
        setchainid(selecthere)
    }

    useEffect(() => {
        setInterval(() => {
            getAccount();
        // chain_id_here()

        }, 1000);
    }, []);
    return (
        <div>

            {/* <header className="js-page-header head_div fixed top-0 z-20 w-full backdrop-blur transition-colors js-page-header--is-sticky">
            <div className="flex items-center px-6 py-6 xl:px-24">
                
                <a href="index.html" className="shrink-0">
                <img src="logo.png" className="max-h-7 ule dark:hidden" alt="Xhibiter | NFT Marketplace"/>
                
                </a>
                <div className="js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent">
                    
                    <div className="t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden">
                        
                        <a href="index.html" className="shrink-0">
                        <img src="logo.png" className="max-h-7 dark:hidden" alt=""/>
                        </a>
                        
                        <button className="js-mobile-close border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]" aria-label="close mobile menu">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
                            </svg>
                        </button>
                    </div>
                  
                    <nav className="navbar w-full">
                        <ul className="flex flex-col lg:flex-row mt_5">
                            <li className="js-nav-dropdown group relative">
                                <a href="index.html" className=" text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5" aria-expanded="false">Home
                                </a>
                            </li>
                            <li className="js-nav-dropdown group relative">
                                <a href="#about" className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5" aria-expanded="false">About
                                </a>
                            </li>
                            <li className="js-nav-dropdown group relative">
                                <a href="collection.html" className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5" aria-expanded="false">Collection
                                </a>
                            </li>
                            <li className="js-nav-dropdown group relative">
                                <a href="benifits.html" className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">Benifits
                                </a>
                            </li>
                            <li className="js-nav-dropdown group relative">
                                <a href="roadmap.html" className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5" aria-expanded="false">Roadmap
                                </a>
                            </li>
                            <li className="js-nav-dropdown group relative d_none_md">
                                <a href="mint.html" className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">Mint
                                </a>
                            </li>
                            <li className="js-nav-dropdown group relative d_none_md">
                                <a href="javascript:void(0)" className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">No Wallet
                                </a>
                            </li>
                             <li className="js-nav-dropdown group relative">
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5"
                                    id="navDropdown-2"
                                    aria-expanded="false"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    >Pages
                                </a>
                                <ul
                                    className="dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
                                    aria-labelledby="navDropdown-2"
                                    >
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                        <span className="font-display text-jacarta-700 text-sm dark:text-white">About</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                        <span className="font-display text-jacarta-700 text-sm dark:text-white">Contact</span>
                                        </a>
                                    </li>
                                </ul>
                            </li> 
                        </ul>
                    </nav>
                    
                    
                    <div className="ml-8 hidden lg:flex xl:ml-12">
                        
                        <a href="mint.html" className="mint text-white mint_mr"> Mint</a> 
                        <a href="javascript:void(0)" className="mint text-white"> No Wallet</a>                        
                    </div>
                </div>
                
                 <div className="ml-auto flex lg:hidden">
                    <button className="js-mobile-toggle border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15] " aria-label="open mobile menu">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z"></path>
                        </svg>
                    </button>
                    </div>
            </div>
        </header> */}



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
                            <img src="logo.png" alt="" width="80%" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                            <Nav className="ms-auto nav_in_responsive ">
                                <Nav.Link className="hzn" >
                                    <Link to="/" className="link_text" >Home</Link>
                                </Nav.Link>

                                {/* <Nav.Link className="hzn">
                    <Link to="/About_main" className="link_text" >About</Link>
                  </Nav.Link> */}

                                <Nav.Link className="hzn" href="#collection">
                                    <Link to="/Collection_main" className="link_text" >Collection</Link>
                                </Nav.Link>
                                <Nav.Link className="hzn" href="#benefits">
                                    <Link to="/Benefits_main" className="link_text" >Benefits</Link>
                                </Nav.Link>
                                <Nav.Link className="hzn" href="#roadmap">
                                    <Link to="/Road_main" className="link_text" >Roadmap</Link>
                                </Nav.Link>

                                <Link to="/Mint_main" className="link_text " ><button className="btn btna_navbar_here">Mint</button></Link>
                                {/* <Link to="/Mint_main" className="link_text" ><button className="btn btna_navbar_here">{btnTxt}</button></Link> */}
                                {/* <select name="" id="">
                                    <option value="137">PoliGon</option>
                                    <option value="56">BSC</option>
                                </select> */}
                                <select class="form-select select_main ms-4" aria-label="Default select example" ref={selectoption}>
                                    <option selected  disabled hidden>Select Blockchain</option>
                                    <option value="56">BSC</option>
                                    <option value="137">Polygon</option>
                                  
                                </select>


                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}
