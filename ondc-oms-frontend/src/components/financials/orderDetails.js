import { Input, Button, Form, Select, Row, Col, DatePicker, Table } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
const { Option } = Select;
import { useEffect, useState } from "react";
import moment from "moment";

const OrderDetails = ({ orderId, showListPage }) => {
  const [form] = Form.useForm();

  const [order, setOrder] = useState({});

  const api_response = {
    id: "762ecd80-1368-11ef-9319-4b5a24afb168",
    orderId: "ORDER1235",
    currency: "Euro",
    value: 120.5,
    bff: "BFF0123",
    collectedBy: "John Doe",
    paymentType: "Credit Card",
    createdAt: "2024-05-16T09:41:25.208Z",
    state: "pending",
    updatedAt: "2024-05-16T09:41:25.209Z",
  };

  useEffect(() => {
    //fetch API
    if (api_response) {
      setOrder(api_response);
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
    for (const property in order) {
      data.push({
        key: i++,
        field: property,
        value: order[property],
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
        <h5 className="">Order details</h5>
        <CloseCircleFilled
          style={{ cursor: "pointer", fontSize: "100%" }}
          onClick={(e) => showListPage()}
        />
      </div>
      <div
        className="m-24 mt-10 h-187"
        // style={{ border: "1px solid gray", borderRaduis: "2px" }}
      >
        <div className="m-10">{renderData()}</div>
      </div>
    </>
  );
};

export default OrderDetails;
