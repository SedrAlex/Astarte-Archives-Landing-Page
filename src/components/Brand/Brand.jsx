import React from "react";

//INTERNAL IMPORT
import Style from "./Brand.module.css";
import images from "../../img";
import Button from "../Button/Button";

const Brand = () => {
  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_left}>
          <img src={images.logo} alt="brand logo" width={100} height={100} />
          <h1>Earn free crypto with Ciscrypt</h1>
          <p>A creative agency that lead and inspire.</p>

          <div className={Style.Brand_box_left_btn}>
            <Button btnName="Create" handleClick={() => {}} />
            <Button btnName="Discover" handleClick={() => {}} />
          </div>
        </div>
        <div className={Style.Brand_box_right}>
          <img src={images.earn} alt="brand logo" width={800} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
