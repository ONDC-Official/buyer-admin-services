import { Input, Button, Form, Select, Row, Col, DatePicker, Table } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
const { Option } = Select;
import { useEffect, useState } from "react";
import moment from "moment";
import FlagSection from "../common/FlagSection";
import { flag } from "../common/util";
import DetailsLayout from "../common/detailsLayout";

const ProviderDetails = ({ provider, showListPage }) => {
  console.log("hello", provider);
  const [form] = Form.useForm();

  // const [provider, setProvider] = useState({});
  const [flagSectionVisible, setFlagSectionVisible] = useState(false);

  const api_response = {
    id: "api.greenreceipt.in_ONDC:RET10_24934",
    time: {
      label: "enable",
      timestamp: "2024-07-02T06:00:16.491Z",
    },
    descriptor: {
      name: "Suresh SuperMarket",
      symbol: "https://greenreceipt.in/images/logos/24930.png",
      short_desc: "Suresh SuperMarket",
      long_desc: "Suresh SuperMarket",
      images: ["https://greenreceipt.in/images/logos/24930.png"],
    },
    ttl: "P1D",
    tags: [
      {
        code: "serviceability",
        list: [
          {
            code: "location",
            value: "24934",
          },
          {
            code: "category",
            value: "Beverages",
          },
          {
            code: "type",
            value: "12",
          },
          {
            code: "val",
            value: "IND",
          },
          {
            code: "unit",
            value: "country",
          },
        ],
      },
      {
        code: "serviceability",
        list: [
          {
            code: "location",
            value: "24934",
          },
          {
            code: "category",
            value: "Cleaning & Household",
          },
          {
            code: "type",
            value: "12",
          },
          {
            code: "val",
            value: "IND",
          },
          {
            code: "unit",
            value: "country",
          },
        ],
      },
      {
        code: "serviceability",
        list: [
          {
            code: "location",
            value: "24934",
          },
          {
            code: "category",
            value: "Foodgrains",
          },
          {
            code: "type",
            value: "12",
          },
          {
            code: "val",
            value: "IND",
          },
          {
            code: "unit",
            value: "country",
          },
        ],
      },
      {
        code: "serviceability",
        list: [
          {
            code: "location",
            value: "24934",
          },
          {
            code: "category",
            value: "Masala & Seasoning",
          },
          {
            code: "type",
            value: "12",
          },
          {
            code: "val",
            value: "IND",
          },
          {
            code: "unit",
            value: "country",
          },
        ],
      },
      {
        code: "timing",
        list: [
          {
            code: "type",
            value: "All",
          },
          {
            code: "location",
            value: "24934",
          },
          {
            code: "day_from",
            value: "1",
          },
          {
            code: "day_to",
            value: "7",
          },
          {
            code: "time_from",
            value: "0001",
          },
          {
            code: "time_to",
            value: "2359",
          },
        ],
      },
    ],
    local_id: "24934",
    categories: [
      "Beverages",
      "Foodgrains",
      "Cleaning & Household",
      "Masala & Seasoning",
    ],
  };

  // useEffect(() => {
  //   //fetch API
  //   if (api_response) {
  //     setProvider(api_response);
  //   }
  // }, []);

  const columns = [
    {
      title: "Field",
      dataIndex: "field",
      key: "field",
      width: "20%",
      render: (text) => <div style={{ verticalAlign: "top" }}>{text}</div>,
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
      render: (text, record) => renderRowValue(text, record),
    },
  ];

  const renderRowValue = (text, record) => {
    if (record.field === "images") {
      return record.value.map((image, key) => {
        // eslint-disable-next-line @next/next/no-img-element
        return <img key={key} alt="Location" src={image} height={100} />;
      });
    }
    if (record.field === "symbol") {
      // eslint-disable-next-line @next/next/no-img-element
      return <img alt="Item" src={record.value} height={100} />;
    }
    return <pre>{text}</pre>;
  };

  const renderData = () => {
    let data = [];
    let i = 0;
    for (const key in provider.descriptor) {
      data.push({
        key: i++,
        field: key,
        value: provider.descriptor[key],
      });
    }
    for (const property in provider) {
      if (property !== "descriptor" && property !== "symbol") {
        data.push({
          key: i++,
          field: property,
          value: JSON.stringify(provider[property], null, 2),
        });
      }
    }
    console.log("data", data);
    const rowStyle = { verticalAlign: "top" };
    return (
      <Table
        width={"100%"}
        columns={columns}
        dataSource={data}
        pagination={false}
        showHeader={false}
        rowClassName={() => rowStyle}
        scroll={{ y: "65vh" }}
        onRow={() => ({
          style: rowStyle,
        })}
      />
      // <Table
      //   columns={columns}
      //   dataSource={data}
      //   pagination={false}
      //   showHeader={false}
      //   rowClassName={() => rowStyle}
      //   onRow={() => ({
      //     style: rowStyle,
      //   })}
      // />
    );
  };

  return (
    <DetailsLayout
      renderData={renderData}
      type="provider"
      id={provider.id}
      showListPage={showListPage}
    />
  );
};

const ProviderErrors = [
  {
    value: 90001,
    label: "Fulfilment rate below declared standards",
  },
  {
    value: 90002,
    label: "On-time delivery rate below declared standards",
  },
  {
    value: 90003,
    label: "Select call failure more than published threshold",
  },
  {
    value: 90004,
    label: "Init call failure more than published threshold",
  },
  {
    value: 90005,
    label: "Confirm call failure more than published threshold",
  },
  {
    value: 90006,
    label:
      "Percentage of customer issues resolved within resolution TATs is below published standards",
  },
  {
    value: 90007,
    label: "Duplicate Store",
  },
  {
    value: 90008,
    label: "Customer complaints more than published standards",
  },
  {
    value: 90009,
    label: "Rejected store due to Item level rejection above threshold",
  },
  {
    value: 90010,
    label: "Missing authorisation from NP",
  },
  {
    value: 90011,
    label: "Merchant status sent by Seller NP is unavailable",
  },
  {
    value: 90012,
    label: "Country of Origin not present (For Packaged Products)",
  },
  {
    value: 90013,
    label: "Only Hyperlocal Delivery allowed",
  },
  {
    value: 90014,
    label: "Invalid Latitude",
  },
  {
    value: 90015,
    label: "Invalid Longitude",
  },
  {
    value: 90016,
    label: "Invalid customisation group data",
  },
  {
    value: 90017,
    label: "Stores less than declared threshold",
  },
  {
    value: 90018,
    label: "Empty Address field",
  },
  {
    value: 90019,
    label: "Other Provider Error",
  },
  {
    value: 90020,
    label: "Tags type not present against items",
  },
  {
    value: 90021,
    label: "Invalid Address received",
  },
  {
    value: 90022,
    label: "Invalid city received",
  },
  {
    value: 90023,
    label: "Invalid contact number- not 10 digit",
  },
  {
    value: 90024,
    label: "Invalid FSSAI",
  },
  {
    value: 90025,
    label: "Delivery radius not given",
  },
  {
    value: 90026,
    label: "Store timing not in correct format",
  },
  {
    value: 90027,
    label: "Locality & city mismatch",
  },
  {
    value: 90028,
    label: "Store not received on search for 2 consecutive days",
  },
  {
    value: 90029,
    label: "Store disabled by Seller App",
  },
  {
    value: 90030,
    label: "Store Category mapping sent empty or unavailable at Buyer App side",
  },
  {
    value: 90031,
    label: "NP integration version mis-match",
  },
  {
    value: 90032,
    label: "Store location error",
  },
  {
    value: 90033,
    label: "Provider in Blacklisted",
  },
];

export default ProviderDetails;
