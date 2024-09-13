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
} from "antd";
import { client } from "../../../utils/request";
const { Search } = Input;
const { RangePicker } = DatePicker;
const moment = require("moment");

import { useEffect, useState } from "react";
import FiltersAndExport from "./filtersAndExport";
import { EditOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { flagTag } from "../common/util";

const ProvidersList = ({ handleViewProvider, sellerID }) => {
  const pagination_default_value = { page: 0, afterKeys: [""], lastPage: -1 };
  const [pagination, setPagination] = useState({ ...pagination_default_value });

  const [total, setTotal] = useState(0);
  const [providers, setProviders] = useState([]);
  const [category, setCategory] = useState();
  const [filters, setFilters] = useState({});

  const pageSize = 10;

  const router = useRouter();

  const redirectToDestination = (id) => {
    router.push({
      pathname: "/catalogs/items",
      query: { providerID: id },
    });
  };
  const columns = [
    {
      title: "Image",
      dataIndex: "provider_details",
      key: "image",
      width: "10%",
      render: (item) => (
        <img alt="Item" src={item.descriptor.symbol} height={50} width={50} />
      ),
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "provider_details",
      key: "provider_details.descriptor.name",
      width: "200",
      render: (provider) => provider.descriptor.name,
    },
    {
      title: "Seller",
      dataIndex: "seller_name",
      key: "seller_app",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      width: "10%",
    },
    {
      title: "Location Id",
      dataIndex: "location_details",
      key: "location_id",
      render: (location) => location?.local_id,
    },
    {
      title: "No Of Items",
      dataIndex: "item_count",
      key: "item_count",
      render: (text, obj) => (
        <a onClick={() => redirectToDestination(obj.provider_details.id)}>
          {text}
        </a>
      ),
    },
    {
      title: "No Of items flagged",
      dataIndex: "flagged_item_count",
      key: "flagged_item_count",
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
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              console.log(record.id);
              handleViewProvider(record.provider_details);
            }}
          >
            <EditOutlined />
          </a>
        </Space>
      ),
    },
  ];

  const data = {
    count: 512,
    data: [
      {
        id: "api.greenreceipt.in_ONDC:RET10_24934",
        time: {
          label: "enable",
          timestamp: "2024-07-02T06:00:16.491Z",
        },
        descriptor: {
          name: "Suresh SuperMarket",
          symbol: "https://greenreceipt.in/images/logos/24930.png",
          short_desc: "Suresh SuperMarket",
          long_desc: "Suresh SuperMarket",
          images: ["https://greenreceipt.in/images/logos/24930.png"],
        },
        ttl: "P1D",
        tags: [
          {
            code: "serviceability",
            list: [
              {
                code: "location",
                value: "24934",
              },
              {
                code: "category",
                value: "Beverages",
              },
              {
                code: "type",
                value: "12",
              },
              {
                code: "val",
                value: "IND",
              },
              {
                code: "unit",
                value: "country",
              },
            ],
          },
          {
            code: "serviceability",
            list: [
              {
                code: "location",
                value: "24934",
              },
              {
                code: "category",
                value: "Cleaning & Household",
              },
              {
                code: "type",
                value: "12",
              },
              {
                code: "val",
                value: "IND",
              },
              {
                code: "unit",
                value: "country",
              },
            ],
          },
          {
            code: "serviceability",
            list: [
              {
                code: "location",
                value: "24934",
              },
              {
                code: "category",
                value: "Foodgrains",
              },
              {
                code: "type",
                value: "12",
              },
              {
                code: "val",
                value: "IND",
              },
              {
                code: "unit",
                value: "country",
              },
            ],
          },
          {
            code: "serviceability",
            list: [
              {
                code: "location",
                value: "24934",
              },
              {
                code: "category",
                value: "Masala & Seasoning",
              },
              {
                code: "type",
                value: "12",
              },
              {
                code: "val",
                value: "IND",
              },
              {
                code: "unit",
                value: "country",
              },
            ],
          },
          {
            code: "timing",
            list: [
              {
                code: "type",
                value: "All",
              },
              {
                code: "location",
                value: "24934",
              },
              {
                code: "day_from",
                value: "1",
              },
              {
                code: "day_to",
                value: "7",
              },
              {
                code: "time_from",
                value: "0001",
              },
              {
                code: "time_to",
                value: "2359",
              },
            ],
          },
        ],
        local_id: "24934",
        categories: [
          "Beverages",
          "Foodgrains",
          "Cleaning & Household",
          "Masala & Seasoning",
        ],
      },
    ],
  };

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

  const getProviders1 = (offset, limit, filters) => {
    let filter_str = getFiltersURLOptions(filters);
    let url = `/api/list-providers?limit=10`;
    if (sellerID) {
      url = url + `&bpp_id=${sellerID}`;
    }
    client.get(`${url}${filter_str}`, {}).then((response) => {
      const api_response = response.data.response;
      let providers = api_response?.count > 0 ? api_response.data : [];
      console.log(api_response);
      console.log(providers);
      setProviders([...providers]);
      if (offset === 0) {
        setTotal(api_response.count);
      }
    });
  };

  const getProviders = (mode) => {
    let filter_str = getFiltersURLOptions(filters);
    let old_page = pagination.page;
    let after_keys = pagination.afterKeys;
    let index = mode === "f" ? old_page : old_page - 2;
    console.log("using index", index);
    let after_key = after_keys[index] || "";

    let url = `/api/list-providers?limit=10&afterKey=${after_key}`;
    if (sellerID) {
      url = url + `&bpp_id=${sellerID}`;
    }

    client.get(`${url}${filter_str}`, {}).then((response) => {
      console.log(response);
      const api_response = response.data.response;

      console.log(api_response);
      if (mode === "f") {
        // console.log("in forrward mode update keys");`
        setPagination((old_page) => {
          let old_after_keys = old_page.afterKeys;
          let last_page = Math.ceil(api_response.count / 10);
          // Intially useEffect gets called twice and to avoid duplicate after keys , following is the logic
          if (
            old_after_keys.length === 2 &&
            old_after_keys[old_after_keys.length - 1] === api_response.afterKey
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

      let providers = api_response?.count > 0 ? api_response.data : [];
      console.log(api_response);
      console.log(providers);
      setProviders([...providers]);
      setTotal(api_response.count);
    });
  };

  useEffect(() => {
    setPagination({ ...pagination_default_value });
  }, [filters]);

  useEffect(() => {
    if (pagination.page === 0) {
      getProviders("f");
    }
  }, [pagination.page]);

  const onTableChange = (pagination, filters, sorter) => {
    const offset =
      pagination.current * pagination.pageSize - pagination.pageSize;
    getProviders(offset, pageSize);
  };

  const exportToFile = (filters) => {
    let filter_str = getFiltersURLOptions(filters);
    const url = `${
      process.env.NEXT_PUBLIC_API_BASE_URL
    }/api/financials/donwload/xlsx${filter_str ? `?${filter_str}` : ""}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <h2 className="pt-10 pl-10 text-3xl">Providers</h2>
      <FiltersAndExport
        onApplyFilters={(filters) => setFilters(filters)}
        category={category}
        setCategory={setCategory}
        sellerID={sellerID}
      />
      <div className="m-10">
        <Table
          columns={columns}
          dataSource={providers}
          tableLayout="fixed"
          onChange={onTableChange}
          pagination={false}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "10px",
        }}
      >
        <Button
          onClick={() => getProviders("b")}
          disabled={pagination.page === 1}
        >
          <b>{"< Previous"}</b>
        </Button>
        <span style={{ padding: "5px 7px" }}>
          Page{" " + pagination.page + " "} of {" " + pagination.lastPage}
        </span>
        <Button
          onClick={() => getProviders("f")}
          disabled={pagination.page === pagination.lastPage}
        >
          <b>{"Next >"}</b>
        </Button>
      </div>
    </>
  );
};

export default ProvidersList;
