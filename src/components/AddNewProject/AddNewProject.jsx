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
        <label>Cím</label>
        <input ref={title} type="text" />
        <label>Leírás</label>
        <textarea ref={description} />
        <label>Határidő</label>
        <input ref={dueDate} type="date" />
      </div>
    </div>
  );
};

export default AddNewProject;
