import { useState } from "react";
import AddNewProject from "./components/AddNewProject/AddNewProject";
import NoProjectSelected from "./components/NoProjectSelected/NoProjectSelected";
import Sidebar from "./components/Sidebar/Sidebar";
import SelectedProject from "./components/SelectedProject/SelectedProject";

const App = () => {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
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
        tasks: [...prevProjects.tasks, { id: id, titles: [] }],
      };
    });
  };

  const handleAddNewTask = (title) => {
    if (title.trim() === "") {
      return;
    }

    const titleIndex = projectsState.tasks.findIndex(
      (task) => task.id === projectsState.selectedProjectId
    );

    setProjectsState((prevProjects) => {
      const copiedTasks = [...prevProjects.tasks];
      const updatedTasks = [title, ...copiedTasks[titleIndex].titles];
      //hozzáadáskor törlődik az id az objektumból és array lesz belőle, ami nem jó
      return {
        ...prevProjects,
        tasks: updatedTasks,
      };
    });
  };

  const selectedTasks = projectsState.tasks.find(
    (task) => task.id === projectsState.selectedProjectId
  );

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  console.log(projectsState);

  if (projectsState.tasks.length > 0) {
    console.log("tasks:");
    console.log(selectedTasks);
  }

  let contentToDisplay = (
    <SelectedProject
      project={selectedProject}
      tasks={projectsState.tasks}
      selectedTasks={selectedTasks}
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
