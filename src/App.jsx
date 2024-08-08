import { useState } from "react";
import AddNewProject from "./components/AddNewProject/AddNewProject";
import NoProjectSelected from "./components/NoProjectSelected/NoProjectSelected";
import Sidebar from "./components/Sidebar/Sidebar";
import SelectedProject from "./components/SelectedProject/SelectedProject";

const App = () => {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    subProjects: [],
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
    };

    setProjectsState((prevProjects) => {
      return {
        ...prevProjects,
        selectedProjectId: id,
        projects: [...prevProjects.projects, newProject],
        subProjects: [...prevProjects.subProjects, { id: id, titles: [] }],
      };
    });
  };

  const handleAddNewTask = () => {};

  console.log(projectsState);

  const titles = projectsState.subProjects.find(
    (task) => task.id === projectsState.selectedProjectId
  );

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let contentToDisplay = (
    <SelectedProject
      project={selectedProject}
      subProjects={projectsState.subProjects}
      titles={titles}
      onAddNewTask={handleAddNewTask}
    />
  );

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
        onSelectProject={handleSelections}
      />
      {contentToDisplay}
    </>
  );
};

export default App;
