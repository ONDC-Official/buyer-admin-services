import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const SiteFooter = (props) => {
  return (
    <Footer className="footer">
      ©{new Date().getFullYear()} Created by ONDC
    </Footer>
  );
};

export default SiteFooter;
