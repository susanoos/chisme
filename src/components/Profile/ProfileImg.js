import React from "react";
import classes from "./ProfileImg.module.css";

const ProfileImg = (props) => {
  return (
    <img
      className={classes.img}
      alt="default-profile-pic"
      src={require("./default.png")}
    />
  );
};

export default ProfileImg;
