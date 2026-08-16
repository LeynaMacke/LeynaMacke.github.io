import React from "react";
import styled from "styled-components";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
import PropTypes from "prop-types";
// Router
import { Link, useLocation } from "react-router-dom";
// Components
import { Link as ScrollLink } from "react-scroll";
import { Container, Nav, Navbar } from "react-bootstrap";
import ThemeToggle from "./ThemeToggle";

// #region constants
const navLinks = {
  routes: [
    { id: "1R", name: "Home", route: "/" },
    { id: "2R", name: "Resume", route: "/Resume" },
  ],
  to: [
    { id: "1T", name: "Home", to: "Home" },
    { id: "2T", name: "About Me", to: "About" },
    { id: "5T", name: "Videos", to: "Videos" },
    { id: "6T", name: "Contact", to: "Contact" },
  ],
};
// #endregion

// #region styled-components
const StyledDiv = styled.div`
  .navbar {
    border-bottom: var(--border);
  }

  .spacer {
    height: var(--nav-height);
  }
`;
// #endregion

// #region component
const propTypes = {
  callBack: PropTypes.func,
  closeDelay: PropTypes.number,
};

const NavBar = ({ callBack, closeDelay = 125 }) => {
  const theme = useSelector(selectMode);
  const [isExpanded, setisExpanded] = React.useState(false);
  const { pathname } = useLocation();

  return (
    <StyledDiv>
      <div className="spacer" />
      <Navbar
        id="nav"
        collapseOnSelect={true}
        expand="xl"
        expanded={isExpanded}
        bg={theme === "light" ? "light" : "dark"}
        variant={theme === "light" ? "light" : "dark"}
        fixed="top"
      >
        <Container>
          <Navbar.Toggle
            className="ms-auto"
            aria-controls="responsive-navbar-nav"
            onClick={() => setisExpanded(!isExpanded)}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              {pathname === "/"
                ? navLinks.to.map((el) => {
                    return (
                      <Nav.Item key={el.id}>
                        <ScrollLink
                          to={el.to}
                          spy={true}
                          activeClass="active"
                          className="nav-link"
                          onClick={() => {
                            setTimeout(() => {
                              setisExpanded(false);
                            }, closeDelay);
                          }}
                        >
                          {el.name}
                        </ScrollLink>
                      </Nav.Item>
                    );
                  })
                : navLinks.routes.map((el) => {
                    return (
                      <Nav.Item key={el.id}>
                        <Link
                          to={el.route}
                          className={
                            pathname === el.route
                              ? "nav-link active"
                              : "nav-link"
                          }
                          onClick={() => {
                            setTimeout(() => {
                              setisExpanded(false);
                            }, closeDelay);
                          }}
                        >
                          {el.name}
                        </Link>
                      </Nav.Item>
                    );
                  })}
              {pathname === "/" && (
                <Nav.Item>
                  <Link
                    to="/Resume"
                    className="nav-link"
                    onClick={() => {
                      setTimeout(() => {
                        setisExpanded(false);
                      }, closeDelay);
                    }}
                  >
                    Resume
                  </Link>
                </Nav.Item>
              )}
            </Nav>
            <Nav className="ms-auto">
              <ThemeToggle
                closeDelay={closeDelay}
                setExpanded={setisExpanded}
                setTheme={callBack}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledDiv>
  );
};

NavBar.propTypes = propTypes;
// #endregion

export default NavBar;
