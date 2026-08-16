import React from "react";
// State
import PropTypes from "prop-types";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Link } from "react-scroll";
import { Container } from "react-bootstrap";

// #region component
const propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};

const ScrollDown = ({ to, label, className = "mt-5" }) => {
  return (
    <Container className={`text-center ${className}`}>
      <Link to={to} className="link-icons" aria-label={label ?? `Scroll to ${to}`}>
        <Icon icon="fa6-solid:circle-chevron-down" />
      </Link>
    </Container>
  );
};

ScrollDown.propTypes = propTypes;
// #endregion

export default ScrollDown;
