export const getFiltersURLOptions = (filters) => {
  let filter_str = "";
  if (filters) {
    if (filters.searchText) {
      filter_str = filter_str + "&search=" + filters.searchText;
    }
    if (filters.selectedSeller) {
      filter_str = filter_str + "&SellerId=" + filters.selectedSeller;
    }
    if (filters.dateRange.length > 0) {
      filter_str =
        filter_str +
        "&startTime=" +
        filters.dateRange[0].format("YYYY-MM-DD HH:mm:ss.SSSZ");
      filter_str =
        filter_str +
        "&endTime=" +
        filters.dateRange[1].format("YYYY-MM-DD HH:mm:ss.SSSZ");
    }
  }
  return filter_str;
};
