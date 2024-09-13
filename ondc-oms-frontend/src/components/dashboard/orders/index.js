import { useEffect, useState } from "react";
import { Col, Row, Radio, Card, Select } from "antd";
// import Orders from "./orders";
import { client } from "../../../utils/request";
import SalesReport from "./salesReports";
import ProviderWiseReports from "./providerWiseReports";
import CityWiseReports from "./cityWiseReports";
// import AccountPaymentReport from "./accountPaymentReport";
// import AccountCollectionReport from "./accountCollectionReport";

const Orders = () => {
  const [dateRange, setDateRange] = useState("thisWeek");
  const [orderStateCount, setOrderStateCount] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    client.get("/api/orders/state/count", {}).then((response) => {
      setOrderStateCount([...response.data]);
    });
  }, []);

  const onChange = () => {};

  const onDateRangeChange = (e) => {
    setDateRange(e.target.value);
  };

  const renderNumberCard = (number, title) => {
    return (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexFlow: "column",
          boxShadow: "1px 1px 5px #aec5d8",
          borderRadius: "5px",
          backgroundColor: "transparent",
          width: "90%",
          padding: "5px",
        }}
      >
        <div>
          <h2>{number}</h2>
        </div>
        <div>{title}</div>
      </div>
    );
  };
  const renderNUmberCards = () => {
    return (
      <>
        {orderStateCount.map((v) => {
          let span = v.state === "Accepted" ? 4 : 5;
          return (
            <Col span={span} key={v.state}>
              {renderNumberCard(v.count, v.state)}
            </Col>
          );
        })}
        {/* <Col span={8}>{renderNumberCard(123344, "Ordered")}</Col>
        <Col span={8}>{renderNumberCard(123344, "Confirmed")}</Col>
        <Col span={8}>{renderNumberCard(123344, "Returned")}</Col> */}
      </>
    );
  };

  const renderFilters = () => {
    return (
      <Col span={22}>
        <Row>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div></div>
            Date range:
            <div style={{ marginLeft: "10px" }}>
              <Radio.Group
                onChange={onDateRangeChange}
                defaultValue={dateRange}
              >
                {/* <Radio.Button value="today">Today</Radio.Button> */}
                <Radio.Button value="thisWeek">This Week</Radio.Button>
                <Radio.Button value="lastWeek">Last Week</Radio.Button>
                <Radio.Button value="thisMonth">This Month</Radio.Button>
                <Radio.Button value="lastMonth">Last Month</Radio.Button>
                {/* <Radio.Button value="custom">Custom</Radio.Button> */}
              </Radio.Group>
            </div>
          </div>
        </Row>
        {/* <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "0.3rem",
          }}
        >
          <div>
            Seller:
            <Select
              style={{ paddingLeft: "5px" }}
              showSearch
              placeholder="Select a Seller"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              options={options}
            />
          </div>
        </div> */}
      </Col>
    );
  };

  const renderOrders = () => {};

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

  const onSearch = () => {};
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <>
      <Row style={{ alignItems: "center", margin: "1rem" }}>
        {renderFilters()}
      </Row>
      <Row style={{ alignItems: "center", margin: "1rem", justifyContent: 'center' }}>
        {renderNUmberCards()}
      </Row>
      <Row
        style={{
          alignItems: "center",
          margin: "1rem",
          padding: "0.5rem",
          boxShadow: "1px 1px 5px #aec5d8",
          height: "500px",
        }}
      >
        <SalesReport dateRange={dateRange} />
      </Row>
      {/* <Row
        style={{
          alignItems: "center",
          margin: "1rem",
          padding: "0.5rem",
          boxShadow: "1px 1px 5px #aec5d8",
          height: "500px",
        }}
      >
        <ProviderWiseReports dateRange={dateRange} />
      </Row>
      <Row
        style={{
          alignItems: "center",
          margin: "1rem",
          padding: "0.5rem",
          boxShadow: "1px 1px 5px #aec5d8",
          height: "500px",
        }}
      >
        <CityWiseReports dateRange={dateRange} />
      </Row> */}
      {/* <Row
        style={{
          alignItems: "center",
          margin: "1rem",
          padding: "0.5rem",
          boxShadow: "1px 1px 5px #aec5d8",
          height: "500px",
        }}
      >
        <AccountPaymentReport dateRange={dateRange} />
      </Row> */}
      {/* <Row
        style={{
          alignItems: "center",
          margin: "1rem",
          padding: "0.5rem",
          boxShadow: "1px 1px 5px #aec5d8",
          height: "500px",
        }}
      >
        <AccountCollectionReport dateRange={dateRange} />
      </Row> */}
    </>
  );
};

export default Orders;
