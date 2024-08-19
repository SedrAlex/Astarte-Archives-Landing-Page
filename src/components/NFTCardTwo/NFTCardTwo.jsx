import React, { useState } from "react";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";

// INTERNAL IMPORT
import Style from "./NFTCardTwo.module.css";
import LikeProfile from "../LikeProfile/LikeProfile";
import { Link } from "react-router-dom";

const NFTCardTwo = ({ NFTData }) => {
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(21);

  const likeNFT = () => {
    if (!like) {
      setLike(true);
      setLikeInc(likeInc + 1);
    } else {
      setLike(false);
      setLikeInc(likeInc - 1);
    }
  };
  const serialize = (obj) => {
    return Object.keys(obj)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
      .join('&');
  };
  return (
    <div className={Style.NFTCardTwo}>
      {NFTData.map((el, i) => (
        <Link
        to={`/nft-details?${serialize(el)}`} 
        key={i + 1}
        >
          <div className={Style.NFTCardTwo_box} key={i + 1}>
            <div className={Style.NFTCardTwo_box_like}>
              <div className={Style.NFTCardTwo_box_like_box}>
                <div className={Style.NFTCardTwo_box_like_box_box}>
                  <BsImage className={Style.NFTCardTwo_box_like_box_box_icon} />
                  {/* <p onClick={() => likeNFT()}>
                  {like ? <AiOutlineHeart /> : <AiFillHeart />}
                  {""}
                  <span>{likeInc}</span>
                </p> */}
                </div>
              </div>
            </div>

            <div className={Style.NFTCardTwo_box_img}>
              <img
                src={el.image}
                alt="NFT"
                width={500}
                height={500}
                style={{ objectFit: "cover" }}
                className={Style.NFTCardTwo_box_img_img}
              />
            </div>

            <div className={Style.NFTCardTwo_box_info}>
              <div className={Style.NFTCardTwo_box_info_left}>
                {/* <LikeProfile /> */}
                <p>{el.name}</p>
              </div>
              <small>4{i + 2}</small>
            </div>

            <div className={Style.NFTCardTwo_box_price}>
              <div className={Style.NFTCardTwo_box_price_box}>
                <small>Current situation</small>
                <p>{el.owner}</p>
              </div>
             
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NFTCardTwo;
