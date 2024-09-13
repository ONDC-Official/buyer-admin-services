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
  Radio,
} from "antd";
const { Search } = Input;
const { RangePicker } = DatePicker;
import { useEffect, useState } from "react";
import { client } from "../../../utils/request";
import { DOMAINS } from "../common/constants";
import { Domains } from "../common/constants";
// creation date (derived filters like today, this week, last week, this
//   month), seller, SNP (id & type), city, category, order status

const FiltersAndExport = ({
  onApplyFilters,
  onExport,
  category,
  setCategory,
}) => {
  const [selectedStatus, setSelectedStatus] = useState();
  const [selectedAutoStatus, setSelectedAutoStatus] = useState();
  const [selectedManualStatus, setSelectedManualStatus] = useState();

  const resetFilters = () => {
    setSelectedStatus();
    setSelectedManualStatus();
    setSelectedAutoStatus();
    onApplyFilters();
  };

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

  const renderCategoryFilter = () => {
    return (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div>
          <Radio.Group
            onChange={(e) => setCategory(e.target.value)}
            defaultValue={category}
          >
            {/* <Radio.Button value="today">Today</Radio.Button> */}
            {Domains.map((domain) => {
              return (
                <Radio.Button key={domain.id} value={domain.value}>
                  {domain.label}
                </Radio.Button>
              );
            })}
          </Radio.Group>
        </div>
      </div>
    );
  };

  const renderOtherFilters = () => {
    return (
      <Row style={{marginTop: "10px"}}>
        <Col
          span={6}></Col>
        <Col
          span={8}
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "space-evenly",
            paddingLeft: "3rem",
          }}
        >

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
          span={8}
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "space-around",
          }}
        ></Col>
      </Row>
    );
  };

  return (
    <div>
      {renderCategoryFilter()}
      {renderOtherFilters()}
    </div>
  );
};

export default FiltersAndExport;
