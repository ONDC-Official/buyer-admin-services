import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import appConfigs from "../../appConfig.js";
import { isLoggedIn } from "../../utils/request.js";
const { Content, Sider } = Layout;

export default function SiteContent({ props }) {
  let sider_options = appConfigs?.SIDER_MENU_OPTIONS;
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, [])

  const content = () => {
    return (
      <Content
        style={{
          padding: "0",
        }}
        className="site-layout-content"
      >
        {props?.children}
      </Content>
    );
  };
  const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#183a7b',
    backgroundColor: 'rgb(194 222 251)',
  };

  const sider_and_content = () => {
    return (
      <div className="layout2">
        <Layout >
          <Sider style = {siderStyle}>
            <div
              style={{
                margin: 6,
                background: "red",
              }}
            />
            <Menu
              style = {siderStyle}
              mode="inline"
              defaultSelectedKeys={["4"]}
              items={Object.values(sider_options)}
            />
          </Sider>
          {content()}
        </Layout>
      </div>
    );
  };

  if (isLoggedIn()) {
    return sider_and_content();
  } else {
    return content();
  }
}
