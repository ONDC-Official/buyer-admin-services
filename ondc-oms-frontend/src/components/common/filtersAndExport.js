import {
  Space,
  Table,
  Tag,
  Button,
  Input,
  DatePicker,
  Select,
  Row,
  Col,
} from "antd";
const { Search } = Input;
const { RangePicker } = DatePicker;
import { useEffect, useState } from "react";
import { client } from "../../utils/request";

const FiltersAndExport = ({onApplyFilters, onExport}) => {
  const [sellers, setSellers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [dateRange, setDateRange] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState();

  useEffect(() => {
    client.get(`/api/sellers`, {}).then((response) => {
      const api_response = response.data;
      let sellers = api_response?.count > 0 ? api_response.rows : [];
      let options = api_response.rows?.map((seller) => {
        return {
          value: seller.id,
          label: seller.name,
        };
      });
      console.log(options);
      setSellers([...options]);
    });
  }, []);

  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  const resetFilters = () => {
    setSearchText("");
    setDateRange([]);
    setSelectedSeller();
  };

  const renderDatePicker = () => {
    return (
      <RangePicker
        showTime={{
          format: "HH:mm A",
        }}
        value={dateRange}
        format="YYYY-MM-DD HH:mm"
        onChange={(value, dateString) => {
          console.log("Selected Time: ", value);
          console.log("Formatted Selected Time: ", dateString);
          setDateRange(value);
        }}
        onOk={onOk}

      />
    );
  };

  const renderSellerFilter = () => {
    return (
      <Select
        showSearch
        style={{
          width: 200,
        }}
        placeholder="Select Seller"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={sellers}
        value={selectedSeller}
        onChange={(v) => {
          setSelectedSeller(v);
        }}
      />
    );
  };

  return (
    <Row>
      <Col span={4}>
        <Search
          style={{ width: "300px", paddingLeft: "20%" }}
          width="inherit"
          value={searchText}
          placeholder="Enter Search text"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </Col>
      <Col
        span={11}
        style={{
          width: "70%",
          display: "flex",
          justifyContent: "space-evenly",
          paddingLeft: "3rem",
        }}
      >
        {renderSellerFilter()}
        {renderDatePicker()}
      </Col>
      <Col
        span={4}
        style={{
          width: "70%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button
          type="primary"
          onClick={() =>
            onApplyFilters({ searchText, selectedSeller, dateRange })
          }
        >
          Apply filters
        </Button>
        <Button type="primary" onClick={resetFilters}>
          Reset filters
        </Button>
      </Col>
      {/*<Col*/}
      {/*  span={5}*/}
      {/*  style={{*/}
      {/*    width: "70%",*/}
      {/*    display: "flex",*/}
      {/*    justifyContent: "space-around",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Button type="primary" onClick={console.log("export clicked")}>*/}
      {/*    Export*/}
      {/*  </Button>*/}
      {/*</Col>*/}
    </Row>
  );
};

export default FiltersAndExport;
