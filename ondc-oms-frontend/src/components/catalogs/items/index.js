import { useState } from "react";
import ItemsList from "./itemsList";
import ItemDetails from "./itemDetails";
import { useRouter } from "next/router";

const Items = () => {
  const router = useRouter();
  const [action, setAction] = useState("list");
  const { providerID } = router.query;
  const [selectedItem, setSelectedItem] = useState(null);

  const handleViewItem = (itemId) => {
    setSelectedItem(itemId);
    setAction("view");
  };

  const handleShowListPage = () => {
    setAction("list");
  };

  switch (action) {
    case "view":
      return (
        <ItemDetails itemId={selectedItem} showListPage={handleShowListPage} />
      );
    default:
      return (
        <ItemsList handleViewItem={handleViewItem} providerID={providerID} />
      );
  }
};

export default Items;
