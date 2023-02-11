import React from "react";
import classes from "./Sidebar.module.css";
import Card from "../UI/Card";

const Sidebar = () => {
  return (
    <div className={classes.sidebar__container}>
      <ul className={classes.sidebar}>
        <li>
          <a className={classes.sidebar__li} href="/">
            Feed
          </a>
        </li>
        <li>
          <a className={classes.sidebar__li} href="/">
            Trending
          </a>
        </li>
        <li>
          <a className={classes.sidebar__li} href="/">
            Account
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
