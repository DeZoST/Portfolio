import PropType from "prop-types";
import SectionButton from "./section-button/SectionButton";
import { FaInfo, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa";
import styles from "./Home.module.css";

const Home = ({ setCurrentSection }) => {
  return (
    <section className={`${styles.home__section} container`}>
      <nav className={styles.home__buttons_container}>
        <SectionButton
          label="À Propos"
          onClick={() => setCurrentSection("about")}
          icon={FaInfo}
        />
        <SectionButton
          label="Compétences"
          onClick={() => setCurrentSection("skills")}
          icon={FaTools}
        />
      </nav>
      <div>
        <h1 className={styles.home__title}>ALEXIS</h1>
        <h2 className={styles.home__subtitle}>Développeur Front-End</h2>
      </div>

      <nav className={styles.home__buttons_container}>
        <SectionButton
          label="Projets"
          onClick={() => setCurrentSection("projects")}
          icon={FaProjectDiagram}
        />
        <SectionButton
          label="Contact"
          onClick={() => setCurrentSection("contact")}
          icon={FaEnvelope}
        />
      </nav>
    </section>
  );
};

Home.propTypes = {
  setCurrentSection: PropType.func.isRequired,
};

export default Home;
