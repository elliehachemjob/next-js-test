import React from "react";
import headerStyles from "../styles/Header.module.css";

function Header() {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>header1</span> header2
      </h1>
      <p className={headerStyles.description}>next js test description</p>
    </div>
  );
}

export default Header;
