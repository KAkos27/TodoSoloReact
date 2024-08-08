import noProjectImg from "/src/assets/no_project_selected.svg";
import "./NoProjectSelected.css";

const NoProjectSelected = () => {
  return (
    <div className="no-project-selected">
      <img src={noProjectImg} />
      <h1>Nincs kiválasztva feladat</h1>
      <p>
        <strong>Válassz ki egy feladatot, vagy készíts egy újat!</strong>
      </p>
      <button>Feladat létrehozása</button>
    </div>
  );
};

export default NoProjectSelected;
