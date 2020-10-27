import React, { useState } from "react";

function Jumbotron({ onAdd }) {
  const [issueStatus, setIssueComplexity] = useState("Легко");
  const [issueDescInput, setIssueDescInput] = useState("");
  const [issueAssignedToInput, setIssueAssignedToInput] = useState("");

  const statusesList = ["Легко", "Нормально", "Сложно"];

  function inputValueChange(event) {
    const eventId = event.target.id;
    const eventValue = event.target.value;
    if (eventId === "issueDescInput") {
      setIssueDescInput(eventValue);
    } else if (eventId === "issueAssignedToInput") {
      setIssueAssignedToInput(eventValue);
    } else if (eventId === "issueSeverityInput") {
      setIssueComplexity(eventValue);
    } else {
      alert("Ошибка при обработке события");
    }
  }

  function handleSubmit(event) {
    if (issueDescInput !== "" ) {
      if(issueAssignedToInput !== ""){
        onAdd(issueStatus, issueDescInput, issueAssignedToInput);
        clearForm();
      } else {
        alert("Вы не назначили исполнителя");
      }
    } else {
      alert("Вы не описали задачу");
    }
    event.preventDefault();
  }

  function clearForm() {
    setIssueComplexity("Легко");
    setIssueDescInput("");
    setIssueAssignedToInput("");
  }

  return (
    <div className="jumbotron">
      <h3>Создать новую задачу:</h3>
      <form onSubmit={handleSubmit} id="issueInputForm">
        <div className="form-group">
          <label htmlFor="issueDescInput">Описание</label>
          <input
            value={issueDescInput}
            onChange={inputValueChange}
            type="text"
            className="form-control"
            id="issueDescInput"
            placeholder="Опишите задачу ..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="issueSeverityInput">Сложность</label>
          <select
            onChange={inputValueChange}
            value={issueStatus}
            id="issueSeverityInput"
            className="form-control"
          >
            <option value={statusesList[0]}>Легко</option>
            <option value={statusesList[1]}>Нормально</option>
            <option value={statusesList[2]}>Сложно</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="issueAssignedToInput">Кому назначена</label>
          <input
            value={issueAssignedToInput}
            onChange={inputValueChange}
            type="text"
            className="form-control"
            id="issueAssignedToInput"
            placeholder="Введите имя ..."
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Добавить
        </button>
      </form>
    </div>
  );
}

export default Jumbotron;
