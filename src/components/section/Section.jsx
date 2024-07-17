import PropTypes from "prop-types";
import styles from "./Section.module.css";

const Section = ({ title, className, children }) => {
  return (
    <section className={`section ${className} container`}>
      <h2 className={styles.section__title}>{title}</h2>
      <div className={styles.section__content}>{children}</div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Section;
