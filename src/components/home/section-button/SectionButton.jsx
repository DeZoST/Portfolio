import PropTypes from "prop-types";

import styles from "./SectionButton.module.css";

const SectionButton = ({ label, onClick, icon: IconComponent }) => {
  return (
    <button className={styles.section__button} onClick={onClick}>
      <IconComponent className={styles.icon} />
      <span>{label}</span>
    </button>
  );
};

SectionButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.func.isRequired,
};

export default SectionButton;
