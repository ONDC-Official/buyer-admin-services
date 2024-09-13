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
import FiltersAndExport from "./filtersAndExport";

const OrdersList = ({ handleViewOrder }) => {
  const [total, setTotal] = useState(0);
  const [orders, setOrders] = useState([]);

  const pageSize = 10;

  const columns = [
    {
      title: "Order Id",
      dataIndex: "orderId",
      key: "orderId",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Creation Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => new Date(text).toLocaleDateString()
    },
    // {
    //   title: "Buyer",
    //   dataIndex: "Buyer",
    //   key: "buyer",
    // },
    {
      title: "Seller",
      dataIndex: "Seller",
      key: "seller",
      render: (item) => item.name,
    },
    // {
    //   title: "SNP",
    //   dataIndex: "Seller",
    //   key: "snp",
    //   render: (item) => item.name,
    // },
    // {
    //   title: "SNP Type",
    //   dataIndex: "snpType",
    //   key: "snp",
    // },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Domain",
      dataIndex: "domain",
      key: "domain",
    },
    // {
    //   title: "Category",
    //   dataIndex: "category",
    //   key: "category",
    // },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "payment Type",
      dataIndex: "paymentType",
      key: "paymentType",
    },
    {
      title: "Order status",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Payment status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
    },
    {
      title: "Cancelled By",
      dataIndex: "cancelledBy",
      key: "cancelledBy",
    },
    {
      title: "Cancel Reason Code",
      dataIndex: "cancelReasonCode",
      key: "cancelReasonCode",
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


  const getFiltersURLOptions = (filters) => {
    let filter_str = "";

    if (filters) {
      if (filters.dateFilter) {
        filter_str = filter_str + "&dateRange=" + filters.dateFilter;
      }
      if (filters.city) {
        filter_str = filter_str + "&city=" + filters.city;
      }
      if (filters.seller) {
        filter_str = filter_str + "&SellerId=" + filters.seller;
      }
      if (filters.category) {
        filter_str = filter_str + "&category=" + filters.category;
      }
      if (filters.status) {
        filter_str = filter_str + "&state=" + filters.status;
      }

    }
    return filter_str;
  };


  const exportToFile = (filters) => {
    let filter_str = getFiltersURLOptions(filters);
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/orders/download/xlsx${filter_str?`?${filter_str}`:""}`;
    window.open(url, "_blank");
    // client
    //   .get(`/api/orders/download/xlsx?${filter_str}`, {})
    //   // .then((response) => {
    //   //   console.log(response)
    //   // });
    //   .then(response => new Blob([response.data]))
    //     .then(blob => {
    //       var url = window.URL.createObjectURL(blob);
    //       var a = document.createElement('a');
    //       a.href = url;
    //       a.setAttribute('download', `orders.xlsx`);
    //       document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
    //       a.click();
    //       a.remove();  //afterwards we remove the element again
    //     });
  };

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
  }

  useEffect(() => {
    getOrders(0, pageSize);
  }, []);

  const onTableChange = (pagination, filters, sorter) => {
    const offset =
      pagination.current * pagination.pageSize - pagination.pageSize;
    getOrders(offset, pageSize);
  };

  return (
    <>
      <h2 className="pt-10 pl-10 text-3xl">Orders</h2>
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
