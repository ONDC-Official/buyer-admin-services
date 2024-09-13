import { useEffect, useState } from "react";
import { Col, Table } from "antd";
import StackedLine from "../../charts/StackedLine";

const ProviderReport = ({ sellers, dateRange }) => {
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
    const data = [
      {
          "id": "af1d9e40-1d14-11ef-ae55-3d8311493add",
          "gst": null,
          "pan": null,
          "bpp_id": "seller-ondc.neml.in",
          "name": "seller-ondc.neml.in",
          "createdAt": "2024-05-28T17:06:54.629Z",
          "updatedAt": "2024-05-28T17:06:54.629Z",
          "stats": [
              {
                  "state": "Open",
                  "count": "7"
              },
              {
                  "state": "Closed",
                  "count": "3"
              }
          ]
      },
      {
          "id": "9d3bfb40-1d14-11ef-ae55-3d8311493add",
          "gst": null,
          "pan": null,
          "bpp_id": "devesaras.digitalindiacorporation.in",
          "name": "devesaras.digitalindiacorporation.in",
          "createdAt": "2024-05-28T17:06:24.628Z",
          "updatedAt": "2024-05-28T17:06:24.628Z",
          "stats": [
              {
                  "state": "Open",
                  "count": "1"
              },
              {
                  "state": "Closed",
                  "count": "0"
              }
          ]
      },
      {
          "id": "99a89b50-1d14-11ef-ae55-3d8311493add",
          "gst": null,
          "pan": null,
          "bpp_id": "on-sponge-renewing.ngrok-free.app",
          "name": "on-sponge-renewing.ngrok-free.app",
          "createdAt": "2024-05-28T17:06:18.629Z",
          "updatedAt": "2024-05-28T17:06:18.629Z",
          "stats": [
            {
              "state": "Open",
              "count": "3"
          },
          {
              "state": "Closed",
              "count": "2"
          }
          ]
      },
      {
          "id": "94671630-1d14-11ef-ae55-3d8311493add",
          "gst": null,
          "pan": null,
          "bpp_id": "ref-app-seller-staging-v2.ondc.org",
          "name": "ref-app-seller-staging-v2.ondc.org",
          "createdAt": "2024-05-28T17:06:09.811Z",
          "updatedAt": "2024-05-28T17:06:09.811Z",
          "stats": [
            {
              "state": "Open",
              "count": "8"
          },
          {
              "state": "Closed",
              "count": "10"
          }
          ]
      }
    ];
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
    setReportData(data.map((report) => {
      let stats = {};
      report.stats.forEach((stat) => {
        stats[stat.state] = stat.count;
      });
      return { ...report, ...stats };
    }));
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
      title: "Provider",
      dataIndex: "provider",
      key: "provider",
      width: 300,
      render: (text) => text || "-"
    },
    {
      title: "Domain",
      dataIndex: "domian",
      key: "domian",
      width: 300,
      render: (text) => text || "-"
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
          <h2>Provider Wise Issue Metrics</h2>
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

export default ProviderReport;
