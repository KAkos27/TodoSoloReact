import "./SelectedProject.css";

const SelectedProject = ({ project, onDeleteProject }) => {
  return (
    <div className="selected-project">
      <h1>{project.title}</h1>
      <button onClick={onDeleteProject}>
        <strong>Törlés</strong>
      </button>
      <p className="selected-project__due-date">{project.dueDate}</p>
      <strong className="selected-project__description">
        {project.description}
      </strong>
    </div>
  );
};
export default SelectedProject;
