
import React from "react";

//INTERNAL IMPORT
import Style from "./NFTDetailsPage.module.css";
import NFTDetailsImg from "./NFTDetailsImg/NFTDetailsImg";
import NFTDescription from "./NFTDescription/NFTDescription";

const NFTDetailsPage = ({ nfts}) => {
  return (
    <div className={Style.NFTDetailsPage}>
      <div className={Style.NFTDetailsPage_box}>
        <NFTDetailsImg nfts={nfts}  />
        <NFTDescription nfts={nfts}  />
      </div>
    </div>
  );
};

export default NFTDetailsPage;