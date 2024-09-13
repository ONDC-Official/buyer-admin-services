import { Space, Table, Tag, Button, Input } from "antd";
const { Search } = Input;
import { client } from "../../../utils/request";

import { useEffect, useState } from "react";
import FiltersAndExport from "./filtersAndExport";
import { EditOutlined } from "@ant-design/icons";
import { flagTag } from "../common/util";

const ItemsList = ({ handleViewItem, providerID }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const pageSize = 10;
  const [filters, setFilters] = useState({});

  console.log("providerID", providerID);

  const columns = [
    {
      title: "Image",
      dataIndex: "item_details",
      key: "image",
      width: "10%",
      render: (item) => (
        <img alt="Item" src={item.descriptor.symbol} height={50} width={50} />
      ),
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "item_name",
      key: "item_name",
      width: "15%",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Provider",
      dataIndex: "provider_name",
      key: "provider_name",
    },
    {
      title: "Seller",
      dataIndex: "seller_name",
      key: "seller_app",
      width: "10%",
    },
    {
      title: "Category",
      dataIndex: "item_details",
      key: "category",
      render: (item) => item.category_id,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (v) => <span style={{ textTransform: "capitalize" }}>{v}</span>,
    },
    {
      title: "customization",
      dataIndex: "customisation",
      key: "customisation",
      render: (v) => <span>{v ? "Yes" : "No"}</span>,
      // render: (item) => <span>{has_customization(item.tags)}</span>,
    },
    {
      title: "Variant",
      dataIndex: "variant",
      key: "variant",
      render: (v) => <span>{v ? "Yes" : "No"}</span>,
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
              handleViewItem(record.item_id);
            }}
          >
            <EditOutlined />
          </a>
        </Space>
      ),
    },
  ];

  const has_customization = (tags) => {
    console.log(tags);
    let is_customization = "No";
    tags.forEach((tag) => {
      if (tag.code === "custom_group") {
        is_customization = tag.list.length > 0 ? "Yes" : "No";
      }
    });
    console.log("is_customization", is_customization);
    return is_customization;
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

  const getItems = (pageNumber, limit) => {
    let filter_str = getFiltersURLOptions(filters);
    let url = `/api/list-items?pageNumber=${pageNumber}&limit=${limit}`;
    if (providerID) {
      url = url + `&provider=${providerID}`;
    }
    client.get(`${url}${filter_str}`, {}).then((response) => {
      const api_response = response.data.response;
      let items = api_response?.count > 0 ? api_response.data : [];
      console.log(api_response);
      setTotal(api_response.count);
      setItems([...items]);
      // if (offset === 0) {
      //   setTotal(api_response.count);
      // }
    });
  };

  useEffect(() => {
    getItems(1, pageSize);
  }, [filters]);

  const onTableChange = (pagination, filters, sorter) => {
    getItems(pagination.current, pageSize);
  };

  return (
    <>
      <h2 className="pt-10 pl-10 text-3xl">Items</h2>
      <FiltersAndExport
        providerID={providerID}
        onApplyFilters={(filters) => setFilters(filters)}
      />
      <div className="m-10">
        <Table
          tableLayout="fixed"
          columns={columns}
          dataSource={items}
          onChange={onTableChange}
          pagination={{ pageSize: pageSize, total: total }}
        />
      </div>
    </>
  );
};

export default ItemsList;
