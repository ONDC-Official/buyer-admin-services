import React from "react";
import {
  isLoggedIn,
  clearUserSessionInfoLocalStorage,
} from "../../utils/request.js";
import { Breadcrumb, Layout, Menu, Affix, Col, Row } from "antd";
import appConfigs from "../../appConfig.js";
import { useRouter } from "next/router";

const { Header } = Layout;

const SiteHeader = (props) => {
  const router = useRouter();

  const [headerOptions, setHeaderOptions] = React.useState(
    appConfigs?.HEADER_MENU_OPTIONS
  );

  const getAuthItems = () => {
    if (isLoggedIn()) {
      return {
        logout: {
          key: "logout",
          label: "Logout",
          link: "/logout/",
          onClick: () => {
            localStorage.removeItem("omsToken");
            router.push("/login/");
          },
        },
      };
    }
    return {};
  };

  React.useEffect(() => {
    setHeaderOptions({ ...headerOptions, ...getAuthItems() });
  }, []);

  const onHeaderOptionClick = ({ item, key }) => {
    if (headerOptions[key]) {
      const optionDetails = headerOptions[key];
      optionDetails?.onItemClick
        ? optionDetails?.onItemClick({ item, router })
        : null;
      //setHeadTag(optionDetails?.head_tag);
    }
  };

  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: 'rgb(75 146 231)',
  };

  const header = () => {
    return (
      <Affix>
        <Header className="logout" style={headerStyle}>
          <Row style={{ height: "100%" }} justify="space-between">
            <Col sm={6} xs={18} style={{ height: "100%" }}>
              <Row gutter={[24, 16]} style={{ height: "100%" }}>
                <Col style={{ height: "100%" }}>
                  {/* <div className="logo">
                    <img src={appConfigs?.LOGO_URL} />
                  </div> */}
                </Col>
                <Col>
                  <span className="company-name">
                    {appConfigs?.COMPANY_NAME}
                  </span>
                </Col>
              </Row>
            </Col>
            <Col sm={{ span: 2 }} xs={2} style={{ height: "99%" }}>
                <Menu
                  style={{  color: '#fff',  backgroundColor: 'rgb(75 146 231)', }}
                  // theme="dark"
                  mode="horizontal"
                  items={Object.values(headerOptions)}
                  onClick={onHeaderOptionClick}
                />

            </Col>
          </Row>
        </Header>
      </Affix>
    );
  };

  if (isLoggedIn()) {
    return header();
  }
  return <></>

};

export default SiteHeader;
