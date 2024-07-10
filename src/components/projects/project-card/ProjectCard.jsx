import PropType from "prop-types";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ title, description }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.image}>IMAGE</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropType.string.isRequired,
  description: PropType.string.isRequired,
};

export default ProjectCard;
