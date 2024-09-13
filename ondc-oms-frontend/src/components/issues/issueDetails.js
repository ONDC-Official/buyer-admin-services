import { Input, Button, Form, Select, Row, Col, DatePicker, Table } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
const { Option } = Select;
import { useEffect, useState } from "react";
import moment from "moment";

const IssueDetails = ({ issueId, showListPage }) => {
  const [form] = Form.useForm();

  const [issue, setIssue] = useState({});

  const api_response = {
    "id": "6be277c0-1375-11ef-a083-130f7d4d2d19",
    "category": "Fashion",
    "subCategory": "Body Wash",
    "issueStatus": "broken",
    "orderId": "762ecd80-1368-11ef-9319-4b5a24afb168",
    "createdAt": "2024-05-16T11:14:11.388Z",
    "updatedAt": "2024-05-16T11:14:11.388Z"
}

  useEffect(() => {
    //fetch API
    if (api_response) {
      setIssue(api_response);
    }
  }, []);

  const columns = [
    {
      title: "Field",
      dataIndex: "field",
      key: "field",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
    },
  ];

  const renderData = () => {
    let data = [];
    let i = 0;
    for (const property in issue) {
      data.push({
        key: i++,
        field: property,
        value: issue[property],
      });
    }
    return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        showHeader={false}
      />
    );
  };

  return (
    <>
      <div
        className="m-10 mx-20 text-2xl"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h5 className="">Issue details</h5>
        <CloseCircleFilled
          style={{ cursor: "pointer", fontSize: "100%" }}
          onClick={(e) => showListPage()}
        />
      </div>
      <div
        className="m-24 mt-10 h-187"
        // style={{ bissue: "1px solid gray", bissueRaduis: "2px" }}
      >
        <div className="m-10">{renderData()}</div>
      </div>
    </>
  );
};

export default IssueDetails;
