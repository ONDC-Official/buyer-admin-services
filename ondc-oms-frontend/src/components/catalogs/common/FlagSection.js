import { useEffect, useState } from "react";
import { Button, Checkbox, Typography } from "antd";
import { flag } from "./util";
import { client } from "../../../utils/request";
const { Title } = Typography;

const FlagSection = ({ closeFlagSection, type, id }) => {
  const [errorCodes, setErrorCodes] = useState([]);

  const fetchExistingFlagDetails = () => {
    client.get(`/api/flag?type=${type}&id=${id}`, {}).then((response) => {
      const api_response = response.data;

      let errors = api_response[0].error_tag.map((tag) => Number(tag.code));
      setErrorCodes(errors);
    });
  };

  useEffect(() => {
    fetchExistingFlagDetails();
  }, []);

  const errors = ERRORS[type] || [];

  const save_flag = () => {
    flag({
      type: type,
      id: id,
      errorCodes: errorCodes,
    });
    closeFlagSection();
  };

  return (
    <div style={{ borderLeft: "2px solid #F1F3F5" }}>
      <div
        style={{
          marginLeft: "10px",
          paddingLeft: "10px",
          maxHeight: "60vh",
          overflow: "auto",
          background: "white",
          paddingTop: "5px",
        }}
      >
        <Title level={5}>Please select following appropriate errors</Title>

        <Checkbox.Group
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
          value={errorCodes}
          onChange={(v) => setErrorCodes(v)}
        >
          {errors.map((option) => (
            <Checkbox
              key={option.value}
              value={option.value}
              style={{ marginTop: "10px", marginLeft: "8px", fontSize: "15px" }}
            >
              {option.label}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "unset",
          width: "100%",
          marginTop: "10px",
        }}
      >
        <div className="m-5">
          <Button
            type="primary"
            onClick={() => errorCodes.length > 0 && save_flag()}
            danger
          >
            Flag {type}
          </Button>
        </div>
        <div>
          <Button type="primary" onClick={() => closeFlagSection()}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

const ERRORS = {
  seller: [
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
  ],
  provider: [
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
      label:
        "Store Category mapping sent empty or unavailable at Buyer App side",
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
  ],
  item: [
    {
      value: 91001,
      label: "Item price > MRP",
    },
    {
      value: 91002,
      label: "Use of restrictive keywords",
    },
    {
      value: 91003,
      label: "No Images found",
    },
    {
      value: 91004,
      label: "Duplicate Images Found",
    },
    {
      value: 91005,
      label: "Low quality Image Found",
    },
    {
      value: 91006,
      label: "Image Title Mismatch",
    },
    {
      value: 91007,
      label: "Other Mandatory/Statutory Field not there",
    },
    {
      value: 91008,
      label: "Duplicate Product",
    },
    {
      value: 91010,
      label: "Price is Zero",
    },
    {
      value: 91011,
      label: "Incorrect Image File Format",
    },
    {
      value: 91012,
      label: "Country of Origin not present (For Packaged Products)",
    },
    {
      value: 91013,
      label: "Net Quantity not present",
    },
    {
      value: 91014,
      label: "FSSAI/Statutory requirement not present (For packaged products)",
    },
    {
      value: 91015,
      label: "BIS Mark not present",
    },
    {
      value: 91016,
      label: "Product miscategorized",
    },
    {
      value: 91017,
      label: "Others - Add specific Error Description",
    },
    {
      value: 91018,
      label: "Available quantity for the SKU is either absent or invalid",
    },
    {
      value: 91019,
      label: "Category for the SKU does not exist",
    },
    {
      value: 91020,
      label: "The parameters for customisation of SKU are not shared",
    },
    {
      value: 91021,
      label: "Category field is missing",
    },
    {
      value: 91022,
      label: "Customer care contact details missing",
    },
    {
      value: 91023,
      label: "MRP less than zero",
    },
    {
      value: 91024,
      label: "Price less than zero",
    },
    {
      value: 91025,
      label: "Item status sent by Seller NP is unavailable",
    },
    {
      value: 91026,
      label: "Invalid Item ID",
    },
    {
      value: 91027,
      label: "Invalid Service Provider ID",
    },
    {
      value: 91028,
      label: "Customisation not present",
    },
    {
      value: 91029,
      label: "Invalid customisation group",
    },
  ],
};

export default FlagSection;
