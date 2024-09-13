import { Input, Button, Form, Select, Row, Col, DatePicker, Table } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
const { Option } = Select;
import { useEffect, useState } from "react";
import moment from "moment";

const ReturnOrderDetails = ({ returnOrderId, showListPage }) => {
  const [form] = Form.useForm();

  const [returnOrder, setReturnOrder] = useState({});

  const api_response = {
    "id": "599f5e60-1376-11ef-9689-5b1f5f2f2e76",
    "returnId": "2424",
    "amount": "500.25",
    "reason": "My Wish",
    "orderId": "762ecd80-1368-11ef-9319-4b5a24afb168",
    "createdAt": "2024-05-16T11:20:50.247Z",
    "updatedAt": "2024-05-16T11:20:50.247Z"
}

  useEffect(() => {
    //fetch API
    if (api_response) {
      setReturnOrder(api_response);
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
    for (const property in returnOrder) {
      data.push({
        key: i++,
        field: property,
        value: returnOrder[property],
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
        <h5 className="">Return Details</h5>
        <CloseCircleFilled
          style={{ cursor: "pointer", fontSize: "100%" }}
          onClick={(e) => showListPage()}
        />
      </div>
      <div
        className="m-24 mt-10 h-187"
        // style={{ breturnOrder: "1px solid gray", breturnOrderRaduis: "2px" }}
      >
        <div className="m-10">{renderData()}</div>
      </div>
    </>
  );
};

export default ReturnOrderDetails;
