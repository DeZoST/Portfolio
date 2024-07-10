import Section from "../section/Section";
import styles from "./About.module.css";

const About = () => {
  return (
    <Section title="À PROPOS">
      <div className={styles.aboutContent}>
        <div className={styles.photo}>PHOTO</div>
        <p className={styles.description}>
          Texte qui décrit Texte qui décrit Texte qui décrit Texte qui décrit
          Texte qui décrit Texte qui décrit Texte qui décrit Texte qui décrit
        </p>
      </div>
    </Section>
  );
};

export default About;
