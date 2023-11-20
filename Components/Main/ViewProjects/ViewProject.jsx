import "./ViewProject.css";
import Tasks from "./Tasks";
import { useState } from "react";
import { TaskCtxt } from "../../../src/store/TaskContext";

export default function ViewProject({ getProjectData }) {
  const [render, setRender] = useState();

  function listTrigger(Input) {
    getProjectData.tasks.push(Input);
    setRender(Input);
  }
  return (
    <div className="project">
      <div id="container">
        <div class="d-flex">
          <h1 id="project-title">{getProjectData.title}</h1>
          <button id="btn-project-dlt">Delete</button>
        </div>
        <p id="project-date">{getProjectData.date}</p>
        <p id="project-desc">{getProjectData.desc}</p>
        <hr />
        <h1>Tasks</h1>
        <Tasks taskList={getProjectData.tasks} sendTask={listTrigger} />
      </div>
    </div>
  );
}
