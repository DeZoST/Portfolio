import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
