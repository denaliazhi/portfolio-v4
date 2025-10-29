import PropTypes from "prop-types";

function Sample({ name }) {
  return <div>{name}</div>;
}

Sample.propTypes = {
  name: PropTypes.string.isRequired,
};

Sample.defaultProps = {
  name: "Bob",
};

export default Sample;
