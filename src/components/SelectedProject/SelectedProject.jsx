import { useRef } from "react";

const SelectedProject = ({ project, tasks, selectedTasks, onAddNewTask }) => {
  const taskName = useRef();
  const key = Math.random();

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
      {selectedTasks.titles.length > 0 && tasks.length > 0 ? (
        selectedTasks.titles.map((title) => <div key={key}>{title}</div>)
      ) : (
        <p>Nincsenek még feladatok</p>
      )}
    </div>
  );
};

export default SelectedProject;
