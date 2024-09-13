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
  const [respondent, setRespondent] = useState("");
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
      value: "ORDER",
      label: "ORDER",
    },
    {
      value: "ITEM",
      label: "ITEM",
    },
    {
      value: "FULFILLMENT",
      label: "FULFILLMENT",
    },
    {
      value: "AGENT",
      label: "AGENT",
    },
    {
      value: "PAYMENT",
      label: "PAYMENT",
    },
    {
      value: "TRANSACTION",
      label: "TRANSACTION",
    },
  ];

  const statusOptions = [
    {
      label: "Open",
      value: "Open",
    },
    {
      label: "Closed",
      value: "Closed",
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
    setRespondent("");
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

  const renderRespondentFilter = () => {
    return (
      <Search
        style={{ width: "300px" }}
        width="inherit"
        value={respondent}
        placeholder="Enter respondent"
        onChange={(e) => {
          setRespondent(e.target.value);
        }}
      />
    );
  };

  return (
    <Row>
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
        {renderCategoryFilter()}
        {renderStatusFilter()}
        {renderRespondentFilter()}
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
            onApplyFilters({ dateFilter, respondent, category, status })
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
        <Button type="primary" onClick={() => onExport({ dateFilter, respondent, category, status })}>
          Export
        </Button>
      </Col>
    </Row>
  );
};

export default FiltersAndExport;
