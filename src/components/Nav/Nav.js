import React from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.navbar}>
      <h1 className={classes.nav__header}>Chisme 🍵</h1>
      <div>
        <ul className={classes.nav__links}>
          <li>
            <a href="/">Feed</a>
          </li>{" "}
          <li>
            <a href="/">Account</a>
          </li>{" "}
          <li>
            <a href="/">Settings</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
