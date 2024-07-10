import PropType from "prop-types";
import styles from "./SkillCard.module.css";

const SkillCard = ({ name }) => {
  return (
    <div className={styles.skillCard}>
      <span>{name}</span>
    </div>
  );
};

SkillCard.propTypes = {
  name: PropType.string.isRequired,
};

export default SkillCard;
