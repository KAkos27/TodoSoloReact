import { useState } from "react";
import AddNewProject from "./components/AddNewProject/AddNewProject";
import NoProjectSelected from "./components/NoProjectSelected/NoProjectSelected";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const [projects, setProjects] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleSelections = (id) => {
    setProjects((prevPojects) => {
      return {
        ...prevPojects,
        selectedProjectId: id,
      };
    });
  };

  let contentToDisplay;

  if (projects.selectedProjectId === undefined) {
    contentToDisplay = (
      <NoProjectSelected onStartNewProject={handleSelections} />
    );
  } else if (projects.selectedProjectId === null) {
    contentToDisplay = <AddNewProject onCancelNewProject={handleSelections} />;
  }

  return (
    <>
      <Sidebar onStartNewProject={handleSelections} />
      {contentToDisplay}
    </>
  );
};

export default App;
