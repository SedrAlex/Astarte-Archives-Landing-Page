import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

// INTERNAL IMPORT
import Style from "./DropZone.module.css";
import PalmyraMuseum from "../../../assets/PalmyraMuseum.png"
import uploadIcon from "../../../assets/upload.png";

const DropZone = ({
  title,
  heading,
  subHeading,
  name,
  website,
  description,
  royalties,
  fileSize,
  category,
  properties,
  setImage,
  uploadToPinata
}) => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFile) => {
    const url = await uploadToPinata(acceptedFile[0]);
    setFileUrl(url);
    setImage(url);
    console.log(url);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  return (
    <div className={Style.DropZone}>
      <div className={Style.DropZone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={Style.DropZone_box_input}>
          <p>{title}</p>
          <div className={Style.DropZone_box_input_img}>
            <img
              src={uploadIcon}
              alt="upload"
              width={100}
              height={100}
              style={{ objectFit: "contain" }}
              className={Style.DropZone_box_input_img_img}
            />
          </div>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>

      {fileUrl && (
        <aside className={Style.DropZone_box_aside}>
          <div className={Style.DropZone_box_aside_box}>
            <img
              src={fileUrl}
              alt="nft preview"
              width={200}
              height={200}
              style={{ objectFit: "contain" }}
            />

            <div className={Style.DropZone_box_aside_box_preview}>
              <div className={Style.DropZone_box_aside_box_preview_one}>
                <p>
                  <samp>NFT Name:</samp>
                  {name || ""}
                </p>
                <p>
                  <samp>Website:</samp>
                  {website || ""}
                </p>
              </div>

              <div className={Style.DropZone_box_aside_box_preview_two}>
                <p>
                  <span>Description</span>
                  {description || ""}
                </p>
              </div>

              <div className={Style.DropZone_box_aside_box_preview_three}>
                <p>
                  <span>Royalties</span>
                  {royalties || ""}
                </p>
                <p>
                  <span>FileSize</span>
                  {fileSize || ""}
                </p>
                <p>
                  <span>Properties</span>
                  {properties || ""}
                </p>
                <p>
                  <span>Category</span>
                  {category || ""}
                </p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default DropZone;
