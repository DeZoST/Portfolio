import Section from "../section/Section";
import SkillCard from "./skills-card/SkillCard";
import styles from "./Skills.module.css";
import BackButton from "../back-button/BackButton";
import PropTypes from "prop-types";

const Skills = ({ onBack }) => {
  const skillsList = [
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "Node.js" },
    { name: "Tailwind CSS" },
  ];

  return (
    <>
      <BackButton onBack={onBack} />
      <Section title="COMPÉTENCES">
        <div className={styles.skillsList}>
          {skillsList.map((skill, index) => (
            <SkillCard key={index} name={skill.name} />
          ))}
        </div>
      </Section>
    </>
  );
};

Skills.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default Skills;
