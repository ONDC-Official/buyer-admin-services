import { useState } from "react";
import ReturnsList from "./returnsList";
import ReturnDetails from "./returnDetails";

const Returns = () => {
  const [action, setAction] = useState("list");
  const [selectedReturn, setSelectedReturn] = useState(null);

  const handleViewReturnOrder = (returnId) => {
    setSelectedReturn(returnId);
    setAction("view");
  };

  const handleShowListPage = () => {
    setAction("list");
  };

  switch (action) {
    case "view":
      return (
        <ReturnDetails
          returnId={selectedReturn}
          showListPage={handleShowListPage}
        />
      );
    default:
      return (
        <ReturnsList
          handleViewReturnOrder={handleViewReturnOrder}
          setSelectedReturn={setSelectedReturn}
        />
      );
  }
};

export default Returns;
