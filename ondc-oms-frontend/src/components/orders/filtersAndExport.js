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

// creation date (derived filters like today, this week, last week, this
//   month), seller, SNP (id & type), city, category, order status

const FiltersAndExport = ({ onApplyFilters, onExport }) => {
  const [sellers, setSellers] = useState([]);
  const [city, setCity] = useState("");
  const [dateRange, setDateRange] = useState([]);
  const [seller, setSeller] = useState();
  const [dateFilter, setDateFilter] = useState();
  const [category, setCategory] = useState();
  const [status, setStatus] = useState();

  const dateFilterOptions = [
    {
      label: "Today",
      value: "today",
    },
    {
      label: "This Week",
      value: "thisWeek",
    },
    {
      label: "Last Week",
      value: "lastWeek",
    },
    {
      label: "This Month",
      value: "thisMonth",
    },
  ];

  const categoryOptions = [
    {
      value: "ONDC:RET10",
      label: "ONDC:RET10",
    },
    {
      value: "ONDC:RET11",
      label: "ONDC:RET11",
    },
    {
      value: "ONDC:RET12",
      label: "ONDC:RET12",
    },
    {
      value: "ONDC:RET13",
      label: "ONDC:RET13",
    },
    {
      value: "ONDC:RET14",
      label: "ONDC:RET14",
    },
    {
      value: "ONDC:RET15",
      label: "ONDC:RET15",
    },
    {
      value: "ONDC:RET16",
      label: "ONDC:RET16",
    },
    {
      value: "ONDC:RET18",
      label: "ONDC:RET18",
    },
    {
      value: "ONDC:RET19",
      label: "ONDC:RET19",
    },
    {
      value: "ONDC:AGR10",
      label: "ONDC:AGR10",
    },
    {
      value: "ONDC:AGR11",
      label: "ONDC:AGR11",
    },
  ];

  const statusOptions = [
    {
      label: "In-progress",
      value: "In-progress",
    },
    {
      label: "Completed",
      value: "Completed",
    },
    {
      label: "Cancelled",
      value: "Cancelled",
    },
    {
      label: "Created",
      value: "Created",
    },
    {
      label: "Accepted",
      value: "Accepted",
    },
  ];

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
    setCity("");
    setDateRange([]);
    setSeller();
    setDateFilter();
    setCategory();
    setStatus();
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
        value={seller}
        onChange={(v) => {
          setSeller(v);
        }}
      />
    );
  };

  const renderDateFilter = () => {
    return (
      <Select
        showSearch
        style={{
          width: 200,
        }}
        placeholder="Select Date Range"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={dateFilterOptions}
        value={dateFilter}
        onChange={(v) => {
          setDateFilter(v);
        }}
      />
    );
  };

  const renderCategoryFilter = () => {
    return (
      <Select
        showSearch
        style={{
          width: 200,
        }}
        placeholder="Select Category"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={categoryOptions}
        value={category}
        onChange={(v) => {
          setCategory(v);
        }}
      />
    );
  };

  const renderStatusFilter = () => {
    return (
      <Select
        showSearch
        style={{
          width: 200,
        }}
        placeholder="Select Status"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={statusOptions}
        value={status}
        onChange={(v) => {
          setStatus(v);
        }}
      />
    );
  };

  const renderCityFilter = () => {
    return (
      <Search
        style={{ width: "300px" }}
        width="inherit"
        value={city}
        placeholder="Enter City"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
    );
  };

  return (
    <Row>
      {/* <Col span={4}>
        <Search
          style={{ width: "300px", paddingLeft: "20%" }}
          width="inherit"
          value={searchText}
          placeholder="Enter Search text"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </Col> */}
      <Col
        span={17}
        style={{
          width: "70%",
          display: "flex",
          justifyContent: "space-evenly",
          paddingLeft: "3rem",
        }}
      >
        {renderDateFilter()}
        {renderSellerFilter()}
        {renderCityFilter()}
        {renderCategoryFilter()}
        {renderStatusFilter()}
        {/* {renderDatePicker()} */}
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
            onApplyFilters({ dateFilter, seller, city, category, status })
          }
        >
          Apply filters
        </Button>
        <Button type="primary" onClick={resetFilters}>
          Reset filters
        </Button>
      </Col>
      <Col
        span={3}
        style={{
          width: "70%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button type="primary" onClick={() => onExport({ dateFilter, seller, city, category, status })}>
          Export
        </Button>
      </Col>
    </Row>
  );
};

export default FiltersAndExport;
