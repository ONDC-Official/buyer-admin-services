import { useEffect, useState } from "react";
import { Col, Row, Radio, Card, Select, Space, Button, Table } from "antd";
import StackedLine from "../../charts/StackedLine";
import { client } from "../../../utils/request";

const SalesReport = ({ sellers, dateRange }) => {
  const [reportData, setReportData] = useState([]);
  const [chartData, setChartData] = useState({});

  const getInterval = (dateRange) => {
    let interval = "daily"
    switch (dateRange) {
      case "thisMonth":
        interval = "weekly";
        break;
      case "lastMonth":
        interval = "weekly";
        break;
      default:
        break;
      // code block
    }
    return interval;
  };

  useEffect(() => {
    client
      .get(`/api/sellers/salesReport?dateRange=${dateRange}`)
      .then((response) => {
        console.log("sales report", response);
        let data = response.data.rows.map((report) => {
          let stats = {};
          report.stats.forEach((stat) => {
            stats[stat.state] = stat.count;
          });
          return { ...report, ...stats };
        });
        setReportData([...data]);
      });

    client
      .get(
        `/api/sellers/salesReportTrend?dateRange=${dateRange}&interval=${getInterval(dateRange)}`
      )
      .then((response) => {
        console.log("chart data", response);
        setChartData(response.data);
      });
  }, [dateRange]);

  console.log("chsrt state data", chartData);
  const columns = [
    {
      title: "Seller",
      dataIndex: "name",
      key: "name",
      width: 300,
    },
    {
      title: "Provider",
      dataIndex: "provider",
      key: "provider",
      width: 300,
      render: (text) => text || "-"
    },
    {
      title: "Domain",
      dataIndex: "domain",
      key: "domain",
      width: 300,
      render: (text) => text || "-"
    },
    {
      title: "Created",
      dataIndex: "Created",
      key: "Created",
      width: 120,
      render: (text) => text || 0
    },
    {
      title: "In-progress",
      dataIndex: "In-progress",
      key: "In-progress",
      width: 120,
      render: (text) => text || 0
    },
    {
      title: "Accepted",
      dataIndex: "Accepted",
      key: "Accepted",
      width: 120,
      render: (text) => text || 0
    },
    {
      title: "Completed",
      dataIndex: "Completed",
      key: "Completed",
      width: 120,
      render: (text) => text || 0
    },
    {
      title: "Cancelled",
      dataIndex: "Cancelled",
      key: "Cancelled",
      render: (text) => text || 0
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      key: "Amount",
      render: (text) => text || "-"
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
        dataSource={reportData}
        pagination={{ pageSize: 5 }}
        // scroll={{
        //   x: 1300,
        // }}
      />
    );
  };

  return (
    <>
      <Col span={16}>
        <div style={{ textAlign: "center" }}>
          <h2>Provider Wise Sales Report</h2>
        </div>
        {renderTable()}
      </Col>
      <Col span={8} style={{ height: "inherit" }}>
        <StackedLine
          title={""}
          legend={chartData["yAxis"]?.map((v) => v.name)}
          xAxis={{
            type: "category",
            boundaryGap: false,
            data: chartData["xAxis"],
          }}
          yAxis={[{ type: "value" }]}
          series={chartData["yAxis"]}
          width={"90%"}
          height={"90%"}
        />
      </Col>
    </>
  );
};

export default SalesReport;
