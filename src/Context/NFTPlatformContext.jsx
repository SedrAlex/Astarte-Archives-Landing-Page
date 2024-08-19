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
  useNavigate,
} from "react-router-dom";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");
// Internal Import
import { NFTPlatformAddress, NFTPlatformABI } from "./Constants";

// Fetching Smart Contract
// const fetchContract = (signerOrProvider) => {
//   const contract = new ethers.Contract(contractAddress, contractABI, signerOrProvider);
//   return contract;
// };
const fetchContract = (signerOrProvider) => {
  const contract = new ethers.Contract(
    NFTPlatformAddress,
    NFTPlatformABI,
    signerOrProvider
  );
  return { contract, provider: signerOrProvider.provider };
};

// const connectingWithSmartContract = async () => {
//   try {
//     const web3Modal = new Web3Modal();
//     const connection = await web3Modal.connect();
//     const provider = new ethers.providers.Web3Provider(connection);

//     // Request access to the user's accounts
//     await provider.send("eth_requestAccounts", []);

//     const signer = provider.getSigner();
//     const contract = fetchContract(signer);
//     return contract;
//   } catch (error) {
//     console.error("Error connecting with contract:", error);
//     throw new Error("Something went wrong while connecting with contract");
//   }
// };

// Connecting with smart contract
const connectingWithSmartContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    console.log("provider", provider);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      NFTPlatformAddress,
      NFTPlatformABI,
      signer
    );
    return contract;
    //       const contract = fetchContract(signer);
    // return { contract };
  } catch (error) {
    console.error("Error connecting with contract:", error);
    throw new Error("Something went wrong while connecting with contract");
  }
};
const checkContract = async () => {
  const contract = await connectingWithSmartContract();
};

export const NFTPlatformContext = React.createContext();

export const NFTPlatformProvider = ({ children }) => {
  //USESTATE
  const [currentAccount, setCurrentAccount] = useState("");
  const [error, setError] = useState("");
  const [openError, setOpenError] = useState("");
  const navigate = useNavigate();
  //Check if the wallet is connected
  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) {
        setError("Install MetaMask");
        setOpenError(true);
        return;
      }
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        console.log("Connected account:", accounts[0]);
      } else {
        setError("No Account Found");
        setOpenError(true);
      }
    } catch (error) {
      setError("Something went wrong while connecting the wallet");
      setOpenError(true);
    }
  };

  // useEffect(() => {
  //   checkIfWalletConnected();
  // }, []);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("Install MetaMask");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log("Error While Connecting the wallet");
    }
  };
  //Upload To IPFS function
  // const uploadToIPFS = async (file) => {
  //   try {
  //     const added = await client.add({ content: file });
  //     const url = `https://ipfs.infura.io/ipfs/${added.path}`;
  //     return url;
  //   } catch (error) {
  //     console.log("Uploading To IPFS");
  //   }
  // };

  // const uploadToPinata = async (file) => {
  //   if (file) {
  //     try {
  //       const formData = new FormData();
  //       formData.append("file", file);

  //       const response = await axios({
  //         method: "POST",
  //         url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
  //         data: formData,
  //         headers: {
  //           pinata_api_key: `1b606381d99f4b1d5e5c`,
  //           pinata_secret_api_key: `47f3a6d868badb140127e59e24b77a6f76f75d4f8379820c7f809db8b5a25f4d`,
  //           'Content-Type': "multipart/form-data",
  //         },
  //       });
  //       const ImgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
  //       return ImgHash;
  //     } catch (error) {
  //       console.log("Unable To Upload the Images to Pinata");
  //     }
  //   }
  // };
  // const uploadToPinata = async (file) => {
  //   if (file) {
  //     try {
  //       const formData = new FormData();
  //       formData.append("file", file);

  //       const response = await axios({
  //         method: "POST",
  //         url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
  //         data: formData,
  //         headers: {
  //           pinata_api_key: `1b606381d99f4b1d5e5c`,
  //           pinata_secret_api_key: `47f3a6d868badb140127e59e24b77a6f76f75d4f8379820c7f809db8b5a25f4d`,
  //           'Content-Type': "multipart/form-data",
  //         },
  //       });

  //       const ImgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
  //       return ImgHash;
  //     } catch (error) {
  //       console.error("Unable To Upload the Images to Pinata", error);
  //       throw new Error("Upload failed");
  //     }
  //   } else {
  //     throw new Error("No file provided");
  //   }
  // };

  // const uploadToPinata = async (file) => {
  //   if (!file) {
  //     throw new Error("No file provided");
  //   }

  //   try {
  //     const formData = new FormData();
  //     formData.append("file", file);

  //     const response = await axios({
  //       method: "POST",
  //       url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
  //       data: formData,
  //       headers: {
  //         "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
  //         pinata_api_key: `ddb1b674cb6e2972e796`,
  //         pinata_secret_api_key: ` bd860e6f753ab24b9dfaa415d516b626d6bbd037fbabc59a97c066488b801674`,
  //       },
  //     });

  //     const ImgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
  //     return ImgHash;
  //   } catch (error) {
  //     console.error("Unable To Upload the Images to Pinata", error);
  //     throw new Error("Upload failed");
  //   }
  // };

  const uploadToPinata = async (file) => {
    if (!file) {
      throw new Error("No file provided");
    }

    const maxRetries = 3;
    let attempt = 0;

    while (attempt < maxRetries) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios({
          method: "POST",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            pinata_api_key: `ddb1b674cb6e2972e796`,
            pinata_secret_api_key: `bd860e6f753ab24b9dfaa415d516b626d6bbd037fbabc59a97c066488b801674`,
          },
        });

        const ImgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
        return ImgHash;
      } catch (error) {
        if (
          error.message === "Network Error" ||
          error.code === "ERR_INTERNET_DISCONNECTED"
        ) {
          attempt++;
          console.warn(`Attempt ${attempt} failed. Retrying...`);
          if (attempt >= maxRetries) {
            console.error(
              "Unable To Upload the Images to Pinata after multiple attempts",
              error
            );
            throw new Error("Upload failed after multiple attempts");
          }
        } else {
          console.error("Unable To Upload the Images to Pinata", error);
          throw new Error("Upload failed");
        }
      }
    }
  };
  //Create NFT Function

  const createNFT = async (
    name,
    price,
    site,
    date,
    image,
    material,
    dimension,
    code,
    description,
    royalties,
    fileSize,
    category,
    properties,
    router,
    setError,
    setOpenError
  ) => {
    // Initialize an array to hold the names of missing fields
    const missingFields = [];

    // Check each required field and add its name to the array if it's missing
    if (!name) missingFields.push("Name");
    if (!description) missingFields.push("Description");
    if (!royalties) missingFields.push("Royalties");
    if (!image) missingFields.push("Image");
    if (!code) missingFields.push("Code");
    if (!category) missingFields.push("Category");

    // If there are any missing fields, display an alert and return early
    if (missingFields.length > 0) {
      alert(`The following fields are missing: ${missingFields.join(", ")}`);
      return; // Prevent the process from completing
    }

    // Proceed with the rest of the function if all required fields are present
    const data = JSON.stringify({
      name,
      price,
      site,
      date,
      image,
      material,
      dimension,
      code,
      description,
      royalties,
      fileSize,
      category,
      properties,
    });

    try {
      const response = await axios({
        method: "POST",
        url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        data: data,
        headers: {
          pinata_api_key: `ddb1b674cb6e2972e796`,
          pinata_secret_api_key: `bd860e6f753ab24b9dfaa415d516b626d6bbd037fbabc59a97c066488b801674`,
          "Content-Type": "application/json",
        },
      });
      const url = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
      console.log(url);
      await createSale(url, price);
      router.push("/");
    } catch (error) {
      setError("Error While Creating NFT");
      setOpenError(true);
    }
  };

  //Create Sale Funnction
  // const createSale = async (url, formInputPrice, isReselling, id) => {
  //   try {
  //     const price = ethers.utils.parseUnits(formInputPrice, "ether");
  //     const contract = await connectingWithSmartContract();
  //     console.log("contract", contract);
  //     const listingPrice = await contract.getListingPrice();

  //     const transaction = !isReselling
  //       ? await contract.createToken(url, price, {
  //           value: listingPrice.toString(),
  //         })
  //       : await contract.reSellToken(id, price, {
  //           value: listingPrice.toString(),
  //         });

  //     await transaction.wait();
  //     console.log("transaction", transaction);
  //   } catch (error) {
  //     console.error("Error while creating the sale:", error);
  //   }
  // };

  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      const price = ethers.utils.parseUnits(formInputPrice, "ether");
      const contract = await connectingWithSmartContract();
      console.log("contract", contract);

      // Check if the contract has the getListingPrice method
      if (typeof contract.getListingPrice !== "function") {
        throw new Error(
          "getListingPrice method does not exist on the contract"
        );
      }

      const listingPrice = await contract.getListingPrice();
      console.log("listingPrice", listingPrice.toString());

      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.reSellToken(id, price, {
            value: listingPrice.toString(),
          });

      await transaction.wait();
      navigate("/search-page");
      console.log("transaction", transaction);
    } catch (error) {
      console.error("Error while creating the sale:", error);
    }
  };

  //Fetch NFTs
  // const fetchNFTs = async () => {
  //   try {
  //     const provider = new ethers.providers.JsonRpcProvider();
  //     const contract = fetchContract(provider);
  //     const data = await contract.fetchMarketItem();

  //     const items = await Promise.all(
  //       data.map(
  //         async ({ tokenId, seller, owner, price: unformattedPrice }) => {
  //           const tokenURI = await contract.tokenURI(tokenId);

  //           const {
  //             data: { image, name, description },
  //           } = await axios.get(tokenURI);
  //           const price = ethers.utils.formatUnits(
  //             unformattedPrice.toString(),
  //             "ether"
  //           );
  //           return {
  //             price,
  //             tokenId: tokenId.toNumber(),
  //             seller,
  //             owner,
  //             image,
  //             name,
  //             description,
  //             tokenURI,
  //           };
  //         }
  //       )
  //     );
  //     return items;
  //   } catch (error) {
  //     console.log("Error While Connecting with the smart Contract");
  //   }
  // };
  const fetchNFTs = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider();
      const contract = await connectingWithSmartContract();

      if (!contract.fetchMarketItems) {
        throw new Error("fetchMarketItem method not found on contract");
      }

      const data = await contract.fetchMarketItems();

      if (!Array.isArray(data)) {
        throw new Error("fetchMarketItems did not return an array");
      }

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            try {
              const tokenURI = await contract.tokenURI(tokenId);
              const response = await axios.get(tokenURI);
              const {
                name,
                site,
                date,
                image,
                material,
                dimension,
                code,
                description,
                royalties,
                fileSize,
                category,
                properties,
              } = response.data;

              const price = ethers.utils.formatUnits(
                unformattedPrice.toString(),
                "ether"
              );

              return {
                tokenId: tokenId.toNumber(),
                seller,
                owner,
                name,
                price,
                site,
                date,
                image,
                material,
                dimension,
                code,
                description,
                royalties,
                fileSize,
                category,
                properties,
                tokenURI,
              };
            } catch (innerError) {
              console.error(
                `Error fetching token data for tokenId ${tokenId}:`,
                innerError
              );
              return null; // Return null for this item if there's an error
            }
          }
        )
      );

      // Filter out any null items
      return items.filter((item) => item !== null);
    } catch (error) {
      console.error("Error while connecting with the smart contract:", error);
      return [];
    }
  };

  // FETCHING MY NFTS OR LISTED NFTs
  const fetchMyNFTsOrListedNFTs = async (type) => {
    try {
      const contract = await connectingWithSmartContract();
      const data =
        type == "fetchItemsListed"
          ? await contract.fetchItemsListed()
          : await contract.fetchMyNFT();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);
            const {
              data: {  
                name,
                site,
                date,
                image,
                material,
                dimension,
                code,
                description,
                royalties,
                fileSize,
                category,
                properties,},
            } = await axios.get(tokenURI);
            const price = ethers.utils.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );
            return {
              price,
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              name,
              site,
              date,
              image,
              material,
              dimension,
              code,
              description,
              royalties,
              fileSize,
              category,
              properties,
              tokenURI,
            };
          }
        )
      );
      return items;
    } catch (error) {
      console.log("Error While Fetching listed NFTs");
    }
  };
  return (
    <NFTPlatformContext.Provider
      value={{
        uploadToPinata,
        checkIfWalletConnected,
        createNFT,
        connectWallet,
        fetchMyNFTsOrListedNFTs,
        fetchNFTs,
        currentAccount,
        checkContract,
      }}
    >
      {children}
    </NFTPlatformContext.Provider>
  );
};
