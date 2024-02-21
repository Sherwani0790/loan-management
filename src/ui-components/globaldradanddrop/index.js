import React, { useState } from "react";
//Styles
import styles from "./globaldradanddrop.module.css";
//ReactDrag&drop
import { useDropzone } from "react-dropzone";
//React Icons
import { FiUploadCloud } from "react-icons/fi";
const GlobalDradandDrop = (props) => {
  const { extension, text } = props;
  const [selectedImage, setSelectedImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    // Assuming you want to handle only one image
    const imageFile = acceptedFiles[0];
    setSelectedImage(URL.createObjectURL(imageFile));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });
  return (
    <>
      <div {...getRootProps()} className={styles.dropzone}>
        <div className={styles.uploadicon}>
          <FiUploadCloud className={styles.cloudupload_icon} />
        </div>
        <input {...getInputProps()} />
        <p className={styles.dragdrop_text}>
          <b>{text}</b>
        </p>
        <p className={styles.extension_Upload}>{extension}</p>
      </div>
      {/* {selectedImage && (
            <>
              <div className="preview">
                <img src={selectedImage} alt="Uploaded" />
              </div>
            </>
          )} */}
    </>
  );
};

export default GlobalDradandDrop;
