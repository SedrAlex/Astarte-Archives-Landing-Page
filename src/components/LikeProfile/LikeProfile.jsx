import React from "react";

// INTERNAL IMPORT
import Style from "./LikeProfile.module.css";
import images from "../../img";

const LikeProfile = () => {
  const imageArray = [images.user1, images.user2, images.user3, images.user4];
  return (
    <div className={Style.like}>
      {imageArray.map((el, i) => (
        <div className={Style.like_box} key={i + 1}>
          <img
            src={el}
            width={15}
            height={15}
            key={i + 1}
            className={Style.like_box_img}
            alt={`user${i + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default LikeProfile;
