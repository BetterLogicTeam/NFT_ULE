import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { loadWeb2 } from "../../apis/Api2";
import { loadWeb3 } from "../../apis/api";
import Web3 from "web3";




import "./Front4.css";
import { ULE_NFT_100, ULE_NFT_1000, ULE_NFT_10000, ULE_NFT_10000_ABI, ULE_NFT_1000_ABI, ULE_NFT_100_ABI, ULE_NFT_200, ULE_NFT_2000, ULE_NFT_2000_ABI, ULE_NFT_200_ABI, ULE_NFT_300, ULE_NFT_3000, ULE_NFT_3000_ABI, ULE_NFT_300_ABI, ULE_NFT_400, ULE_NFT_4000, ULE_NFT_4000_ABI, ULE_NFT_400_ABI, ULE_NFT_500, ULE_NFT_5000, ULE_NFT_5000_ABI, ULE_NFT_500_ABI } from "../../utilies/Bsc_contract";

export default function Front4() {


  let [btnTxt, setBtTxt] = useState();
  let [imageArray, setImageArray] = useState([]);
  let [initialLimit, setInitialLimit] = useState([]);
  let [finalLimit, setFinalLimit] = useState(12)
  let [NFT200, setNFT200] = useState();
  let [NFT300, setNFT300] = useState();
  let [NFT400, setNFT400] = useState();
  let [NFT500, setNFT500] = useState();
  let [NFT1000, setNFT1000] = useState();
  let [NFT2000, setNFT2000] = useState();
  let [NFT3000, setNFT3000] = useState();
  let [NFT4000, setNFT4000] = useState();
  let [NFT5000, setNFT5000] = useState();
  let [NFT10000, setNFT10000] = useState();
  let [mywalletLength, setMyWalletLength] = useState();

  let [pageNumber, setPageNumber] = useState(1)
  let [totalPages, setTotalPages] = useState(1)
  let [NetId_set, setNetId_set] = useState()



  var NetId
  const getAccount = async () => {
    const web3 = window.web3;
    
    window.web3 = new Web3(window.ethereum);

    await window.web3.eth.getChainId((err, netId) => {

      NetId = netId
      setNetId_set(NetId)

    }
    )
    let acc;
  

    if (NetId == 56) {
      acc = await loadWeb3();
    } else {
      acc = await loadWeb2()
   
       
    }


    await window.ethereum.enable();

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

  // let array_data=[]
  // const Check_fuction=async()=>{
  //   let wallet=[0,15,78,19]
  //   for (let i = 0; i<wallet.length; i++) {
  //     let val=wallet[i]
  //     let  url_num=val+2770;
  //     console.log("url_num",url_num);
  //     try {
  //       let res = await axios.get(`https://usdulenft.mypinata.cloud/ipfs/QmZfw5joy4ZDhXZiJu5EvRuNYEP38MAYbKcMjWdB3DfwTZ/${url_num}.gif`)
  //       console.log("Rehman",res.config.url);
  //       let imageUrl = res.config.url;
  //       // console.log("check", res);
  //       let dna = url_num
  //       array_data = [...array_data, { imageUrl: imageUrl, num: dna }]
  //       setInitialLimit(array_data);
        
  //       // console.log("REhman",wallet.forEach(function (item, index) {
          
  //       // }
  //       // ));
  //     }
  //     catch(e){
  //       console.log("Apna Fuction",e);
  //     }

  //   }


  // }

  const allImagesNfts = async () => {


    window.web3 = new Web3(window.ethereum);

    await window.web3.eth.getChainId((err, netId) => {

      
      NetId = netId
      setNetId_set(NetId)

    }
    )
    let acc;
    let wireNftContractAddress;
    let wireNftContractAbi;
    
   
    if (NetId == 56) {
      acc = await loadWeb3();
      
      wireNftContractAddress = "0xEA83372466969f0a962Ee5d5A385753138FDfBEd";
      wireNftContractAbi =[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"contract IBEP20","name":"_Token","type":"address"},{"internalType":"contract IBEP20","name":"_BUSD","type":"address"},{"internalType":"contract IPancakePair","name":"_bnbtobusd","type":"address"},{"internalType":"contract IPancakePair","name":"_ULEtobnblp","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"BUSD","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BUSDtobnb","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BnbtoBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"ClaimBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"ClaimBUSD","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Claimtoken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"MaxLimitPerTransaction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MinitngPricein_token","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"SetMinitngPricein_Token","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"SetWhitelistMinitngPricein_BUSD","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"SetWhitelistMinitngPricein_Token","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"SetWhitelistMintingPricein_BNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"Token","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ULEtobnb","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ULEtobnblp","outputs":[{"internalType":"contract IPancakePair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ValueinULE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Valueinbnb","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WhitelistMinitngPricein_BUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WhitelistMinitngPricein_token","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WhitelistMintingPricein_BNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Whitelist_MaxLimitPerTransaction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bnbbusdlp","outputs":[{"internalType":"contract IPancakePair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bnbtoULE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"iswhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxsupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"}],"name":"mint_with_BNB","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint_with_BUSD","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint_with_token","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"mintedNFTs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"one$toULE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pausedminting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pricetime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setMaxLimitPerTransaction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setRevealed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setWhitelist_MaxLimitPerTransaction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newbaseExtension","type":"string"}],"name":"setbaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newnotRevealedUri","type":"string"}],"name":"setnotRevealedUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"bool","name":"_state","type":"bool"}],"name":"setwhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawBUSDtoken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawothertoken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawtoken","outputs":[],"stateMutability":"nonpayable","type":"function"}]
      
      
      
      
    } else {
      acc = await loadWeb2()

      wireNftContractAddress = "0xfd358c1055E95ad91FCD24837e8F87417c788E3D";
      
      
      wireNftContractAbi = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"contract IBEP20","name":"_Token","type":"address"},{"internalType":"contract IBEP20","name":"_BUSD","type":"address"},{"internalType":"contract IPancakePair","name":"_matictobusd","type":"address"},{"internalType":"contract IPancakePair","name":"_whetomaticlp","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"BUSD","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BUSDtoMatic","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"ClaimBUSD","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"ClaimMATIC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Claimtoken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"MatictoBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MaxLimitPerTransaction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MinitngPricein_token","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"SetMinitngPricein_Token","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"SetWhitelistMinitngPricein_BUSD","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"SetWhitelistMinitngPricein_token","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"SetWhitelistMintingPricein_MATIC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"Token","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ValueinWHE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Valueinmatic","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WhitelistMinitngPricein_BUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WhitelistMinitngPricein_token","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WhitelistMintingPricein_MATIC","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Whitelist_MaxLimitPerTransaction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"iswhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maticbusdlp","outputs":[{"internalType":"contract IPancakePair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"matictowhe","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxsupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint_with_BUSD","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"}],"name":"mint_with_MATIC","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint_with_token","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"mintedNFTs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"one$towhe","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pausedminting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pricetime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setMaxLimitPerTransaction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setRevealed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setWhitelist_MaxLimitPerTransaction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newbaseExtension","type":"string"}],"name":"setbaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newnotRevealedUri","type":"string"}],"name":"setnotRevealedUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"bool","name":"_state","type":"bool"}],"name":"setwhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whetomatic","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whetomaticlp","outputs":[{"internalType":"contract IPancakePair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawBUSDtoken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawothertoken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawtoken","outputs":[],"stateMutability":"nonpayable","type":"function"}]
      
    }
    
    // console.log("Account", acc);
    // console.log("wireNftContractAddress",wireNftContractAddress);
    if (acc == "No Wallet") {
      console.log("wallet");
      setBtTxt("Connect Wallet")
    }
    else if (acc == "Wrong Network") {
      setBtTxt("Wrong Network")
    } else if (acc == "Connect Wallet") {
      console.log("Connect Wallet");
    }
    else {
      const web3 = window.web3;
      let ULE_NFT_100_OF = new web3.eth.Contract(ULE_NFT_100_ABI, ULE_NFT_100);
      let ULE_NFT_200_OF = new web3.eth.Contract(ULE_NFT_200_ABI, ULE_NFT_200);
      let ULE_NFT_300_OF = new web3.eth.Contract(ULE_NFT_300_ABI, ULE_NFT_300);
      let ULE_NFT_400_OF = new web3.eth.Contract(ULE_NFT_400_ABI, ULE_NFT_400);
      let ULE_NFT_500_OF = new web3.eth.Contract(ULE_NFT_500_ABI, ULE_NFT_500);
      let ULE_NFT_1000_OF = new web3.eth.Contract(ULE_NFT_1000_ABI, ULE_NFT_1000);
      let ULE_NFT_2000_OF = new web3.eth.Contract(ULE_NFT_2000_ABI, ULE_NFT_2000);
      let ULE_NFT_3000_OF = new web3.eth.Contract(ULE_NFT_3000_ABI, ULE_NFT_3000);
      let ULE_NFT_4000_OF = new web3.eth.Contract(ULE_NFT_4000_ABI, ULE_NFT_4000);
      let ULE_NFT_5000_OF = new web3.eth.Contract(ULE_NFT_5000_ABI, ULE_NFT_5000);
      let ULE_NFT_10000_OF = new web3.eth.Contract(ULE_NFT_10000_ABI, ULE_NFT_10000);


      let simplleArray = [];
     
      let walletOfOwner100 = await ULE_NFT_100_OF.methods.walletOfOwner(acc).call()
      let Price100=await ULE_NFT_100_OF.methods.MinitngPricein_token().call()

      let walletLength = walletOfOwner100.length
      console.log("walletOfOwner",walletLength);
      setMyWalletLength(walletLength)
      for (let i = 0; i <walletLength; i++) {

        try {
          let res = await axios.get(`https://usdulenft.mypinata.cloud/ipfs/QmdHtZGQU4FPBfytDAEyKYCqXHcNtzWSM6ymPuWVRnVR5Q/${walletOfOwner100[i]}.gif`)
          // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
          let imageUrl = res.config.url;
          console.log("check", res);
          let dna = Price100
          simplleArray = [...simplleArray, { imageUrl: imageUrl, num: dna }]
          setImageArray(simplleArray);
        } catch (e) {
          console.log("Error while Fetching Api", e)
        }
      }


      let walletOfOwner200 = await ULE_NFT_200_OF.methods.walletOfOwner(acc).call()
      let Price200=await ULE_NFT_200_OF.methods.MinitngPricein_token().call()

      let walletLength200 = walletOfOwner200.length
      console.log("walletLength200",walletLength200);
      // walletLength200=2770+walletLength200;
      setMyWalletLength(walletLength200)
      for (let i = 0; i <walletLength200; i++) {
        let val=walletOfOwner200[i]
        let  url_num=val+2770;
        try {
          let res = await axios.get(`https://usdulenft.mypinata.cloud/ipfs/QmZfw5joy4ZDhXZiJu5EvRuNYEP38MAYbKcMjWdB3DfwTZ/${url_num}.gif`)
          // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
          let imageUrl = res.config.url;
          console.log("check", res);
          let dna = Price200
          simplleArray = [...simplleArray, { imageUrl: imageUrl, num: dna }]
          setImageArray(simplleArray);
        } catch (e) {
          console.log("Error while Fetching Api", e)
        }
      }

   
      let walletOfOwner300 = await ULE_NFT_300_OF.methods.walletOfOwner(acc).call()
      let Price300=await ULE_NFT_300_OF.methods.MinitngPricein_token().call()

      let walletLength300 = walletOfOwner300.length
      console.log("walletOfOwner",walletLength300);
      setMyWalletLength(walletLength300)
      for (let i = 0; i <walletLength300; i++) {
        let val=walletOfOwner300[i]
        let  url_num=val+3460;
        try {
          let res = await axios.get(`https://usdulenft.mypinata.cloud/ipfs/QmVEzHWb59Zo9r9sUEY1CVwWoFQkYEk4VgHRYYT83Vq636/${url_num}.gif`)
          // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
          let imageUrl = res.config.url;
          console.log("check", res);
          let dna = Price300
          simplleArray = [...simplleArray, { imageUrl: imageUrl, num: dna }]
          setImageArray(simplleArray);
        } catch (e) {
          console.log("Error while Fetching Api", e)
        }
      }


      let walletOfOwner400 = await ULE_NFT_400_OF.methods.walletOfOwner(acc).call()
      let Price400=await ULE_NFT_400_OF.methods.MinitngPricein_token().call()

      let walletLength400 = walletOfOwner400.length
      console.log("walletOfOwner",walletLength400);
      setMyWalletLength(walletLength400)
      for (let i = 0; i <walletLength400; i++) {
        let val=walletOfOwner400[i]
        let  url_num=val+4130;
        try {
          let res = await axios.get(`https://usdulenft.mypinata.cloud/ipfs/QmVjhfnbMkBgsw1ijXGr6FFohhD55Nm7SZupTdkWEzzGQX/${url_num}.gif`)
          // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
          let imageUrl = res.config.url;
          console.log("check", res);
          let dna = Price400
          simplleArray = [...simplleArray, { imageUrl: imageUrl, num: dna }]
          setImageArray(simplleArray);
        } catch (e) {
          console.log("Error while Fetching Api", e)
        }
      }



      let walletOfOwner500 = await ULE_NFT_500_OF.methods.walletOfOwner(acc).call()
      let Price500=await ULE_NFT_500_OF.methods.MinitngPricein_token().call()

      let walletLength500 = walletOfOwner500.length
      console.log("walletOfOwner",walletLength500);
      setMyWalletLength(walletLength500)
      for (let i = 0; i <walletLength500; i++) {
        let val=walletOfOwner500[i]
        let  url_num=val+4800;
        try {
          let res = await axios.get(`https://usdulenft.mypinata.cloud/ipfs/QmYhnW22KPbckGWaePUASowNHKrck3Xk2XcVRbYM78ktTU/${url_num}.gif`)
          // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
          let imageUrl = res.config.url;
          console.log("check", res);
          let dna =Price500
          simplleArray = [...simplleArray, { imageUrl: imageUrl, num: dna }]
          setImageArray(simplleArray);
        } catch (e) {
          console.log("Error while Fetching Api", e)
        }
      }


      let walletOfOwner1000 = await ULE_NFT_1000_OF.methods.walletOfOwner(acc).call()
      let Price1000=await ULE_NFT_1000_OF.methods.MinitngPricein_token().call()

      let walletLength1000 = walletOfOwner1000.length
      console.log("walletOfOwner",walletLength1000);
      setMyWalletLength(walletLength1000)
      for (let i = 0; i <walletLength1000; i++) {
        let val=walletOfOwner1000[i]
        let  url_num=val+5540;
        try {
          let res = await axios.get(`https://usdulenft.mypinata.cloud/ipfs/QmRpDTwYkr81eix3MJQuAYqMksXhdRFDutjzYok3Z7JHge/p1/${url_num}.gif`)
          // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
          let imageUrl = res.config.url;
          console.log("check", res);
          let dna = Price1000
          simplleArray = [...simplleArray, { imageUrl: imageUrl, num: dna }]
          setImageArray(simplleArray);
        } catch (e) {
          console.log("Error while Fetching Api", e)
        }
      }


      let walletOfOwner2000 = await ULE_NFT_2000_OF.methods.walletOfOwner(acc).call()
      let Price2000=await ULE_NFT_2000_OF.methods.MinitngPricein_token().call()

      let walletLength2000 = walletOfOwner2000.length
      console.log("walletOfOwner",walletLength2000);
      setMyWalletLength(walletLength2000)
      for (let i = 0; i <walletLength2000; i++) {
        let val=walletOfOwner2000[i]
        let  url_num=val+5840;
        try {
          let res = await axios.get(`https://usdulenft.mypinata.cloud/ipfs/QmPDQfrrLFiNwHPrE4f2oZP3Zspg4ZMk6jAu9spTNdmk4p/${url_num}.gif`)
          // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
          let imageUrl = res.config.url;
          console.log("check", res);
          let dna = Price2000
          simplleArray = [...simplleArray, { imageUrl: imageUrl, num: dna }]
          setImageArray(simplleArray);
        } catch (e) {
          console.log("Error while Fetching Api", e)
        }
      }


      let walletOfOwner3000 = await ULE_NFT_3000_OF.methods.walletOfOwner(acc).call()
      let Price3000=await ULE_NFT_3000_OF.methods.MinitngPricein_token().call()

      let walletLength3000 = walletOfOwner3000.length
      console.log("walletOfOwner",walletLength3000);
      setMyWalletLength(walletLength3000)
      for (let i = 0; i <walletLength3000; i++) {
        let val=walletOfOwner3000[i]
        let  url_num=val+6140;
        try {
          let res = await axios.get(`https://usdulenft.mypinata.cloud/ipfs/QmaFcyFxBQuo7qxvzN3PYm9W6oHeJypbiC9FuYhf6XeSEG/${url_num}.gif`)
          // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
          let imageUrl = res.config.url;
          console.log("check", res);
          let dna = Price3000
          simplleArray = [...simplleArray, { imageUrl: imageUrl, num: dna }]
          setImageArray(simplleArray);
        } catch (e) {
          console.log("Error while Fetching Api", e)
        }
      }


      let walletOfOwner4000 = await ULE_NFT_4000_OF.methods.walletOfOwner(acc).call()
      let Price4000=await ULE_NFT_4000_OF.methods.MinitngPricein_token().call()

      let walletLength4000 = walletOfOwner4000.length
      console.log("walletOfOwner",walletLength4000);
      setMyWalletLength(walletLength4000)
      for (let i = 0; i <walletLength4000; i++) {
        let val=walletOfOwner4000[i]
        let  url_num=val+6440;
        try {
          let res = await axios.get(`https://usdulenft.mypinata.cloud/ipfs/QmeBnPEeQTaGgvKLYq7Ej51Kq5Kh2dNjan5fTg1eNkWBjZ/${url_num}.gif`)
          // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
          let imageUrl = res.config.url;
          console.log("check", res);
          let dna = Price4000
          simplleArray = [...simplleArray, { imageUrl: imageUrl, num: dna }]
          setImageArray(simplleArray);
        } catch (e) {
          console.log("Error while Fetching Api", e)
        }
      }


      let walletOfOwner5000 = await ULE_NFT_5000_OF.methods.walletOfOwner(acc).call()
      let Price5000=await ULE_NFT_5000_OF.methods.MinitngPricein_token().call()

      let walletLength5000 = walletOfOwner5000.length
      console.log("walletOfOwner",walletLength5000);
      setMyWalletLength(walletLength5000)
      for (let i = 0; i <walletLength5000; i++) {
        let val=walletOfOwner5000[i]
        let  url_num=val+6740;
        try {
          let res = await axios.get(`https://usdulenft.mypinata.cloud/ipfs/QmcSECUxFXFpxVUzWP63qPyonfRt8qW5UaJHa8GDL9yZnV/${url_num}.gif`)
          // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
          let imageUrl = res.config.url;
          console.log("check", res);
          let dna = Price5000
          simplleArray = [...simplleArray, { imageUrl: imageUrl, num: dna }]
          setImageArray(simplleArray);
        } catch (e) {
          console.log("Error while Fetching Api", e)
        }
      }


      let walletOfOwner10000 = await ULE_NFT_10000_OF.methods.walletOfOwner(acc).call()
     
      let Price10000=await ULE_NFT_10000_OF.methods.MinitngPricein_token().call()
      let walletLength10000 = walletOfOwner10000.length
      console.log("walletOfOwner",walletLength10000);
      setMyWalletLength(walletLength10000)
      for (let i = 0; i <walletLength10000; i++) {
        let val=walletOfOwner10000[i]
        let  url_num=val+7040;
        try {
          let res = await axios.get(`https://usdulenft.mypinata.cloud/ipfs/QmeSFY6S6DzrhW7UPX9hfy6AvnwTahFQT15wCtWp7d25Mr/${url_num}.gif`)
          // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
          let imageUrl = res.config.url;
          console.log("check", res);
          let dna = Price10000
          simplleArray = [...simplleArray, { imageUrl: imageUrl, num: dna }]
          setImageArray(simplleArray);
        } catch (e) {
          console.log("Error while Fetching Api", e)
        }
      }
     
    }
  }


  useEffect(() => {

    setInterval(() => {
      getAccount()  
    }, 500);
    allImagesNfts();
   
  }, [imageArray]);
  return (
    <div>


      <div
        class="live-auctions-area colection_div section-padding-100-50 bg-overlay-2 bg-img"
      // style="background-image: url(bg-shape.jpg);"
      >
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h6 class="heading-sub">New Collection</h6>
              <h2 class="heading-title">All Collections</h2>
            </div>
          </div>

          <div class="row justify-content-center">
         {
             
             imageArray.map((items, idex) => {
                return (

                  <div class="col-sm-6 col-lg-4">
                    <div class="single-live-auction home-2">
                      <div class=" home-2">
                        <img src={items.imageUrl} alt="Image" width="100%" />
                      </div>

                      <div class="collection-text home-2 text-center">
                        <a href="#">ULE NFT {items.num} USD</a>

                      </div>
                    </div>
                  </div>



                )
              })
            }
            {/* <div class="col-sm-6 col-lg-4">
              <div class="single-live-auction home-2">
                <div class="auction-thumb home-2">
                  <img src="s-5.jpg" alt="Image" />
                </div>

                <div class="collection-text home-2 text-center">
                  <a href="#">Jisan Donan</a>
                  <p>20% of the part</p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="single-live-auction home-2">
                <div class="auction-thumb home-2">
                  <img src="s-2.jpg" alt="Image" />
                </div>

                <div class="collection-text home-2 text-center">
                  <a href="#">Trihana Donan</a>
                  <p>40% of the part</p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="single-live-auction home-2">
                <div class="auction-thumb home-2">
                  <img src="s-3.jpg" alt="Image" />
                </div>

                <div class="collection-text home-2 text-center">
                  <a href="#">Jisan Donan</a>
                  <p>20% of the part</p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="single-live-auction home-2">
                <div class="auction-thumb home-2">
                  <img src="s-5.jpg" alt="Image" />
                </div>

                <div class="collection-text home-2 text-center">
                  <a href="#">Jisan Donan</a>
                  <p>20% of the part</p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="single-live-auction home-2">
                <div class="auction-thumb home-2">
                  <img src="s-6.jpg" alt="Image" />
                </div>

                <div class="collection-text home-2 text-center">
                  <a href="#">Jisan Donan</a>
                  <p>20% of the part</p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="single-live-auction home-2">
                <div class="auction-thumb home-2">
                  <img src="s-4.jpg" alt="Image" />
                </div>

                <div class="collection-text home-2 text-center">
                  <a href="#">Jisan Donan</a>
                  <p>20% of the part</p>
                </div>
              </div>
            </div> */}

            {/* <!-- Button -->
                <!-- <div class="col-12">
                    <div class="btn-area mb-50 text-center">
                        <a class="btn btn-box" href="#">View All</a>
                    </div>
                </div> --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
