import "./Tasks.css";
import { useRef } from "react";
export default function Tasks({ taskList, sendTask }) {
  const taskName = useRef();

  function taskSubmitHandler(event) {
    event.preventDefault();
    sendTask(taskName.current.value);
  }

  return (
    <>
      {/*Updating the list */}
      <form id="task-form" onSubmit={taskSubmitHandler}>
        <div className="task-div">
          <input type="text" id="task-name" ref={taskName} />
          <button type="submit" className="task-btn">
            Add Task
          </button>
        </div>

        {/* Displays list data from taskList(may be a seperate Component)*/}
        <ul>
          {taskList.map((element) => {
            return (
              <li>
                {element}
                <button>Clear</button>
              </li>
            );
          })}
        </ul>
      </form>
    </>
  );
}
