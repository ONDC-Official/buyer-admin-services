import { Col, Divider, Row, Card } from "antd";
const { Meta } = Card;

const CustomCard = ({ key, img, title, onClick, item }) => {
  return (
    <Card
      key={key}
      hoverable
      style={{
        width: 150,
        margin: "6px",
      }}
      // onClick={() => handleViewItem(item.id)}
      cover={
        // eslint-disable-next-line @next/next/no-img-element
        <img
          style={{ width: "100%", height: "150px", objectFit: "cover" }}
          alt={img}
          src={img}
          height={100}
          onClick={() => onClick(item.id)}
        />
      }
    >
      <Meta
        // title={item.descriptor.name}
        description={<span style={{ color: "black" }}>{title}</span>}
      />
    </Card>
  );
};

export default CustomCard;
