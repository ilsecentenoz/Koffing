/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Footer from "./footer";
import Form from "./form";
import Img1 from "../images/img1.svg";
import Logo from "../images/logo-venis-black.svg";

const Layout = ({}) => {
  return (
    <>
      <section className="layout">
        <header>
          <img className="logo" src={Logo} alt="Logo" />
        </header>
        <div className="grid">
          <div className="contentText">
            <h1>Repair your face with the best Skincare treatment</h1>
            <img src={Img1} />
            <h2>
              The best deal, accompanied by the best products on the market.
            </h2>
          </div>
          <Form />
        </div>
        <Footer />
      </section>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
