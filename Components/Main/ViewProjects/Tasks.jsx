import "./Tasks.css";
import { useRef } from "react";
export default function Tasks({ taskList, sendTask }) {
  const taskName = useRef();

  function taskSubmitHandler(event) {
    event.preventDefault();
    if (taskName.current.value === "") {
      console.log("No data");
      return;
    } else {
      sendTask("add", taskName.current.value);
      taskName.current.value = "";
    }
  }

  function taskClearHandler(Input) {
    sendTask("delete", Input);
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
        <ul className="task-list__items">
          {taskList.map((element, index) => {
            return (
              <li className="task-list__item">
                {element}
                <button
                  onClick={() => {
                    taskClearHandler(index);
                  }}
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      </form>
    </>
  );
}
