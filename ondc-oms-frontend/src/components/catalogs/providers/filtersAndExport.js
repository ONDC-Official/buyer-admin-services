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
import { client } from "../../../utils/request";
import { Domains } from "../common/constants";
import { getCitiesForDD, getSellersForDD } from "../common/util";

const FiltersAndExport = ({ onApplyFilters, onExport, sellerID }) => {
  const [sellers, setSellers] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState(sellerID);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState();
  const [selectedStatus, setSelectedStatus] = useState();
  const [selectedAutoStatus, setSelectedAutoStatus] = useState();
  const [selectedManualStatus, setSelectedManualStatus] = useState();
  const [selectedDomain, setSelectedDomain] = useState();

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
      label: "Flagged",
      value: true,
    },
    {
      label: "Passed",
      value: false,
    },
  ];

  useEffect(() => {
    getSellersForDD().then((res) => {
      setSellers(res);
    });
    getCitiesForDD().then((res) => {
      setCities(res);
    });
  }, []);

  const resetFilters = () => {
    setSelectedSeller();
    setSelectedStatus();
    setSelectedManualStatus();
    setSelectedAutoStatus();
    setSelectedCity();
    setSelectedDomain();
    onApplyFilters();
  };

  const renderFilter = ({ placeholder, options, value, onChange }) => {
    return (
      <Select
        allowClear
        showSearch
        style={{
          width: 200,
        }}
        placeholder={placeholder}
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={options}
        value={value}
        onChange={(v) => {
          onChange(v);
        }}
      />
    );
  };

  return (
    <Row>
      <Col
        span={19}
        style={{
          width: "70%",
          display: "flex",
          justifyContent: "space-evenly",
          paddingLeft: "3rem",
        }}
      >
        {renderFilter({
          placeholder: "seller",
          options: sellers,
          value: selectedSeller,
          onChange: setSelectedSeller,
        })}
        {renderFilter({
          placeholder: "City",
          options: cities,
          value: selectedCity,
          onChange: setSelectedCity,
        })}
        {renderFilter({
          placeholder: "Domain",
          options: Domains,
          value: selectedDomain,
          onChange: setSelectedDomain,
        })}
        {renderFilter({
          placeholder: "Auto Status",
          options: statusOptions,
          value: selectedAutoStatus,
          onChange: setSelectedAutoStatus,
        })}
        {renderFilter({
          placeholder: "Manual Status",
          options: statusOptions,
          value: selectedManualStatus,
          onChange: setSelectedManualStatus,
        })}
        {renderFilter({
          placeholder: "Status",
          options: statusOptions,
          value: selectedStatus,
          onChange: setSelectedStatus,
        })}
      </Col>
      <Col
        span={3}
        style={{
          width: "70%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button
          type="primary"
          onClick={() =>
            onApplyFilters({
              flagged: selectedStatus,
              autoFlag: selectedAutoStatus,
              manualFlag: selectedManualStatus,
              bpp_id: selectedSeller,
              city: selectedCity,
              domain: selectedDomain,
            })
          }
        >
          Apply
        </Button>
        <Button type="primary" onClick={resetFilters}>
          Reset
        </Button>
      </Col>
      <Col
        span={2}
        style={{
          width: "70%",
          display: "flex",
          justifyContent: "space-around",
        }}
      ></Col>
    </Row>
  );
};

export default FiltersAndExport;
