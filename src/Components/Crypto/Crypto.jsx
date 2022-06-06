import React,{useState,useEffect} from "react";
import "./Crypto.css";
import axios from "axios";

export default function Crypto() {

  const [Users, setUsers] = useState([])
  const [dataapi, setdataapi] = useState([])


  const fetchData = async() => {
    try{
      let getdata= await axios.get("https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT")
      console.log("data_chack_here",getdata.data.price);
      
      
      setUsers(getdata.data.price)
    }catch(e){
      console.log("Error While Fetch Api ",e);

    }

  }
  const WheTokenPrice = async() => {

    try{
      let getdata= await axios.get("https://whenftapi.herokuapp.com/wheliverate?id=1")
      console.log("secondapi",getdata.data.data);

      setdataapi(getdata.data.data)
    }catch(e){
      console.log("Error While Fetch Api ",e);
    }
   
    
   
  }

  useEffect(() => {
    fetchData()
    WheTokenPrice()

  }, [])
  
  return (
    <div>
      <section class=" pb-24 pt_240">
                <div class="container">
                    <h2 class="p_text font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white">
                        Top Cryptocurrencies
                    </h2>
                    
                    <div class="row_width">
                        <div class="col_3"></div>
                        <div class="col_3">
                            <div class="crypto">
                                <div class="crypto_img">
                                    <img src="asset/img/bnb.png"/>
                                </div>
                                <div class="crypto_content">
                                    <p>Binance Coin</p>
                                    <h1> USD 00.00</h1>
                                </div>
                            </div>
                        </div>
                        <div class="col_3">
                            <div class="crypto">
                                <div class="crypto_img">
                                    <img src="asset/img/ule-100.png"/>
                                </div>
                                <div class="crypto_content">
                                    <p>ULE</p>
                                    <h1> ULE 00.00</h1>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
    </div>
  );
}
