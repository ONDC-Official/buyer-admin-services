import { Input, Button, Form, Select, Row, Col, DatePicker, Table } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
const { Option } = Select;
import { useEffect, useState } from "react";
import moment from "moment";

const SellerDetails = ({ sellerId, showListPage }) => {
  const [form] = Form.useForm();

  const [seller, setSeller] = useState({});

  const api_response = {
    id: "762ecd80-1368-11ef-9319-4b5a24afb168",
    sellerId: "ORDER1235",
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
      setSeller(api_response);
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
    for (const property in seller) {
      data.push({
        key: i++,
        field: property,
        value: seller[property],
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
        <h5 className="">Seller details</h5>
        <CloseCircleFilled
          style={{ cursor: "pointer", fontSize: "100%" }}
          onClick={(e) => showListPage()}
        />
      </div>
      <div
        className="m-24 mt-10 h-187"
        // style={{ bseller: "1px solid gray", bsellerRaduis: "2px" }}
      >
        <div className="m-10">{renderData()}</div>
      </div>
    </>
  );
};

export default SellerDetails;
