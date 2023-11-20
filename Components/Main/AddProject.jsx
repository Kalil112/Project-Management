import { useRef } from "react";
import "./AddProject.css";
export default function AddProject({ sendProjectInput, sendBtnTrigger }) {
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();

  function saveHandler(event) {
    event.preventDefault();
    const projectData = {
      key: Math.random().toFixed(2),
      title: titleRef.current.value,
      desc: descRef.current.value,
      date: dateRef.current.value,
      tasks: []
    };
    titleRef.current.value = "";
    descRef.current.value = "";
    dateRef.current.value = "";
    sendProjectInput(projectData);
  }

  function returnHandler() {
    sendBtnTrigger(1);
  }
  return (
    <>
      <form onSubmit={saveHandler}>
        <div>
          <div id="btnDiv">
            <button type="reset" onClick={returnHandler}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>

          <div className="form-div">
            <label>TITLE</label>
            <input type="text" ref={titleRef} required />
          </div>

          <div className="form-div">
            <label>DESCRIPTION</label>
            <textarea
              id="txtArea"
              rows="5"
              cols="52"
              ref={descRef}
              required
            ></textarea>
          </div>

          <div className="form-div">
            <label>DUE DATE</label>
            <input type="date" ref={dateRef} required />
          </div>
        </div>
      </form>
    </>
  );
}
