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
import { useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { SiMaterialformkdocs } from "react-icons/si";
import { RxDimensions } from "react-icons/rx";
import { LuCodesandbox } from "react-icons/lu";
const UploadItem = ({ uploadToPinata, createNFT }) => {
  const [price, setPrice] = useState("");
  const [site, setSite] = useState("");
  const [material, setMaterial] = useState("");
  const [dimension, setDimension] = useState("");
  const [code, setCode] = useState("");
  const [date, setDate] = useState("");
  const [active, setActive] = useState(0);
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [category, setCategory] = useState("");
  const [properties, setProperties] = useState("");
  const [image, setImage] = useState(null);
  const [artifactName, setArtifactName] = useState("");
  const [historicalPeriod, setHistoricalPeriod] = useState("");
  const [origin, setOrigin] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
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
        description={description}
        royalties={royalties}
        fileSize={fileSize}
        category={category}
        properties={properties}
        setImage={setImage}
        site={site}
        date={date}
        material={material}
        dimension={dimension}
        code={code}
        uploadToPinata={uploadToPinata}
      />

      <div className={Style.upload_box}>
        <div className={formStyle.Form_box_input}>
          <label htmlFor="name">Artifact Name</label>
          <input
            type="text"
            placeholder="Artifact Name"
            className={formStyle.Form_box_input_userName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="description">Description</label>
          <textarea
            cols="30"
            rows="6"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <p>
            The description will be included on the item's detail page
            underneath its image. Markdown syntax is supported.
          </p>
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="museum">Choose Museum</label>
          <p className={Style.upload_box_input_para}>
            Choose an existing Museum for now
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
                  setCategory(el.category); // Set category as string
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
                <p> This artifact belongs to {el.category} - Museum</p>
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
            <label htmlFor="Price">Price (Optional)</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <IoPricetagOutline />
              </div>
              <input
                type="text"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="Site">Site </label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <FaLocationDot />
              </div>
              <input
                type="text"
                placeholder="Site"
                onChange={(e) => setSite(e.target.value)}
              />
            </div>
          </div>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="Date">Date </label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <MdDateRange />
              </div>
              <input
                type="text"
                placeholder="2000 Bc"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="Material">Material</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <SiMaterialformkdocs />
              </div>
              <input
                type="text"
                placeholder="Gold"
                onChange={(e) => setMaterial(e.target.value)}
              />
            </div>
          </div>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="Dimensions">Dimensions </label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <RxDimensions />
              </div>
              <input
                type="text"
                placeholder="32 x 10"
                onChange={(e) => setDimension(e.target.value)}
              />
            </div>
          </div>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="Code">Code</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <LuCodesandbox />
              </div>
              <input
                type="text"
                placeholder="M1124"
                onChange={(e) => setCode(e.target.value)}
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
                site,
                date,
                image,
                material,
                dimension,
                code,
                description,
                navigate,
                royalties,
                fileSize,
                category,
                properties,                
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
