import React from "react";
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Header from "./Header";

//children are all the pages here even index page
function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />

          {children}
        </main>
      </div>
    </>
  );
}

export default Layout;
