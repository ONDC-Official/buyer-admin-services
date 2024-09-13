import { useState } from "react";
import OrdersList from "./ordersList";
import OrderDetails from "./orderDetails";

const Orders = () => {
  const [action, setAction] = useState("list");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewOrder = (orderId) => {
    setSelectedOrder(orderId);
    setAction("view");
  };

  const handleShowListPage = () => {
    setAction("list");
  };

  switch (action) {
    case "view":
      return (
        <OrderDetails
          orderId={selectedOrder}
          showListPage={handleShowListPage}
        />
      );
    default:
      return (
        <OrdersList
          handleViewOrder={handleViewOrder}
          setSelectedOrder={setSelectedOrder}
        />
      );
  }
};

export default Orders;
