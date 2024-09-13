import { Input, Button, Form, Select, Row, Col, DatePicker, Table } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
const { Option } = Select;
import { useEffect, useState } from "react";
import moment from "moment";
import FlagSection from "../common/FlagSection";
import { flag } from "../common/util";
import DetailsLayout from "../common/detailsLayout";

const sellerErrors = [
  {
    value: 92001,
    label: "NP integration version mis-match",
  },
  {
    value: 92002,
    label: "Missing authorisation from NP",
  },
  {
    value: 92003,
    label:
      "Mandatory field missing or the data format is incorrect for all Providers",
  },
  {
    value: 92004,
    label: "Invalid domain sent",
  },
  {
    value: 92005,
    label: "NP is blacklisted or inactive or not onboarded yet",
  },
  {
    value: 92006,
    label: "Provider Rejections crossed threshold in single transaction ID",
  },
];

const SellerDetails = ({ seller, showListPage }) => {
  const [form] = Form.useForm();
  const [flagSectionVisible, setFlagSectionVisible] = useState(false);

  const api_response = {
    domain: "ONDC:RET12",
    seller_descriptor: {
      name: "Anushree's Jewellery Business",
      symbol: "https://media.esamudaay.com/user-media/es-logo-small.png",
      short_desc: "Jewelleries",
      long_desc: "Jewelleries",
      images: ["https://media.esamudaay.com/user-media/es-logo-small.png"],
    },
    seller:
      "api.test.esamudaay.com/ondc/sdk/bpp/retail/esamudaay_ONDC:RET12_c455bf79-fd70-4efc-8cd4-82f6b5a8e118",
    id: "api.test.esamudaay.com/ondc/sdk/bpp/retail/esamudaay_ONDC:RET12_c455bf79-fd70-4efc-8cd4-82f6b5a8e118_8c93cbd8-2890-4f1f-b44c-4aec793ed0d2",
    gps: "12.9845543,77.5563445",
    address: {
      city: "Bengaluru",
      street: "1st link",
      locality: "Near Park",
      area_code: "560001",
      state: "Karnataka",
      name: "Anushree's Jewellery Business",
    },
    circle: {
      gps: "12.9845543,77.5563445",
      radius: {
        value: "15",
        unit: "km",
      },
    },
    time: {
      label: "enable",
      timestamp: "2024-07-02T12:06:32.685Z",
      days: "1,2,3,4,5,6,7",
      range: {
        start: "0600",
        end: "2359",
      },
      schedule: {
        holidays: [],
      },
    },
    local_id: "8c93cbd8-2890-4f1f-b44c-4aec793ed0d2",
    categories: ["Watches", "Chains", "Boots"],
    type: "polygon",
    polygons: {
      type: "Polygon",
      coordinates: [
        [
          [13.96757421292836, 77.5563445],
          [13.934078621653935, 77.79048512339652],
          [13.835874517021926, 78.00866945024426],
          [13.679654346473052, 78.19602857923516],
          [13.47606425646418, 78.33979429535411],
          [13.23897857518088, 78.43016920263169],
          [12.9845543, 78.4609944004885],
          [12.730130024819118, 78.43016920263169],
          [12.49304434353582, 78.33979429535411],
          [12.289454253526946, 78.19602857923516],
          [12.133234082978072, 78.00866945024426],
          [12.035029978346065, 77.79048512339652],
          [12.001534387071638, 77.5563445],
          [12.035029978346063, 77.32220387660347],
          [12.133234082978072, 77.10401954975573],
          [12.289454253526946, 76.91666042076483],
          [12.493044343535818, 76.77289470464588],
          [12.730130024819118, 76.6825197973683],
          [12.9845543, 76.65169459951149],
          [13.23897857518088, 76.6825197973683],
          [13.47606425646418, 76.77289470464588],
          [13.679654346473052, 76.91666042076483],
          [13.835874517021926, 77.10401954975573],
          [13.934078621653933, 77.32220387660347],
          [13.96757421292836, 77.5563445],
        ],
      ],
    },
  };
  // useEffect(() => {
  //   //fetch API
  //   // if (api_response) {
  //   //   setSeller(api_response);
  //   // }
  //   if (seller) {
  //     setSeller(seller);
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
        return <img key={key} alt="Seller" src={image} height={100} />;
      });
    }
    return <pre>{text}</pre>;
  };

  const renderData = () => {
    let data = [];
    let i = 0;
    //for flatten seller_descriptor
    for (const key in seller.seller_descriptor) {
      data.push({
        key: i++,
        field: key,
        value: seller.seller_descriptor[key],
      });
    }
    for (const property in seller) {
      if (property !== "seller_descriptor") {
        data.push({
          key: i++,
          field: property,
          value: JSON.stringify(seller[property], null, 2),
        });
      }
    }
    console.log("data", data);
    const rowStyle = { verticalAlign: "top" };
    return (
      <Table
        // width={"100%"}
        columns={columns}
        dataSource={data}
        pagination={false}
        showHeader={false}
        rowClassName={() => rowStyle}
        scroll={{ y: "63vh" }}
        onRow={() => ({
          style: rowStyle,
        })}
      />
    );
  };

  return (
    <DetailsLayout
      renderData={renderData}
      type="seller"
      id={seller.bpp_id}
      showListPage={showListPage}
    />
  );
};

export default SellerDetails;
