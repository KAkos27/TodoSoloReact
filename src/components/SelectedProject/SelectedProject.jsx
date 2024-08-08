import { useRef } from "react";

const SelectedProject = ({ project, subProjects, titles, onAddNewTask }) => {
  const taskName = useRef();

  return (
    <div className="selected-project">
      <h1>{project.title}</h1>
      <p>{project.dueDate}</p>
      <p>{project.description}</p>
      <h2>Feladatok</h2>
      <input ref={taskName} type="text" />
      <button onClick={() => onAddNewTask(taskName.current.value)}>
        Feladat hozzáadása
      </button>
      {subProjects.length > 0 ? (
        titles.titles.map((title) => <div key={titles.id}>{title}</div>)
      ) : (
        <p>Nincsenek még feladatok</p>
      )}
    </div>
  );
};

export default SelectedProject;
