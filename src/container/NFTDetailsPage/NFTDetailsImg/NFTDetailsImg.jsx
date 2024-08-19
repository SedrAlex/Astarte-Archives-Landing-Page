import React, { useState } from "react";
import { BsImages } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

// INTERNAL IMPORT
import Style from "./NFTDetailsImg.module.css";
import images from "../../../img";

const NFTDetailsImg = ({nfts}) => {
  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(true);
  const [like, setLike] = useState(false);

  const openDescription = () => {
    setDescription(!description);
  };

  const openDetails = () => {
    setDetails(!details);
  };

  const likeNFT = () => {
    setLike(!like);
  };

  return (
    <div className={Style.NFTDetailsImg}>
      <div className={Style.NFTDetailsImg_box}>
        <div className={Style.NFTDetailsImg_box_NFT}>
          <div className={Style.NFTDetailsImg_box_NFT_like}>
            <BsImages className={Style.NFTDetailsImg_box_NFT_like_icon} />
          
          </div>

          <div className={Style.NFTDetailsImg_box_NFT_img}>
            <img
              src={nfts.image}
              className={Style.NFTDetailsImg_box_NFT_img_img}
              alt="NFT image"
              width={700}
              height={800}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div
          className={Style.NFTDetailsImg_box_description}
          onClick={openDescription}
        >
          <p>Description</p>
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {description && (
          <div className={Style.NFTDetailsImg_box_description_box}>
            <p>
             {nfts.description}
            </p>
          </div>
        )}

        <div
          className={Style.NFTDetailsImg_box_details}
          onClick={openDetails}
        >
          <p>Details</p>
          {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {details && (
          <div className={Style.NFTDetailsImg_box_details_box}>
            <small>2000 x 2000 px.IMAGE(685KB)</small>
            <p>
              <small>Contract Address</small>
              <br />
              {nfts.owner}

            </p>
            <p>
              <small>Token ID : </small>
              {nfts.tokenId}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTDetailsImg;
