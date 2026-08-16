import React from "react";
// Styles
import styled from "styled-components";
// Components
import { Element } from "react-scroll";
import { Col, Container, Ratio, Row } from "react-bootstrap";
import Title from "./Title";
import ScrollDown from "./ScrollDown";
// Config
import { videoData } from "../config";

// #region styled-components
const StyledDiv = styled.div`
  iframe {
    border: var(--border);
    border-radius: 0.375rem;
  }
`;
// #endregion

// #region component
const Videos = () => {
  return (
    <Element name={"Videos"} id="videos">
      <section className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Videos"} />
          </Container>
          <Row xs={1} lg={2} className="g-4 justify-content-center">
            {videoData.map((element, index) => {
              return (
                <Col key={`${element.id}-${index}`}>
                  <StyledDiv>
                    <Ratio aspectRatio="16x9">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${element.id}`}
                        title={element.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </Ratio>
                    <p className="text-center mt-2">{element.title}</p>
                  </StyledDiv>
                </Col>
              );
            })}
          </Row>
          <ScrollDown to="Contact" />
        </Container>
      </section>
    </Element>
  );
};
// #endregion

export default Videos;
