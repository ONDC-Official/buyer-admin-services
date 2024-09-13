import { Space, Table, Tag, Button, Input } from "antd";
const { Search } = Input;

import { useEffect, useState } from "react";
import { client } from "../../utils/request";
import FiltersAndExport from "./filtersAndExport";
import {getFiltersURLOptions} from "../common/utils";

const IssuesList = ({ handleViewIssue }) => {
  const [issues, setIssues] = useState([]);
  const [total, setTotal] = useState(0);
  const pageSize = 10;

  const columns = [
    // {
    //   title: "Issue Id",
    //   dataIndex: "issueId",
    //   key: "issueId",
    //   render: (text) => <a>{text}</a>,
    // },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Order Id",
      dataIndex: "Order",
      key: "Order",
      render: (order) => order.orderId
    },
    {
      title: "Creation Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => new Date(text).toLocaleDateString()
    },
    {
      title: "Complainant",
      dataIndex: "complainant",
      key: "complainant",
    },
    {
      title: "Respondent",
      dataIndex: "respondent",
      key: "respondent",
    },
    {
      title: "Issue status",
      dataIndex: "issueStatus",
      key: "issueStatus",
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a
    //         onClick={() => {
    //           console.log(record.id);
    //           handleViewIssue(record.id);
    //         }}
    //       >
    //         View
    //       </a>
    //     </Space>
    //   ),
    // },
  ];

  const api_response = {
    count: 1,
    rows: [
      {
        id: "6be277c0-1375-11ef-a083-130f7d4d2d19",
        category: "Fashion",
        subCategory: "Body Wash",
        issueStatus: "broken",
        orderId: "762ecd80-1368-11ef-9319-4b5a24afb168",
        createdAt: "2024-05-16T11:14:11.388Z",
        updatedAt: "2024-05-16T11:14:11.388Z",
      },
    ],
  };

  const getFiltersURLOptions = (filters) => {
    let filter_str = "";

    if (filters) {
      if (filters.dateFilter) {
        filter_str = filter_str + "&dateRange=" + filters.dateFilter;
      }
      if (filters.category) {
        filter_str = filter_str + "&category=" + filters.category;
      }
      if (filters.status) {
        filter_str = filter_str + "&issueStatus=" + filters.status;
      }
      if (filters.respondent) {
        filter_str = filter_str + "&respondent=" + filters.respondent;
      }

    }
    return filter_str;
  };

  const getIssues = (offset, limit, filters) => {
    let filter_str = getFiltersURLOptions(filters);
    client
      .get(`/api/issue?offset=${offset}&limit=${limit}${filter_str}`, {})
      .then((response) => {
        const api_response = response.data;
        let returns = api_response?.count > 0 ? api_response.rows : [];
        console.log(api_response);
        setIssues([...returns]);
        if (total === 0) {
          setTotal(api_response.count);
        }
      });
  };

  useEffect(() => {
    getIssues(0, pageSize);
  }, []);

  const exportToFile = (filters) => {
    let filter_str = getFiltersURLOptions(filters);
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/issue/download/xlsx${filter_str?`?${filter_str}`:""}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <h2 className="pt-10 pl-10 text-3xl">Issues</h2>
      <FiltersAndExport
        onApplyFilters={(filters) => getIssues(0, pageSize, filters)}
        onExport={(filters) => exportToFile(filters)}
      />
      <div className="m-10">
        <Table
          columns={columns}
          dataSource={issues}
          pagination={{ pageSize: pageSize }}
        />
      </div>
    </>
  );
};

export default IssuesList;
