import Section from "../section/Section";
import styles from "./Contact.module.css";
import BackButton from "../back-button/BackButton";
import PropTypes from "prop-types";

const Contact = ({ onBack }) => {
  return (
    <>
      <BackButton onBack={onBack} />
      <Section title="CONTACT">
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </Section>
    </>
  );
};

Contact.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default Contact;
