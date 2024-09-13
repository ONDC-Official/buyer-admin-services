import { Space, Table, Tag, Button, Input } from "antd";
const { Search } = Input;
import { client } from "../../utils/request";

import { useEffect, useState } from "react";
import FiltersAndExport from "../common/filtersAndExport";
import { getFiltersURLOptions } from "../common/utils";

const SettlementsList = ({ handleViewSettlement }) => {
  const [settlements, setSettlements] = useState([]);
  const [total, setTotal] = useState(0);
  const pageSize = 10;

  const columns = [
    {
      title: "Order Id",
      dataIndex: "OrderId",
      key: "OrderId",
    },
    {
      title: "Seller",
      dataIndex: "Seller",
      key: "seller",
      render: (item) => item.name,
    },
    {
      title: "settlement Type",
      dataIndex: "settlementType",
      key: "settlementType",
    },
    {
      title: "bank Name",
      dataIndex: "bankName",
      key: "bankName",
    },
    {
      title: "branch Name",
      dataIndex: "branchName",
      key: "branchName",
    },
    {
      title: "UPI",
      dataIndex: "UPI",
      key: "UPI",
    },
    {
      title: "settlement bank account no",
      dataIndex: "settlement_bank_account_no",
      key: "settlement_bank_account_no",
    },
    {
      title: "beneficiary name",
      dataIndex: "beneficiary_name",
      key: "beneficiary_name",
    },
    {
      title: "createdAt",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a
    //         onClick={() => {
    //           console.log(record.id);
    //           handleViewSettlement(record.id);
    //         }}
    //       >
    //         View
    //       </a>
    //     </Space>
    //   ),
    // },
  ];

  const getSettlements = (offset, limit, filters) => {
    let filter_str = getFiltersURLOptions(filters);
    client
      .get(`/api/settlement?offset=${offset}&limit=${limit}${filter_str}`, {})
      .then((response) => {
        const api_response = response.data;
        let settlements = api_response?.count > 0 ? api_response.rows : [];
        console.log(api_response);
        setSettlements([...settlements]);
        if (total === 0) {
          setTotal(api_response.count);
        }
      });
  };

  useEffect(() => {
    getSettlements(0, pageSize);
  }, []);

  const onTableChange = (pagination, filters, sorter) => {
    const offset =
      pagination.current * pagination.pageSize - pagination.pageSize;
    getSettlements(offset, pageSize);
  };

  return (
    <>
      <h2 className="pt-10 pl-10 text-3xl">Settlements</h2>
      <FiltersAndExport
        onApplyFilters={(filters) => getSettlements(0, pageSize, filters)}
      />
      <div className="m-10">
        <Table
          columns={columns}
          dataSource={settlements}
          onChange={onTableChange}
          pagination={{ pageSize: 10, total: total }}
        />
      </div>
    </>
  );
};

export default SettlementsList;
