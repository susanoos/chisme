import React from "react";
import classes from "./Nav.module.css";
import ProfileImg from "../Profile/ProfileImg";

const Nav = ({ onLogout }) => {
  return (
    <nav className={classes.navbar}>
      <h1 className={classes.nav__header}>Chisme 🍵</h1>
      <div>
        <ul className={classes.nav__links}>
          <li>Work in progress...</li>
          <li>
            <ProfileImg />
          </li>
          <li>
            <button
              className={classes.nav__btn}
              onClick={() => onLogout(false)}
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
