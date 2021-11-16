import React from "react";
import headerStyles from "../styles/Header.module.css";

function Header() {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>span2</span> span2
      </h1>
      <p className={headerStyles.description}>Keep it up</p>
    </div>
  );
}

export default Header;
