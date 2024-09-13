import { Select, Table } from "antd";
import { useEffect, useState } from "react";
import { client } from "../../../utils/request";
import DetailsLayout from "../common/detailsLayout";

const ItemDetails = ({ itemId, showListPage }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    client.get(`/api/item-details?id=${itemId}`, {}).then((response) => {
      const api_response = response.data;
      let items = api_response?.count > 0 ? api_response.data : [];
      setItem(api_response.item_details);
    });
  }, []);

  const columns = [
    {
      title: "Field",
      dataIndex: "field",
      key: "field",
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
        return <img key={key} alt="Item" src={image} height={100} />;
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
    //for flatten item_descriptor
    for (const key in item.descriptor) {
      data.push({
        key: i++,
        field: key,
        value: item.descriptor[key],
      });
    }
    for (const property in item) {
      if (property !== "descriptor" && property !== "symbol") {
        data.push({
          key: i++,
          field: property,
          value: JSON.stringify(item[property], null, 2),
        });
      }
    }
    const rowStyle = { verticalAlign: "top" };
    return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        showHeader={false}
        rowClassName={() => rowStyle}
        onRow={() => ({
          style: rowStyle,
        })}
      />
    );
  };

  return (
    <DetailsLayout
      type="item"
      id={itemId}
      renderData={renderData}
      showListPage={showListPage}
    />
  );
};

export default ItemDetails;
