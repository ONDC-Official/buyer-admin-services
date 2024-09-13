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
import {
  getCategories,
  getCategoriesForDD,
  getCitiesForDD,
  getLocationsForDD,
  getProvidersForDD,
  getSellersForDD,
} from "../common/util";

const FiltersAndExport = ({ onApplyFilters, onExport, providerID }) => {
  const [sellers, setSellers] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState();
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCity, setSelectedCity] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedStatus, setSelectedStatus] = useState();
  const [selectedDomain, setSelectedDomain] = useState();
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState(providerID);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState();
  const [selectedType, setSelectedType] = useState();
  const [selectedAutoStatus, setSelectedAutoStatus] = useState();
  const [selectedManualStatus, setSelectedManualStatus] = useState();
  const [allCategories, setAllCategories] = useState([]);

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

  const typeOptions = [
    {
      label: "Item",
      value: "item",
    },
    {
      label: "Customization",
      value: "customization",
    },
    {
      label: "Variant",
      value: "Variant",
    },
  ];

  const getCategoriesForDomain = () => {
    const options = selectedDomain
      ? allCategories[selectedDomain]
      : [].concat(...Object.values(allCategories));
    let formatted_options = options.map((option) => {
      return {
        value: option.code,
        label: option.label,
      };
    });
    return formatted_options;
  };

  useEffect(() => {
    getSellersForDD().then((res) => {
      setSellers(res);
    });
    getCitiesForDD().then((res) => {
      setCities(res);
    });
    getCategoriesForDD().then((res) => {
      setAllCategories(res);
      // setCategories(getCategoriesForDomain());
    });
    getProvidersForDD().then((res) => setProviders(res));
    getLocationsForDD().then((res) => setLocations(res));
  }, []);

  useEffect(
    () => setCategories([...getCategoriesForDomain()]),
    [selectedDomain, allCategories]
  );

  const resetFilters = () => {
    setSelectedSeller();
    setSelectedCategory();
    setSelectedStatus();
    setSelectedManualStatus();
    setSelectedAutoStatus();
    setSelectedCity();
    setSelectedDomain();
    setSelectedLocation();
    setSelectedProvider();
    setSelectedType();
    onApplyFilters({});
  };

  const renderFilter = ({ placeholder, options, value, onChange }) => {
    return (
      <Select
        showSearch
        allowClear
        style={{
          width: 200,
        }}
        dropdownMatchSelectWidth={false}
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
    <div>
      <Row>
        <Col
          span={23}
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
            placeholder: "Provider",
            options: providers,
            value: selectedProvider,
            onChange: setSelectedProvider,
          })}
          {renderFilter({
            placeholder: "City",
            options: cities,
            value: selectedCity,
            onChange: setSelectedCity,
          })}
          {renderFilter({
            placeholder: "Location",
            options: locations,
            value: selectedLocation,
            onChange: setSelectedLocation,
          })}
          {renderFilter({
            placeholder: "Domain",
            options: Domains,
            value: selectedDomain,
            onChange: setSelectedDomain,
          })}
          {renderFilter({
            placeholder: "Category",
            options: categories,
            value: selectedCategory,
            onChange: setSelectedCategory,
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
          {renderFilter({
            placeholder: "Type",
            options: typeOptions,
            value: selectedType,
            onChange: setSelectedType,
          })}
        </Col>
        <Col
          span={1}
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "space-around",
          }}
        ></Col>
      </Row>
      <Row style={{ marginTop: "5px" }}>
        <Col span={10}></Col>
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
                category: selectedCategory,
                location: selectedLocation,
                provider: selectedProvider,
                type: selectedType,
              })
            }
          >
            Apply
          </Button>
          <Button type="primary" onClick={resetFilters}>
            Reset
          </Button>
        </Col>
        <Col span={11}></Col>
      </Row>
    </div>
  );
};

export default FiltersAndExport;
