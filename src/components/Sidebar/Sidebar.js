import React from "react";
import classes from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowTrendUp,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../UI/Card";

const Sidebar = () => {
  return (
    <div className={classes.sidebar__container}>
      <ul className={classes.sidebar}>
        <li>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.icons} />
          <label>Search</label>
          <input className={classes.sidebar__search} type="text"></input>
        </li>
        <li>
          <a className={classes.sidebar__li} href="/">
            <FontAwesomeIcon icon={faNewspaper} className={classes.icons} />
            Feed
          </a>
        </li>
        <li>
          <a className={classes.sidebar__li} href="/">
            <FontAwesomeIcon icon={faArrowTrendUp} className={classes.icons} />
            Trending
          </a>
        </li>
        <li>
          <a className={classes.sidebar__li} href="/">
            <FontAwesomeIcon icon={faUser} className={classes.icons} />
            Account
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
