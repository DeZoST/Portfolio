import Section from "../section/Section";
import SkillCard from "./skills-card/SkillCard";
import styles from "./Skills.module.css";

const Skills = () => {
  const skillsList = [
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "Node.js" },
    { name: "Tailwind CSS" },
  ];

  return (
    <Section title="COMPÉTENCES">
      <div className={styles.skillsList}>
        {skillsList.map((skill, index) => (
          <SkillCard key={index} name={skill.name} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
