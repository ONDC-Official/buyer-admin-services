import { useState } from "react";
import SellersList from "./sellersList";
import SellerDetails from "./sellerDetails";

const Sellers = () => {
  const [action, setAction] = useState("list");
  const [selectedSeller, setSelectedSeller] = useState(null);

  const handleViewSeller = (sellerId) => {
    setSelectedSeller(sellerId);
    setAction("view");
  };

  const handleShowListPage = () => {
    setAction("list");
  };

  switch (action) {
    case "view":
      return (
        <SellerDetails
          seller={selectedSeller}
          showListPage={handleShowListPage}
        />
      );
    default:
      return <SellersList handleViewSeller={handleViewSeller} />;
  }
};

export default Sellers;
