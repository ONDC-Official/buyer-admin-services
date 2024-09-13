import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Layout, Menu } from "antd";
import SiteHeader from "./SiteHeader.js";
import SiteFooter from "./SiteFooter.js";

import SiteContent from "./SiteContent.js";

export default function AppLayout(props) {
  const [headTag, setHeadTag] = React.useState(
    process.env.NEXT_PUBLIC_PROJECT_NAME
  );

  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      <Head>
        <title>{headTag}</title>
        <meta
          name="description"
          content={process.env.NEXT_PUBLIC_PROJECT_DESCRIPTION}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteHeader />
      <SiteContent props={props}/>
      <SiteFooter />
    </Layout>
  );
}
