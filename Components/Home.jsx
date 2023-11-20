import "./Home.css";
import MainPage from "./Main/MainPage";
import AddProject from "./Main/AddProject";
import ViewProject from "./Main/ViewProjects/ViewProject";
import SideBar from "./Side/SideBar";
import { useState } from "react";

export default function Home() {
  let content;
  const [main, setMain] = useState(1);
  const [projectData, setProjectData] = useState([]);
  const [chosenProjectData, setChosenProjectData] = useState();

  function contentHandler(Input) {
    setMain(Input);
  }

  function inputHandler(Input) {
    if (projectData.length === 0) {
      setProjectData([Input]);
    } else {
      setProjectData((prevData) => {
        return [...prevData, Input];
      });
    }
  }

  function projectDataHandler(Input) {
    setChosenProjectData(Input);
  }

  switch (main) {
    case 1: {
      content = <MainPage sendBtnTrigger={contentHandler} />;
      break;
    }

    case 2: {
      content = (
        <AddProject
          sendProjectInput={inputHandler}
          sendBtnTrigger={contentHandler}
        />
      );
      break;
    }

    case 3: {
      content = <ViewProject getProjectData={chosenProjectData} />;
      break;
    }
  }
  return (
    <>
      {/*<TaskCtxt.Provider value={{ projectData, setProjectData }}></TaskCtxt.Provider>*/}
      <div className="homepage">{content}</div>
      <div className="sidebar">
        <SideBar
          sendBtnTrigger={contentHandler}
          projectList={projectData}
          chosenProjectData={projectDataHandler}
        />
      </div>
    </>
  );
}
