import noProjectImg from "/src/assets/no_project_selected.svg";
import "./NoProjectSelected.css";

const NoProjectSelected = ({ onStartNewProject }) => {
  return (
    <div className="no-project-selected">
      <img src={noProjectImg} />
      <h1>Nincs kiválasztva projekt</h1>
      <p>
        <strong>Válassz ki egy projektet, vagy készíts egy újat!</strong>
      </p>
      <button onClick={() => onStartNewProject(null)}>
        Projekt létrehozása
      </button>
    </div>
  );
};

export default NoProjectSelected;
