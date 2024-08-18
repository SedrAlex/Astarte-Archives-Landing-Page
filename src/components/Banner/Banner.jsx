import React from "react";

// INTERNAL IMPORT
import Style from "./Banner.module.css";

const Banner = ({ bannerImage }) => {
  return (
    <div className={Style.banner}>
      <div className={Style.banner_img}>
        <img
          src={bannerImage}
          alt="background"
          style={{ objectFit: "cover", width: "100%", height: "300px" }}
        />
      </div>

      <div className={Style.banner_img_mobile}>
        <img
          src={bannerImage}
          alt="background"
          style={{ objectFit: "cover", width: "100%", height: "900px" }}
        />
      </div>
    </div>
  );
};

export default Banner;
