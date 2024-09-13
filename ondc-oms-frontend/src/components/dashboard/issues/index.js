import { useEffect, useState } from "react";
import { Col, Row, Radio, Card, Select } from "antd";

import SellerWiseReports from './sellerWiseReports';
import ProviderWiseReports from './providerWiseReports';
import {client} from "../../../utils/request";

const Issues = () => {
    const [dateRange, setDateRange] = useState("thisWeek");
    const [orderStateCount, setOrderStateCount] = useState([
        {issueStatus: 'Open', count: 0},
        {issueStatus: 'Close', count: 0},
    ]);
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        client.get("/api/sellers/issueReportCount", {}).then((response) => {
            setOrderStateCount([...response.data]);
        });
    }, []);

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
                    let span = 5;
                    return (
                        <Col span={span} key={v.issueStatus}>
                            {renderNumberCard(v.count, v.issueStatus)}
                        </Col>
                    );
                })}
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
                <SellerWiseReports dateRange={dateRange} />
            </Row>
            {/*<Row*/}
            {/*    style={{*/}
            {/*    alignItems: "center",*/}
            {/*    margin: "1rem",*/}
            {/*    padding: "0.5rem",*/}
            {/*    boxShadow: "1px 1px 5px #aec5d8",*/}
            {/*    height: "500px",*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <ProviderWiseReports />*/}
            {/*</Row>*/}
        </>
    )
};

export default Issues;