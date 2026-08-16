import React from "react";
// Styles
import styled from "styled-components";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Button, ButtonGroup, Container } from "react-bootstrap";
import Title from "../components/Title";
// Config
import { name, resumes } from "../config";
// Utils
import { updateTitle } from "../utils";

// #region styled-components
const StyledPage = styled.div`
  height: calc(100vh - var(--nav-height));
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  overflow: hidden;
`;

const StyledViewer = styled.div`
  flex: 1;
  min-height: 0;
  padding: 0 1rem;

  object {
    width: 100%;
    height: 100%;
    border: var(--border);
    border-radius: 0.375rem;
  }

  &:fullscreen {
    padding: 0;

    object {
      border: none;
      border-radius: 0;
    }
  }
`;
// #endregion

// #region component
const Resume = () => {
  const theme = useSelector(selectMode);
  const [active, setActive] = React.useState(0);
  const viewer = React.useRef(null);
  const current = resumes[active];

  React.useEffect(() => {
    updateTitle(`${name} | Resume`);
  }, []);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      viewer.current.requestFullscreen();
    }
  };

  return (
    <main>
      <StyledPage>
        <Container className="d-flex justify-content-center align-items-center flex-wrap gap-3 mb-3">
          <Title size={"h2"} text={"Resume"} />
          <ButtonGroup>
            {resumes.map((element, index) => {
              return (
                <Button
                  key={element.id}
                  onClick={() => setActive(index)}
                  variant={
                    index === active
                      ? theme === "light"
                        ? "dark"
                        : "light"
                      : theme === "light"
                      ? "outline-dark"
                      : "outline-light"
                  }
                >
                  {element.name}
                </Button>
              );
            })}
          </ButtonGroup>
          <Button
            onClick={toggleFullscreen}
            variant={theme === "light" ? "outline-dark" : "outline-light"}
          >
            {"Fullscreen "}
            <Icon icon="ic:round-fullscreen" />
          </Button>
          <Button
            href={current.file}
            download
            variant={theme === "light" ? "outline-dark" : "outline-light"}
          >
            {"Download "}
            <Icon icon="ic:round-download" />
          </Button>
        </Container>
        <StyledViewer ref={viewer}>
          <object
            key={current.id}
            data={current.file}
            type="application/pdf"
            aria-label={`${current.name} resume`}
          >
            <p className="text-center p-3">
              Your browser cannot display PDFs.{" "}
              <a href={current.file}>Download the resume</a> instead.
            </p>
          </object>
        </StyledViewer>
      </StyledPage>
    </main>
  );
};
// #endregion

export default Resume;
