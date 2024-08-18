import React from "react";
import { motion } from "framer-motion";

//INTERNAL IMPORT
import Style from "./SliderCard.module.css";


const SliderCard = ({ el, i }) => {
  return (
    <motion.div className={Style.sliderCard}>
      <div className={Style.sliderCard_box}>
        <motion.div className={Style.sliderCard_box_img}>
          <img
            src={el.background}
            className={Style.sliderCard_box_img_img}
            alt="slider profile"
          />
        </motion.div>
        <div className={Style.sliderCard_box_title}>
          <p>NFT Video #1245</p>
          <div className={Style.sliderCard_box_title_like}>
            {/* <LikeProfile /> */}
            <small>1 0f 100</small>
          </div>
        </div>

        <div className={Style.sliderCard_box_price}>
          <div className={Style.sliderCard_box_price_box}>
            <small>Current Bid</small>
            <p>1.000 ETH</p>
          </div>

          <div className={Style.sliderCard_box_price_time}>
            <small>Reaming time</small>
            <p>3h : 15m : 20s</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;