import { useState } from "react";
import SettlementsList from "./settlementsList";
import SettlementDetails from "./settlementDetails";

const Settlements = () => {
  const [action, setAction] = useState("list");
  const [selectedSettlement, setSelectedSettlement] = useState(null);

  const handleViewSettlement = (settlementId) => {
    setSelectedSettlement(settlementId);
    setAction("view");
  };

  const handleShowListPage = () => {
    setAction("list");
  };

  switch (action) {
    case "view":
      return (
        <SettlementDetails
          settlementId={selectedSettlement}
          showListPage={handleShowListPage}
        />
      );
    default:
      return (
        <SettlementsList
          handleViewSettlement={handleViewSettlement}
          setSelectedSettlement={setSelectedSettlement}
        />
      );
  }
};

export default Settlements;
