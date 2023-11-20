import "./MainPage.css";
export default function MainPage(props) {
  function btnTrigger() {
    props.sendBtnTrigger(2);
  }
  return (
    <div>
      <p>No Projects Selected</p>
      <p className="home-desc">
        Select a project or get started with a new one
      </p>
      <button onClick={btnTrigger}>Create a new project</button>
    </div>
  );
}
