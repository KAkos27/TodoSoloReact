import { useState } from "react";
import AddNewProject from "./components/AddNewProject/AddNewProject";
import NoProjectSelected from "./components/NoProjectSelected/NoProjectSelected";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleSelections = (id) => {
    setProjectsState((prevPojects) => {
      return {
        ...prevPojects,
        selectedProjectId: id,
      };
    });
  };

  const handleSaveProject = (title, description, dueDate) => {
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueDate.trim() === ""
    ) {
      return;
    }

    const id = Math.random();

    const newProject = {
      id: id,
      title: title,
      description: description,
      dueDate: dueDate,
      tasks: [],
    };

    setProjectsState((prevProjects) => {
      return {
        ...prevProjects,
        projects: [...prevProjects.projects, newProject],
      };
    });
  };

  console.log(projectsState);

  let contentToDisplay;

  if (projectsState.selectedProjectId === undefined) {
    contentToDisplay = (
      <NoProjectSelected onStartNewProject={handleSelections} />
    );
  } else if (projectsState.selectedProjectId === null) {
    contentToDisplay = (
      <AddNewProject
        onCancelNewProject={handleSelections}
        onSaveNewProject={handleSaveProject}
      />
    );
  }

  return (
    <>
      <Sidebar
        onStartNewProject={handleSelections}
        projects={projectsState.projects}
      />
      {contentToDisplay}
    </>
  );
};

export default App;
