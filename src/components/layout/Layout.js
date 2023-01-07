import React from "react";
import styles from "./Layout.module.scss";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
