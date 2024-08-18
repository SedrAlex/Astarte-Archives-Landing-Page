import React, { useContext, useEffect, useState } from "react";


import images from "../../../img";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Slider from "../../../components/Slider/Slider";
import Brand from "../../../components/Brand/Brand";
import Filter from "../../../components/Filter/FIlter";
import Banner from "../../../components/Banner/Banner";
import NFTCardTwo from "../../../components/NFTCardTwo/NFTCardTwo";
import "../../Admin/UploadNft/Upload.module.css";
import { NFTPlatformContext } from "../../../Context/NFTPlatformContext";

const SearchPage = () => {
  const {fetchNFTs} = useContext(NFTPlatformContext)
  const[nfts, setNfts] = useState([]);
  const[nftsCopy, setNftsCopy] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await fetchNFTs();
        if (Array.isArray(items)) {
          const reversedItems = items.reverse();
          setNfts(reversedItems);
          setNftsCopy(reversedItems);
          console.log(reversedItems);
        } else {
          console.error('fetchNFTs did not return an array');
        }
      } catch (error) {
        console.error('Error fetching NFTs:', error);
      }
    };
  
    fetchData();
  }, []); // Empty dependency array to run only once
  
   
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];
  return (
    <div >
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      {/* <Slider /> */}
      <Brand />
    </div>
  );
};

export default SearchPage;