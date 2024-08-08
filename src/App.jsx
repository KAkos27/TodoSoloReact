import AddNewProject from "./components/AddNewProject/AddNewProject";
import NoProjectSelected from "./components/NoProjectSelected/NoProjectSelected";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Sidebar />
      {false ? <NoProjectSelected /> : <AddNewProject />}
    </>
  );
};

export default App;
