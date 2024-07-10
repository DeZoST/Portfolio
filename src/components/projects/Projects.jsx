import Section from "../section/Section";
import ProjectCard from "./project-card/ProjectCard";
import styles from "./Projects.module.css";

const Projects = () => {
  const projectList = [
    { title: "Projet 1", description: "Description du projet 1" },
    { title: "Projet 2", description: "Description du projet 2" },
    { title: "Projet 3", description: "Description du projet 3" },
  ];

  return (
    <Section title="PROJETS">
      <div className={styles.projectList}>
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
