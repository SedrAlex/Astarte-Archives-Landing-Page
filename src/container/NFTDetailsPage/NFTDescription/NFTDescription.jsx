import React, { useState } from "react";
import {
  MdVerified,
  MdCloudUpload,
  MdTimer,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { SiMaterialformkdocs } from "react-icons/si";
import { RxDimensions } from "react-icons/rx";
import { LuCodesandbox } from "react-icons/lu";
import { MdOutlineMuseum } from "react-icons/md";
// INTERNAL IMPORT
import Style from "./NFTDescription.module.css";
import images from "../../../img";

import Button from "../../../components/Button/Button";
import NFTTabs from "../NFTTabs/NFTTabs";

const NFTDescription = ({ nfts }) => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(true);
  const [provanance, setProvanance] = useState(false);
  const [owner, setOwner] = useState(false);

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ];
  const provananceArray = [
    images.user6,
    images.user7,
    images.user8,
    images.user9,
    images.user10,
  ];
  const ownerArray = [
    images.user1,
    images.user8,
    images.user2,
    images.user6,
    images.user5,
  ];

  const openSocial = () => {
    if (!social) {
      setSocial(true);
      setNFTMenu(false);
    } else {
      setSocial(false);
    }
  };

  const openNFTMenu = () => {
    if (!NFTMenu) {
      setNFTMenu(true);
      setSocial(false);
    } else {
      setNFTMenu(false);
    }
  };

  const openTabs = (e) => {
    const btnText = e.target.innerText;

    if (btnText === "Bid History") {
      setHistory(true);
      setProvanance(false);
      setOwner(false);
    } else if (btnText === "Provanance") {
      setHistory(false);
      setProvanance(true);
      setOwner(false);
    }
  };

  const openOwner = () => {
    if (!owner) {
      setOwner(true);
      setHistory(false);
      setProvanance(false);
    } else {
      setOwner(false);
      setHistory(true);
    }
  };

  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        {/* Part ONE */}
        <div className={Style.NFTDescription_box_share}>
          <p>Museum Artifacts</p>
          <div className={Style.NFTDescription_box_share_box}>
            {/* <MdCloudUpload
              className={Style.NFTDescription_box_share_box_icon}
              onClick={() => openSocial()}
            /> */}

            {social && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <TiSocialFacebook /> Facebook
                </a>
                <a href="#">
                  <TiSocialInstagram /> Instagram
                </a>
                <a href="#">
                  <TiSocialLinkedin /> LinkedIn
                </a>
                <a href="#">
                  <TiSocialTwitter /> Twitter
                </a>
                <a href="#">
                  <TiSocialYoutube /> YouTube
                </a>
              </div>
            )}

            {/* <BsThreeDots
              className={Style.NFTDescription_box_share_box_icon}
              onClick={() => openNFTMenu()}
            /> */}

            {NFTMenu && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <BiDollar /> Change price
                </a>
                <a href="#">
                  <BiTransferAlt /> Transfer
                </a>
                <a href="#">
                  <MdReportProblem /> Report abuse
                </a>
                <a href="#">
                  <MdOutlineDeleteSweep /> Delete item
                </a>
              </div>
            )}
          </div>
        </div>
        {/* Part TWO */}
        <div className={Style.NFTDescription_box_profile}>
          <h1> {nfts.name}</h1>
          <div className={Style.NFTDescription_box_profile_box}>
            <div className={Style.NFTDescription_box_profile_box_right}></div>
          </div>

          <div className={Style.NFTDescription_box_profile_biding}>
            <div className={Style.NFTDescription_box_profile_biding_box_timer}>
            <div
                className={
                  Style.NFTDescription_box_profile_biding_box_timer_item
                }
              >
                <p>
                  {" "}
                  <MdOutlineMuseum />
                  {nfts.category}
                </p>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_biding_box_timer_item
                }
              >
                <p>
                  {" "}
                  <MdDateRange />
                  {nfts.date}
                </p>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_biding_box_timer_item
                }
              >
                <p>
                  {" "}
                  <FaLocationDot />
                  {nfts.site}
                </p>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_biding_box_timer_item
                }
              >
                <p>
                  {" "}
                  <SiMaterialformkdocs />
                  {nfts.material}
                </p>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_biding_box_timer_item
                }
              >
                <p>
                  {" "}
                  <RxDimensions />
                  {nfts.dimension}
                </p>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_biding_box_timer_item
                }
              ></div>
            </div>

            <div className={Style.NFTDescription_box_profile_biding_box_price}>
              <div
                className={
                  Style.NFTDescription_box_profile_biding_box_price_bid
                }
              >
                <small>Current Code</small>
                <p>
                <LuCodesandbox />
                   <span>  {nfts.code}</span>
                </p>
              </div>

            </div>

            <div className={Style.NFTDescription_box_profile_biding_box_button}>
            
            </div>

      

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDescription;
