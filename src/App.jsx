import { useRef, useState } from "react";

import Modal from "./components/Modal/Modal";
import AddNewProject from "./components/AddNewProject/AddNewProject";
import NoProjectSelected from "./components/NoProjectSelected/NoProjectSelected";
import Sidebar from "./components/Sidebar/Sidebar";
import SelectedProject from "./components/SelectedProject/SelectedProject";

const App = () => {
  const taskText = useRef();
  const modal = useRef();

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
      modal.current.showModal();
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
        selectedProjectId: id,
        projects: [...prevProjects.projects, newProject],
      };
    });
  };

  const handleAddNewTask = () => {
    const text = taskText.current.value;
    taskText.current.value = "";

    if (text.trim() === "") {
      modal.current.showModal();
      return;
    }

    const selectedProjectIndex = projectsState.projects.findIndex(
      (project) => project.id === projectsState.selectedProjectId
    );

    const id = Math.random();

    const newTask = {
      id: id,
      text: text,
    };

    const updatedTasks = [
      newTask,
      ...projectsState.projects[selectedProjectIndex].tasks,
    ];

    const updatedProjects = [...projectsState.projects];
    updatedProjects[selectedProjectIndex].tasks = [...updatedTasks];

    setProjectsState((prevPojects) => {
      return {
        ...prevPojects,
        projects: [...updatedProjects],
      };
    });
  };

  const handleDeleteProject = () => {
    const updatedProjects = projectsState.projects.filter(
      (project) => project.id !== projectsState.selectedProjectId
    );

    setProjectsState((prevPojects) => {
      return {
        ...prevPojects,
        selectedProjectId: undefined,
        projects: [...updatedProjects],
      };
    });
  };

  const handleDeleteTask = (taskId) => {
    const selectedProjectIndex = projectsState.projects.findIndex(
      (project) => project.id === projectsState.selectedProjectId
    );

    const updatedTasks = projectsState.projects[
      selectedProjectIndex
    ].tasks.filter((task) => task.id !== taskId);

    const updatedProjects = [...projectsState.projects];
    updatedProjects[selectedProjectIndex].tasks = [...updatedTasks];

    setProjectsState((prevPojects) => {
      return {
        ...prevPojects,
        projects: [...updatedProjects],
      };
    });
  };

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let contentToDisplay = (
    <SelectedProject
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
      onAddNewTask={handleAddNewTask}
      onDeleteTask={handleDeleteTask}
      ref={taskText}
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

      <Modal ref={modal} buttonCaption={"Rendben"}>
        <h2>Valami nem jó</h2>
        <p>Úgy néz ki az egyik mezőt üresen hagytad</p>
      </Modal>
      {contentToDisplay}
    </>
  );
};

export default App;
