import { useRef } from "react";

import "./AddNewProject.css";

const AddNewProject = ({ onCancelNewProject, onSaveNewProject }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  return (
    <div className="add-new-project">
      <div className="menu">
        <button
          className="cancel-button"
          onClick={() => onCancelNewProject(undefined)}
        >
          <strong>Mégse</strong>
        </button>
        <button
          className="save-button"
          onClick={() =>
            onSaveNewProject(
              title.current.value,
              description.current.value,
              dueDate.current.value
            )
          }
        >
          <strong>Mentés</strong>
        </button>
      </div>
      <div className="input-elements">
        <label>
          <strong>Cím</strong>
        </label>
        <input ref={title} type="text" maxLength={20} />
        <label>
          <strong>Leírás</strong>
        </label>
        <textarea ref={description} maxLength={373} />
        <label>
          <strong>Határidő</strong>
        </label>
        <input ref={dueDate} type="date" />
      </div>
    </div>
  );
};

AddNewProject.displayName = "AddNewProject";

export default AddNewProject;
