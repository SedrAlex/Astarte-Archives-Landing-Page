import React, { useContext, useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");
// Internal Import
import { NFTPlatformAddress, NFTPlatformABI } from "./Constants";

// Fetching Smart Contract
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(NFTPlatformAddress, NFTPlatformABI, signerOrProvider);

// Connecting with smart contract
const connectingWithSmartContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.error("Error connecting with contract:", error);
    throw new Error("Something went wrong while connecting with contract");
  }
};

export const NFTPlatformContext = React.createContext();

export const NFTPlatformProvider = ({ children }) => {
  //USESTATE
  const [currentAccount, setCurrentAccount] = useState("");

  //Check if the wallet is connected
  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) return console.log("Install MetaMask");
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No Account Found");
      }
    } catch (error) {
      console.log("Something wrong whitle connecting the wallet");
    }
  };
  useEffect(() => {
    checkIfWalletConnected();
  }, []);
  //Connect Wallet Function
  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("Install MetaMask");
      const accounts = await window.ethereum.request({
        method: "eth_requestedAccount",
      });
      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log("Error While Connecting the wallet");
    }
  };

  //Upload To IPFS function
  const uploadToIPFS = async (file) => {
    try {
      const added = await client.add({ content: file });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      return url;
    } catch (error) {
      console.log("Uploading To IPFS");
    }
  };

  //Create NFT Function
  const createNFT = async (formInput, fileUrl, BrowserRouter) => {
    const { name, description, price } = formInput;
    if (!name || !description || !price || !fileUrl)
      return console.log("Data Is Missing");
    const data = JSON.stringify({ name, description, image: fileUrl });
    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      await createSale(url, price);
    } catch (error) {
      console.log(error);
    }
  };

  //Create Sale Funnction
  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      const price = ethers.utils.parseUnits(formInputPrice, "ether");
      const contract = await connectingWithSmartContract();
      const listingPrice = await contract.getListingPrice();

      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.reSellToken(url, price, {
            value: listingPrice.toString(),
          });

      await transaction.wait();
    } catch (error) {
      console.log("error while creating the sale");
    }
  };
  //Fetch NFTs
  const fetchNFTs = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider();
      const contract = fetchContract(provider);
      const data = await contract.fetchMarketItem();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);

            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);
          }
        )
      );
    } catch (error) {
      console.log("Error While onnecting with the smart COntract");
    }
  };

  return (
    <NFTPlatformContext.Provider
      value={{
        uploadToIPFS,
        createNFT,
        connectWallet,
      }}
    >
      {children}
    </NFTPlatformContext.Provider>
  );
};
