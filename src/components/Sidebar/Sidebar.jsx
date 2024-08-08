import "./Sidebar.css";

const Sidebar = ({ onStartNewProject }) => {
  return (
    <div className="side-bar">
      <h2>Feladatok</h2>
      <button
        className="side-bar__add-button"
        onClick={() => onStartNewProject(null)}
      >
        + Feladat hozzáadása
      </button>
      <button className="side-bar__button">feladat</button>
      <button className="side-bar__button">feladat</button>
      <button className="side-bar__button">feladat</button>
    </div>
  );
};

export default Sidebar;
