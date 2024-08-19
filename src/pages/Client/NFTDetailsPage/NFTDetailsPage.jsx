import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// INTERNAL IMPORT
import Button from "../../../components/Button/Button";
import Brand from "../../../components/Brand/Brand";
import Category from "../../../components/Category/Category";
import NFTDetailsPage from "../../../container/NFTDetailsPage/NFTDetailsPage";
import NavBar from "../../../components/NavBar/NavBar";
import Subscribe from "../../../container/Home/SubscribeSection/Subscribe";
import { NFTPlatformContext } from "../../../Context/NFTPlatformContext";
import MuseumSection from "../../../container/Home/MuseumSection/MuseumSection";

const NFTDetailsMainPage = () => {
  const { currentAccount } = useContext(NFTPlatformContext);
  const [nfts, setNfts] = useState({
    image: "",
    site: "",
    date: "",
    material: "",
    dimension: "",
    code: "",
    description: "",
    royalties: "",
    category: "",
  });

  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const nftData = {
      image: query.get("image") || "",
      site: query.get("site") || "",
      date: query.get("date") || "",
      material: query.get("material") || "",
      dimension: query.get("dimension") || "",
      code: query.get("code") || "",
      description: query.get("description") || "",
      royalties: query.get("royalties") || "",
      category: query.get("category") || "",
      tokenId:query.get("tokenId") || "",
      owner:query.get("owner") || "",
      name:query.get("name") || "",

    };
    setNfts(nftData);
  }, [location.search]);

  return (
    <div>
      <NavBar />
      <NFTDetailsPage nfts={nfts} />
      <MuseumSection />
      <Subscribe />
    </div>
  );
};

export default NFTDetailsMainPage;
