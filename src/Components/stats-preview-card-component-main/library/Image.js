import React from "react";
import StyleImage from "./StyleImage";
import DesktopImage from "./DesktopImage.jpg";

const Image = () => {
  return (
    <StyleImage>
      <img src={DesktopImage} alt="/"   width="100%" height="auto"/>
    </StyleImage>
  );
};

export default Image;
