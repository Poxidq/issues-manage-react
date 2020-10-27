import React, { useEffect, useState } from "react";
import axios from "axios";

import Jumbotron from "./components/Jumbotron";
import IssuesList from "./components/IssuesList";

function App() {
  const [issues, setIssues] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3003/issues").then(({ data }) => {
      setIssues(data);
    });
  }, []);

  function onAddIssues(issueStatus, issueDescInput, issueAssignedToInput) {
    axios
      .post("http://localhost:3003/issues", {
        description: issueDescInput,
        complexity: issueStatus,
        assignment: issueAssignedToInput,
        status: false,
      })
      .catch(() => {
        alert("Ошибка при добавлении списка!");
      });
    const newIssues = [
      ...issues,
      {
        complexity: issueStatus,
        description: issueDescInput,
        assignment: issueAssignedToInput,
        status: false,
      },
    ];
    setIssues(newIssues);
  }
  function onIssueDelete(issueId) {
    if (window.confirm("Вы действительно хотите удалить задачу?")) {
      const newIssues = issues.filter((issue) => issue.id !== issueId);
      setIssues(newIssues);
      axios.delete("http://localhost:3003/issues/" + issueId);
    }
  }
  function onIssueDone(issueId) {
    const newIssue = issues.map((issue) => {
      if (issueId === issue.id) {
        issue.status = true;
      }
      return issue;
    });
    setIssues(newIssue);
    axios
      .patch("http://localhost:3003/issues/" + issueId, {
        status: true,
      })
  }

  return (
    <div className="container">
      <h1 className="main-title">Отслеживание задач</h1>
      <Jumbotron onAdd={onAddIssues} />
      {issues ? (
        <IssuesList
          onDelete={onIssueDelete}
          onDone={onIssueDone}
          issues={issues}
        />
      ) : (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
}

export default App;
