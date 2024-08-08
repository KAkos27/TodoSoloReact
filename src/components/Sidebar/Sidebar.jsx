import "./Sidebar.css";

const Sidebar = ({ onStartNewProject, projects }) => {
  return (
    <div className="side-bar">
      <h2>Projektek</h2>
      <button
        className="side-bar__add-button"
        onClick={() => onStartNewProject(null)}
      >
        + Projekt hozzáadása
      </button>
      {projects.length > 0 &&
        projects.map((project) => (
          <button key={project.id} className="side-bar__button">
            {project.title}
          </button>
        ))}
    </div>
  );
};

export default Sidebar;
