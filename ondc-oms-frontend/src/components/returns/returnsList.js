import { Space, Table, Tag, Button, Input } from "antd";
const { Search } = Input;

import { useEffect, useState } from "react";
import FiltersAndExport from "../common/filtersAndExport";
import { getFiltersURLOptions } from "../common/utils";
import { client } from "../../utils/request";

const ReturnOrdersList = ({ handleViewReturnOrder }) => {
  const [returns, setReturns] = useState([]);
  const [total, setTotal] = useState(0);
  const pageSize = 10;

  const columns = [
    {
      title: "Return Id",
      dataIndex: "returnId",
      key: "returnId",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Order Id",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Reason",
      dataIndex: "reason",
      key: "reason",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              console.log(record.id);
              handleViewReturnOrder(record.id);
            }}
          >
            View
          </a>
        </Space>
      ),
    },
  ];

  const api_response = {
    count: 1,
    rows: [
      {
        id: "599f5e60-1376-11ef-9689-5b1f5f2f2e76",
        returnId: "2424",
        amount: "500.25",
        reason: "My Wish",
        orderId: "762ecd80-1368-11ef-9319-4b5a24afb168",
        createdAt: "2024-05-16T11:20:50.247Z",
        updatedAt: "2024-05-16T11:20:50.247Z",
      },
    ],
  };

  const getReturns = (offset, limit, filters) => {
    let filter_str = getFiltersURLOptions(filters);
    client
      .get(`/api/return?offset=${offset}&limit=${limit}${filter_str}`, {})
      .then((response) => {
        const api_response = response.data;
        let returns = api_response?.count > 0 ? api_response.rows : [];
        console.log(api_response);
        setReturns([...returns]);
        if (total === 0) {
          setTotal(api_response.count);
        }
      });
  };

  useEffect(() => {
    getReturns(0, pageSize);
  }, []);

  return (
    <>
      <h2 className="pt-10 pl-10 text-3xl">Returns</h2>
      <FiltersAndExport
        onApplyFilters={(filters) => getSettlements(0, pageSize, filters)}
      />
      <div className="m-10">
        <Table
          columns={columns}
          dataSource={returns}
          pagination={{ pageSize: pageSize }}
        />
      </div>
    </>
  );
};

export default ReturnOrdersList;
