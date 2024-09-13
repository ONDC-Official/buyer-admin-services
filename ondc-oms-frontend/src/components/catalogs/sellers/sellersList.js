import {
  Space,
  Table,
  Tag,
  Button,
  Input,
  DatePicker,
  Select,
  Row,
  Col,
  Pagination,
} from "antd";
import { client } from "../../../utils/request";
const { Search } = Input;
const { RangePicker } = DatePicker;
const moment = require("moment");
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import { getFiltersURLOptions } from "../../common/utils";
import FiltersAndExport from "./filtersAndExport";
import { EditOutlined } from "@ant-design/icons";
import { flagTag } from "../common/util";

const SellersList = ({ handleViewSeller }) => {
  const pagination_default_value = { page: 0, afterKeys: [""], lastPage: -1 };
  const [total, setTotal] = useState(0);
  const [sellers, setSellers] = useState([]);
  const [category, setCategory] = useState();
  const [pagination, setPagination] = useState({ ...pagination_default_value });
  const [filters, setFilters] = useState({});

  const pageSize = 10;
  const router = useRouter();

  const redirectToDestination = (id) => {
    router.push({
      pathname: "/catalogs/providers",
      query: { sellerID: id },
    });
  };

  const columns = [
    {
      title: "Seller Id",
      dataIndex: "bpp_id",
      key: "bpp_id",
      render: (text) => (
        <a onClick={() => redirectToDestination(text)}>{text}</a>
      ),
    },

    {
      title: "Name",
      dataIndex: "seller_name",
      key: "snp",
      // render: (item) => item.name,
    },
    {
      title: "No Of providers",
      dataIndex: "provider_count",
      key: "provider_count",
    },
    {
      title: "No Of providers Flagged",
      dataIndex: "flagged_providers_count",
      key: "flagged_providers_count",
    },
    {
      title: "No Of Items",
      dataIndex: "item_count",
      key: "item_count",
    },
    {
      title: "No Of items flagged",
      dataIndex: "flagged_items_count",
      key: "flagged_items_count",
    },
    {
      title: "Auto Status",
      dataIndex: "auto_flag",
      key: "auto_flag",
      render: (v) => flagTag(v),
    },
    {
      title: "Manual Status",
      dataIndex: "manual_flag",
      key: "manual_flag",
      render: (v) => flagTag(v),
    },
    {
      title: "Status",
      dataIndex: "flag",
      key: "flag",
      render: (v) => flagTag(v),
    },

    // {
    //   title: "BFF",
    //   dataIndex: "bff",
    //   key: "bff",
    // },
    // {
    //   title: "collected By",
    //   dataIndex: "collectedBy",
    //   key: "collectedBy",
    // },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              console.log(record.id);
              // handleViewSeller(record.id);
              handleViewSeller(record);
            }}
          >
            <EditOutlined />
          </a>
        </Space>
      ),
    },
  ];

  const getFiltersURLOptions = (filters) => {
    console.log(filters);
    let filter_str = "";

    if (filters) {
      Object.keys(filters).forEach((key) => {
        if (filters[key] !== undefined) {
          filter_str = filter_str + "&" + key + "=" + filters[key];
        }
      });
    }
    return filter_str;
  };

  const getSellers = (mode) => {
    let filter_str = getFiltersURLOptions(filters);
    let old_page = pagination.page;
    let after_keys = pagination.afterKeys;
    let index = mode === "f" ? old_page : old_page - 2;
    console.log("using index", index);
    let after_key = after_keys[index] || "";
    client
      .get(
        `/api/list-sellers?afterKey=${after_key}&${filter_str}&domain=${
          category || ""
        }`,
        {}
      )
      .then((response) => {
        console.log(response);
        const api_response = response.data;

        console.log(api_response);
        if (mode === "f") {
          // console.log("in forrward mode update keys");
          setPagination((old_page) => {
            let old_after_keys = old_page.afterKeys;
            let last_page = Math.ceil(api_response.count / 10);
            // Intially useEffect gets called twice and to avoid duplicate after keys , following is the logic
            if (
              old_after_keys.length === 2 &&
              old_after_keys[old_after_keys.length - 1] ===
                api_response.afterKey
            ) {
              return old_page;
            }
            let new_page = old_page.page + 1;
            // If we already have afterKey of the page in the afterKeys array, then don;t add it
            // this happens when user does next next and comes back to prev pages
            let new_after_keys =
              old_after_keys.length > new_page
                ? [...old_after_keys]
                : [...old_page.afterKeys, api_response.afterKey];

            return {
              page: new_page,
              afterKeys: new_after_keys,
              lastPage: last_page,
            };
          });
        } else {
          // console.log("in backward mode update keys");
          setPagination((old_page) => {
            // if(old_page.afterKeys[old_page.afterKeys.length - 1] === api_response.afterKey) {
            //   return old_page
            // }
            return {
              ...old_page,
              page: old_page.page - 1,
              afterKeys: [...old_page.afterKeys],
            };
          });
        }

        let sellers = api_response?.count > 0 ? api_response.sellers : [];
        console.log(sellers);
        setSellers([...sellers]);
        setTotal(api_response.count);
      });
  };

  useEffect(() => {
    setPagination({ ...pagination_default_value });
  }, [category, filters]);

  useEffect(() => {
    if (pagination.page === 0) {
      getSellers("f");
    }
  }, [pagination.page]);

  const onTableChange = (pagination, filters, sorter) => {
    // const offset =
    //   pagination.current * pagination.pageSize - pagination.pageSize;
    // getSellers(offset, pageSize);
  };

  const exportToFile = (filters) => {
    let filter_str = getFiltersURLOptions(filters);
    const url = `${
      process.env.NEXT_PUBLIC_API_BASE_URL
    }/api/financials/donwload/xlsx${filter_str ? `?${filter_str}` : ""}`;
    window.open(url, "_blank");
  };

  const itemRender = (page, type, originalElement) => {
    if (type === "prev") {
      return <button>Previous</button>;
    }
    if (type === "next") {
      return <button>Next</button>;
    }
    return null; // Return null for other items (e.g., page numbers)
  };

  console.log("pagination", pagination);

  return (
    <>
      <h2 className="pt-10 pl-10 text-3xl">Sellers</h2>
      <FiltersAndExport
        onApplyFilters={(filters) => setFilters(filters)}
        category={category}
        setCategory={setCategory}
      />
      <div className="m-10">
        <Table columns={columns} dataSource={sellers} pagination={false} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "10px",
        }}
      >
        <Button
          onClick={() => getSellers("b")}
          disabled={pagination.page === 1}
        >
          <b>{"< Previous"}</b>
        </Button>
        <span style={{ padding: "5px 7px" }}>
          Page{" " + pagination.page + " "} of {" " + pagination.lastPage}
        </span>
        <Button
          onClick={() => getSellers("f")}
          disabled={pagination.page === pagination.lastPage}
        >
          <b>{"Next >"}</b>
        </Button>
      </div>
    </>
  );
};

export default SellersList;
