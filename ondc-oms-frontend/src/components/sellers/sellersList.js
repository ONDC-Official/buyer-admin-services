import { Space, Table, Tag, Button, Input } from "antd";
const { Search } = Input;
import { client } from "../../utils/request";

import { useEffect, useState } from "react";
import FiltersAndExport from "../common/filtersAndExport";
import { getFiltersURLOptions } from "../common/utils";


const SellersList = ({ handleViewSeller }) => {
  const [sellers, setSellers] = useState([]);
  const [total, setTotal] = useState(0);
  const pageSize = 10;
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "GST",
      dataIndex: "gst",
      key: "gst",
    },
    {
      title: "PAN",
      dataIndex: "pan",
      key: "pan",
    },
    {
      title: "BPP_ID",
      dataIndex: "bpp_id",
      key: "bpp_id",
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
    //           handleViewSeller(record.id);
    //         }}
    //       >
    //         View
    //       </a>
    //     </Space>
    //   ),
    // },
  ];

  const getSellers = (offset, limit, filters) => {
    let filter_str = getFiltersURLOptions(filters);
    client
      .get(`/api/sellers?offset=${offset}&limit=${limit}${filter_str}`, {})
      .then((response) => {
        const api_response = response.data;
        let sellers = api_response?.count > 0 ? api_response.rows : [];
        console.log(api_response);
        setSellers([...sellers]);
        if (offset === 0) {
          setTotal(api_response.count);
        }
      });
  };

  useEffect(() => {
    getSellers(0, pageSize);
  }, []);

  const onTableChange = (pagination, filters, sorter) => {
    const offset =
      pagination.current * pagination.pageSize - pagination.pageSize;
    getSellers(offset, pageSize);
  };

  return (
    <>
      <h2 className="pt-10 pl-10 text-3xl">Sellers</h2>
      <FiltersAndExport
       onApplyFilters={(filters) => getSellers(0, pageSize, filters)}/>
      <div className="m-10">
        <Table
          columns={columns}
          dataSource={sellers}
          onChange={onTableChange}
          pagination={{ pageSize: pageSize, total: total }}
        />
      </div>
    </>
  );
};

export default SellersList;
