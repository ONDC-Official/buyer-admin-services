import { Col, Row, Radio, Card, Select, Space, Button, Table } from "antd";
import StackedLine from "../../charts/StackedLine";

const options = [
  {
    value: "jack",
    label: "Jack",
  },
  {
    value: "lucy",
    label: "Lucy",
  },
  {
    value: "tom",
    label: "Tom",
  },
];

const Orders = (sellers) => {
  const onChange = () => {};
  const onSearch = () => {};
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const columns = [
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
      title: "Created at",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];

  const orders = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
  ];

  const renderTable = () => {
    return (
      <Table
        columns={columns}
        dataSource={orders}
        pagination={{ pageSize: 5 }}
        scroll={{
          x: 1300,
        }}
      />
    );
  };

  return (
    <>
      <Col span={16}>
        <div style={{textAlign: "center"}}><h2>Orders</h2></div>
        {renderTable()}
      </Col>
      <Col span={8} style={{height: "inherit"}}>
        <StackedLine
          title={""}
          legend={['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']}
          xAxis={ {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }}
          yAxis={[{ type: "value" }]}
          series={ [
            {
              name: 'Email',
              type: 'line',
              stack: 'Total',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: 'Union Ads',
              type: 'line',
              stack: 'Total',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: 'Video Ads',
              type: 'line',
              stack: 'Total',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: 'Direct',
              type: 'line',
              stack: 'Total',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: 'Search Engine',
              type: 'line',
              stack: 'Total',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]}
          width={"90%"}
          height={"90%"}
        />
      </Col>
    </>
  );
};

export default Orders;
