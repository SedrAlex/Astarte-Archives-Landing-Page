import React, { useContext, useEffect, useState } from "react";
import images from "../../../img";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Slider from "../../../components/Slider/Slider";
import Brand from "../../../components/Brand/Brand";
import Filter from "../../../components/Filter/FIlter";
import Banner from "../../../components/Banner/Banner";
import NFTCardTwo from "../../../components/NFTCardTwo/NFTCardTwo";
import { NFTPlatformContext } from "../../../Context/NFTPlatformContext";
import Subscribe from "../../../container/Home/SubscribeSection/Subscribe";
import NavBar from "../../../components/NavBar/NavBar";

const SearchPage = () => {
  const { fetchNFTs } = useContext(NFTPlatformContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await fetchNFTs();
        if (Array.isArray(items)) {
          // Filter out NFTs with the name "piece-of lapis lazuli"
          const filteredItems = items.filter(item => item.name !== "piece-of lapis lazuli");
          const reversedItems = filteredItems.reverse();
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
    <div>
      <NavBar />
      <SearchBar />
      {/* <Filter /> */}
      <NFTCardTwo NFTData={nfts} />
      {/* <Slider /> */}
      <Subscribe />
    </div>
  );
};

export default SearchPage;
