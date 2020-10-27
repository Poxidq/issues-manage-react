import React, { useEffect, useState } from "react";
import axios from 'axios'

function IssuesList() {
  const [issues, setIssues] = useState()

  useEffect(() => {
    axios
      .get("http://localhost:3003/issues")
      .then(({ data }) => {
        setIssues(data);
      });
  }, []);

  console.log(issues)

  return (
    <div className="col-lg-12">
      <div id="issuesList"></div>
    </div>
  );
}

export default IssuesList;
