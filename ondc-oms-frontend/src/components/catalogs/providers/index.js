import { useState } from "react";
import ProvidersList from "./providersList";
import ProviderDetails from "./providerrDetails";
import { useRouter } from "next/router";

const Providers = ({}) => {
  const router = useRouter();
  const { sellerID } = router.query;

  const [action, setAction] = useState("list");
  const [selectedProvider, setSelectedProvider] = useState(null);

  const handleViewProvider = (providerId) => {
    setSelectedProvider(providerId);
    setAction("view");
  };

  const handleShowListPage = () => {
    setAction("list");
  };

  switch (action) {
    case "view":
      return (
        <ProviderDetails
          provider={selectedProvider}
          showListPage={handleShowListPage}
        />
      );
    default:
      return (
        <ProvidersList
          sellerID={sellerID}
          handleViewProvider={handleViewProvider}
        />
      );
  }
};

export default Providers;
