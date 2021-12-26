import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

function Layout({ children }) {
  return (
    <div className="app">
      <Header></Header>
      <Content>{children}</Content>
      <Footer></Footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
