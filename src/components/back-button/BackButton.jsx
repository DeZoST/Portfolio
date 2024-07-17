import PropTypes from "prop-types";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./BackButton.module.css";

const BackButton = ({ onBack }) => {
  return (
    <button className={styles.back_button} onClick={onBack}>
      <FaArrowLeft className={styles.back_icon} />
      Retour
    </button>
  );
};

BackButton.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default BackButton;
