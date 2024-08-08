import "./AddNewProject.css";

const AddNewProject = ({ onCancelNewProject, onSaveNewProject }) => {
  return (
    <div className="add-new-project">
      <div className="menu">
        <button
          className="cancel-button"
          onClick={() => onCancelNewProject(undefined)}
        >
          <strong>Mégse</strong>
        </button>
        <button className="save-button" onClick={onSaveNewProject}>
          <strong>Mentés</strong>
        </button>
      </div>
      <div className="input-elements">
        <label>Cím</label>
        <input type="text" />
        <label>Leírás</label>
        <textarea />
        <label>Határidő</label>
        <input type="date" />
      </div>
    </div>
  );
};

export default AddNewProject;
