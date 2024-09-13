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
import { client } from "../../utils/request";
const { Search } = Input;
const { RangePicker } = DatePicker;
const moment = require("moment");

import { useEffect, useState } from "react";
import { getFiltersURLOptions } from "../common/utils";
import FiltersAndExport from "./filtersAndExport";

const OrdersList = ({ handleViewOrder }) => {
  const [total, setTotal] = useState(0);
  const [orders, setOrders] = useState([]);

  const pageSize = 10;

  const columns = [
    // {
    //   title: "Order Id",
    //   dataIndex: "orderId",
    //   key: "orderId",
    //   render: (text) => <a>{text}</a>,
    // },

    {
      title: "SNP",
      dataIndex: "Seller",
      key: "snp",
      render: (item) => item.name,
    },
    {
      title: "SNP Type",
      dataIndex: "snpType",
      key: "snp",
    },
    {
      title: "Collection",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "Receivable",
      dataIndex: "bff",
      key: "bff",
    },
    {
      title: "Payable",
      dataIndex: "finalValue",
      key: "finalValue",
    },

    // {
    //   title: "Currency",
    //   dataIndex: "currency",
    //   key: "currency",
    // },

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



    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a
    //         onClick={() => {
    //           console.log(record.id);
    //           handleViewOrder(record.id);
    //         }}
    //       >
    //         View
    //       </a>
    //     </Space>
    //   ),
    // },
  ];

  const getOrders = (offset, limit, filters) => {
    let filter_str = getFiltersURLOptions(filters);
    client
      .get(`/api/orders?offset=${offset}&limit=${limit}${filter_str}`, {})
      .then((response) => {
        const api_response = response.data;
        let orders = api_response?.count > 0 ? api_response.rows : [];
        console.log(api_response);
        setOrders([...orders]);
        if (offset === 0) {
          setTotal(api_response.count);
        }
      });
  };

  useEffect(() => {
    getOrders(0, pageSize);
  }, []);

  const onTableChange = (pagination, filters, sorter) => {
    const offset =
      pagination.current * pagination.pageSize - pagination.pageSize;
    getOrders(offset, pageSize);
  };

  const exportToFile = (filters) => {
    let filter_str = getFiltersURLOptions(filters);
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/financials/donwload/xlsx${filter_str?`?${filter_str}`:""}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <h2 className="pt-10 pl-10 text-3xl">Financials</h2>
      <FiltersAndExport
        onApplyFilters={(filters) => getOrders(0, pageSize, filters)}
        onExport={(filters) => exportToFile(filters)}
      />
      {/* <div
        className="mx-10"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {renderSellerFilter()}
          {renderDatePicker()}
          <Button type="primary" onClick={console.log("export clicked")}>
            Apply filters
          </Button>
          <Button type="primary" onClick={console.log("export clicked")}>
            Reset filters
          </Button>
        </div>
        <Button type="primary" onClick={console.log("export clicked")}>
          Export
        </Button>
      </div> */}
      <div className="m-10">
        <Table
          columns={columns}
          dataSource={orders}
          onChange={onTableChange}
          pagination={{
            pageSize: pageSize,
            total: total,
          }}
        />
      </div>
    </>
  );
};

export default OrdersList;
