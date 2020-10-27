import React from "react";

import Jumbotron from "./components/Jumbotron"
import IssuesList from "./components/IssuesList"

function App() {
  return (
    <div className="container">
      <h1 className="main-title">Отслеживание задач</h1>
      <Jumbotron />
      <IssuesList />
    </div>
  );
}

export default App;
