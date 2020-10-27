import React from "react";

function IssuesList({ issues, onDone, onDelete }) {
  return (
    <div className="col-lg-12">
      <div id="issuesList">
        {issues &&
          issues.map((issue, index) => {
            return (
              <div className="well" key={index}>
                <h6>Номер задачи: {issue.id}</h6>
                <p>
                  <span className={`label label-info ${issue.status ? "success" : ""}`}>{issue.status ? "Завершено" : "Активно"}</span>
                </p>
                <h3>{issue.description}</h3>
                <p>
                  <span className="glyphicon glyphicon-time"></span>
                  {issue.complexity}
                </p>
                <p>
                  <span className="glyphicon glyphicon-user"></span>
                  {issue.assignment}
                </p>
                <button onClick={() => onDone(issue.id)} className="btn btn-warning">
                  Завершено
                </button>
                <button onClick={() => onDelete(issue.id)} className="btn btn-danger">Удалить</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default IssuesList;