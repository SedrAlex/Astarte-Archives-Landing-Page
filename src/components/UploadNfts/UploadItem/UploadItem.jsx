import React, { useState } from "react";
import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

// INTERNAL IMPORT
import Style from "./upload-item.module.css";
import formStyle from "../../../pages/Client/AccountPage/Form/form.module.css";
import Button from "../../Button/Button";
import DropZone from "../DropZone/DropZone";
import AleppoMuseum from "../../../assets/AleppoMuseum.png";
import DamascusMuseum from "../../../assets/DamascusMuseum.png";
import AlRaqqaMuseum from "../../../assets/AlRaqqaMuseum.png";
import PalmyraMuseum from "../../../assets/PalmyraMuseum.png";
import uploadIcon from "../../../assets/upload.png";
import { Router, useNavigate } from "react-router-dom";
const UploadItem = ({ uploadToPinata, createNFT }) => {
  const [price, setPrice] = useState(0);
  const [active, setActive] = useState(0);
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [category, setCategory] = useState(0);
  const [properties, setProperties] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const categoryArry = [
    {
      image: AleppoMuseum,
      category: "Aleppo",
    },
    {
      image: DamascusMuseum,
      category: "Damasucus",
    },
    {
      image: AlRaqqaMuseum,
      category: "AlRaqqa",
    },
    {
      image: PalmyraMuseum,
      category: "Palmyra",
    },
  ];

  return (
    <div className={Style.upload}>
      <DropZone
        title="JPG, PNG, WEBM , MAX 100MB"
        heading="Drag & drop file"
        subHeading="or Browse media on your device"
        name={name}
        website={website}
        description={description}
        royalties={royalties}
        fileSize={fileSize}
        category={category}
        properties={properties}
        // image={uploadIcon}
        setImage={setImage}
        uploadToPinata={uploadToPinata}
      />

      <div className={Style.upload_box}>
        <div className={formStyle.Form_box_input}>
          <label htmlFor="nft">Item Name</label>
          <input
            type="text"
            placeholder="shoaib bhai"
            className={formStyle.Form_box_input_userName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="website">Website</label>
          <div className={formStyle.Form_box_input_box}>
            <div className={formStyle.Form_box_input_box_icon}>
              <MdOutlineHttp />
            </div>

            <input
              type="text"
              placeholder="website"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <p className={Style.upload_box_input_para}>
            Ciscrypt will include a link to this URL on this item's detail page,
            so that users can click to learn more about it. You are welcome to
            link to your own webpage with more details.
          </p>
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="description">Description</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            placeholder="something about yourself in few words"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <p>
            The description will be included on the item's detail page
            underneath its image. Markdown syntax is supported.
          </p>
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="name">Choose collection</label>
          <p className={Style.upload_box_input_para}>
            Choose an exiting collection or create a new one
          </p>

          <div className={Style.upload_box_slider_div}>
            {categoryArry.map((el, i) => (
              <div
                className={`${Style.upload_box_slider} ${
                  active === i + 1 ? Style.active : ""
                }`}
                key={i + 1}
                onClick={() => {
                  setActive(i + 1);
                  setCategory(el.category);
                }}
              >
                <div className={Style.upload_box_slider_box}>
                  <div className={Style.upload_box_slider_box_img}>
                    <img
                      src={el.image}
                      alt="background"
                      width={70}
                      height={70}
                      className={Style.upload_box_slider_box_img_img}
                    />
                  </div>
                  <div className={Style.upload_box_slider_box_img_icon}>
                    <TiTick />
                  </div>
                </div>
                <p>Crypto Legend - {el.category} </p>
              </div>
            ))}
          </div>
        </div>

        <div className={formStyle.Form_box_input_social}>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="Royalties">Royalties</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <FaPercent />
              </div>
              <input
                type="text"
                placeholder="20%"
                onChange={(e) => setRoyalties(e.target.value)}
              />
            </div>
          </div>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="size">Size</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <MdOutlineAttachFile />
              </div>
              <input
                type="text"
                placeholder="165MB"
                onChange={(e) => setFileSize(e.target.value)}
              />
            </div>
          </div>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="Propertie">Propertie</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <AiTwotonePropertySafety />
              </div>
              <input
                type="text"
                placeholder="Propertie"
                onChange={(e) => setProperties(e.target.value)}
              />
            </div>
          </div>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="Price">Price</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <AiTwotonePropertySafety />
              </div>
              <input
                type="text"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={Style.upload_box_btn}>
          <Button
            btnName="Upload"
            handleClick={async () =>
              createNFT(
                name,
                price,
                image,
                description,
                navigate,
                // website,
                // royalties,
                // fileSize,
                // category,
                // properties
              )
            }
            classStyle={Style.upload_box_btn_style}
          />
          <Button
            btnName="Preview"
            handleClick={() => {}}
            classStyle={Style.upload_box_btn_style}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadItem;
