import { Tag } from "antd";
import { client } from "../../../utils/request";
import { showMessage, success } from "../../common/globalMessage";

export const flag = ({ type, id, errorCodes }) => {
  let data = {
    flagged: true,
    type: type,
    id: id,
    errorTag: errorCodes.map((code) => {
      return {
        // "type": "ITEM-ERROR",
        code: code,
      };
    }),
  };
  client.put(`/api/flag`, data).then((response) => {
    showMessage("success", `${type} flagged successfully!`);
  });
};

export const getSellersForDD = () => {
  return client.get(`/api/seller-ids`, {}).then((response) => {
    const api_response = response.data;
    let sellers = api_response || [];
    let options = sellers.map((seller) => {
      return {
        value: seller.id,
        label: seller.label,
      };
    });
    return options;
  });
};

export const getCitiesForDD = () => {
  return client.get(`/api/list-unique-cities`, {}).then((response) => {
    const api_response = response.data;
    let cities = api_response || [];
    let options = cities.map((city) => {
      return {
        value: city.STDCode,
        label: city.City,
      };
    });
    return options;
  });
};

export const getCategoriesForDD = () => {
  return client.get(`/api/list-unique-category`, {}).then((response) => {
    const api_response = response.data;
    return api_response;
  });
};

export const getProvidersForDD = () => {
  return client.get(`/api/provider-ids`, {}).then((response) => {
    const api_response = response.data;
    let data = api_response.providers || [];
    let options = data.map((obj) => {
      return {
        value: obj.id,
        label: obj.name,
      };
    });
    return options;
  });
};

export const getLocationsForDD = () => {
  return client.get(`/api/location-ids`, {}).then((response) => {
    const api_response = response.data;
    let data = api_response.locations || [];
    let options = data.map((obj) => {
      return {
        value: obj.id,
        label: obj.name,
      };
    });
    return options;
  });
};

export const flagTag = (v) => {
  return v ? (
    <Tag color="error">Flagged</Tag>
  ) : (
    <Tag color="success">Passed</Tag>
  );
};
