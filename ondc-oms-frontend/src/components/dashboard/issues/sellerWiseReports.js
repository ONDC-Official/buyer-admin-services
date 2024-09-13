import { useEffect, useState } from "react";
import { Col, Table } from "antd";
import StackedLine from "../../charts/StackedLine";
import {client} from "../../../utils/request";

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
    const chartDataApi = {
      "yAxis": [
          {
              "name": "Open",
              "type": "line",
              "stack": "total",
              "data": [
                  1,
                  1,
                  1
              ]
          },
          {
              "name": "Closed",
              "type": "line",
              "stack": "total",
              "data": [
                  1,
                  4,
                  10
              ]
          }
      ],
      "xAxis": [
          "1",
          "2",
          "3"
      ]
  }
    setChartData(chartDataApi);
  }, []);

  const columns = [
    {
      title: "Seller",
      dataIndex: "name",
      key: "name",
      width: 300,
    },
    {
      title: "Open",
      dataIndex: "Open",
      key: "Open",
      width: 120,
      render: (text) => text || 0
    },
    {
      title: "Closed",
      dataIndex: "Closed",
      key: "Closed",
      width: 120,
      render: (text) => text || 0
    },
  ];

    useEffect(() => {//sellers/issueReport?limit=100&offset=0
        client
            .get(`/api/sellers/issueReport?dateRange=${dateRange}`)
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
    }, [dateRange]);

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
          <h2>Report</h2>
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
