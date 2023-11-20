import "./SideBar.css";
export default function SideBar({
  sendBtnTrigger,
  projectList,
  chosenProjectData
}) {
  function BtnTrigger() {
    sendBtnTrigger(2);
  }

  function projectBtnHandler(Input) {
    chosenProjectData(Input);
    sendBtnTrigger(3);
  }
  return (
    <>
      <p className="sidebar-header">YOUR PROJECTS</p>
      <button onClick={BtnTrigger}>+ Add Project</button>

      <ul>
        {projectList.map((element) => {
          return (
            <li>
              <button
                className="project-list"
                onClick={() => {
                  projectBtnHandler(element);
                }}
              >
                {element.title}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
