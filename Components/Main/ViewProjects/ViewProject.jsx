import "./ViewProject.css";
import Tasks from "./Tasks";
import { useState } from "react";

export default function ViewProject({ getProjectData,sendDeleteIndex }) {
  const [render, setRender] = useState();

  function listTrigger(operation,Input) {
    if(operation==="add"){
      getProjectData.tasks.push(Input);
    }
    if(operation==="delete"){
      getProjectData.tasks.splice(Input,1);
    }

    setRender(Math.random());
  }

  function deleteHandler(){
    sendDeleteIndex(getProjectData.key);
  }
  return (
    <div className="project">
      <div id="container">
        <div class="d-flex">
          <h1 id="project-title">{getProjectData.title}</h1>
          <button id="btn-project-dlt" onClick={deleteHandler}>Delete</button>
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
