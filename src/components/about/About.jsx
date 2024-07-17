import Section from "../section/Section";
import styles from "./About.module.css";
import BackButton from "../back-button/BackButton";
import PropTypes from "prop-types";

const About = ({ onBack }) => {
  return (
    <>
      <BackButton onBack={onBack} className={styles.about__backButton} />
      <Section title="À PROPOS" className={styles.about__section}>
        <div className={styles.photo}>PHOTO</div>
        <p className={styles.description}>
          Texte qui décrit Texte qui décrit Texte qui décrit Texte qui décrit
          Texte qui décrit Texte qui décrit Texte qui décrit Texte qui décrit
        </p>
      </Section>
    </>
  );
};

About.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default About;
