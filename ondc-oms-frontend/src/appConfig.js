import React from "react";

import {
  FileExclamationOutlined, MoneyCollectOutlined, BarChartOutlined, AppstoreOutlined, OrderedListOutlined,
  ReadOutlined, GlobalOutlined, ClusterOutlined, BorderOutlined, ShoppingCartOutlined
} from '@ant-design/icons';
import { FaUsers } from 'react-icons/fa';
import { AiFillAppstore } from 'react-icons/ai'
import {IoMdChatboxes, IoMdSettings, IoMdNotificationsOutline } from 'react-icons/io'
import {CgProfile} from "react-icons/cg"
import Router from "next/router";
import Financials from "./components/financials";


const appConfigs = {
  LOGO_URL: "/",
  COMPANY_NAME: "ONDC OMS",
  HEADER_MENU_OPTIONS: {
  },
  SIDER_MENU_OPTIONS: {
    DASHBOARD: {
      key: "dashboard",
      label: "Dashboard",
      link: "/dashboard/",
      icon: <BarChartOutlined style={{ fontSize: '180%'}}/>,
      onClick: (() => Router.push('/dashboard')),
      head_tag: `About | ${process.env.NEXT_PUBLIC_PROJECT_NAME}`,
    },
    OREDERS: {
      key: "orders",
      label: "Orders",
      link: "/orders/",
      icon: <ShoppingCartOutlined style={{ fontSize: '180%'}}/>,
      head_tag: `About | ${process.env.NEXT_PUBLIC_PROJECT_NAME}`,
      onClick: (() => Router.push('/orders'))
      //onItemClick: ({router}) => navigate(router, "/about/"),
    },
    Financials: {
      key: "financials",
      label: "Financials",
      link: "/financials/",
      icon: <MoneyCollectOutlined style={{ fontSize: '180%'}}/>,
      head_tag: `About | ${process.env.NEXT_PUBLIC_PROJECT_NAME}`,
      onClick: (() => Router.push('/financials'))
      //onItemClick: ({router}) => navigate(router, "/about/"),
    },
    SELLERS: {
      key: "sellers",
      label: "Sellers",
      link: "/sellers/",
      icon: <AppstoreOutlined style={{ fontSize: '180%'}}/>,
      head_tag: `About | ${process.env.NEXT_PUBLIC_PROJECT_NAME}`,
      onClick: (() => Router.push('/sellers'))
      //onItemClick: ({router}) => navigate(router, "/about/"),
    },
    ISSUES: {
      key: "issues",
      label: "Issues",
      link: "/issues/",
      icon: <FileExclamationOutlined style={{ fontSize: '180%'}}/>,
      head_tag: `About | ${process.env.NEXT_PUBLIC_PROJECT_NAME}`,
      onClick: (() => Router.push('/issues'))
      //onItemClick: ({router}) => navigate(router, "/about/"),
    },
    CATALOGS: {
      key: "Catalogs",
      label: "Catalogs",
      icon: <ReadOutlined  style={{ fontSize: '180%'}}/>,
      head_tag: `About | ${process.env.NEXT_PUBLIC_PROJECT_NAME}`,
      children: [
        {
          key: 'catalogs-sellers',
          label: 'Sellers',
          icon: <GlobalOutlined style={{ fontSize: '180%'}}/>,
          onClick: (() => Router.push('/catalogs/sellers'))
        },
        {
          key: 'providers',
          label: 'Providers',
          icon: <ClusterOutlined style={{ fontSize: '180%'}}/>,
          onClick: (() => Router.push('/catalogs/providers'))
        },

        {
          key: 'items',
          label: 'Items',
          icon: <BorderOutlined style={{ fontSize: '180%'}}/>,
          onClick: (() => Router.push('/catalogs/items'))
        },
      ]
    }
  },
  AUTH: {
    providers: ["basic_auth"],
    ssoRedirectUrl: "",
    showForgotPassword: true,
    showSignup: true,
    successRedirectUri: "/dashboard"
  }
};


export default appConfigs;
