import { useEffect, useState } from "react";
import { Col, Row, Radio, Card, Select, Space, Button, Table } from "antd";
import StackedLine from "../../charts/StackedLine";
import { client } from "../../../utils/request";

const AccountPaymentReport = ({ sellers, dateRange }) => {
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
      .get(`api/sellers/accountPayableReport?dateRange=${dateRange}`)
      .then((response) => {
        console.log("sales report", response);
        let data = response.data.rows.map((report) => {
          let stats = {}
          stats["sum"] = report.stats[0].sum || 0;
          stats["count"] = report.stats[0].count
          return { ...report, ...stats };
        });
        setReportData([...data]);
      });

    // client
    //   .get(
    //     `/api/sellers/salesReportTrend?dateRange=${dateRange}&interval=${getInterval(dateRange)}`
    //   )
    //   .then((response) => {
    //     console.log("chart data", response);
    //     setChartData(response.data);
    //   });
  }, [dateRange]);

  const columns = [
    {
      title: "Seller",
      dataIndex: "name",
      key: "name",
      // width: 300,
    },
    {
      title: "Sum",
      dataIndex: "sum",
      key: "sum",
      // width: 100,
    },
    {
      title: "Count",
      dataIndex: "count",
      key: "count",
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
          <h2>Account Payment Report</h2>
        </div>
        {renderTable()}
      </Col>
      <Col span={8} style={{ height: "inherit" }}>
        {/* <StackedLine
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
        /> */}
      </Col>
    </>
  );
};

export default AccountPaymentReport;
