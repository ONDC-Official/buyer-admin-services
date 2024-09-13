import { useState } from "react";
import IssuesList from "./issuesList";
import IssueDetails from "./issueDetails";

const Issues = () => {
  const [action, setAction] = useState("list");
  const [selectedIssue, setSelectedIssue] = useState(null);

  const handleViewIssue = (issueId) => {
    setSelectedIssue(issueId);
    setAction("view");
  };

  const handleShowListPage = () => {
    setAction("list");
  };

  switch (action) {
    case "view":
      return (
        <IssueDetails
          issueId={selectedIssue}
          showListPage={handleShowListPage}
        />
      );
    default:
      return (
        <IssuesList
          handleViewIssue={handleViewIssue}
          setSelectedIssue={setSelectedIssue}
        />
      );
  }
};

export default Issues;
