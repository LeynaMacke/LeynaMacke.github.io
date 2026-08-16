import React from "react";
// Styles
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Config
import { socialLinks } from "../config";

// #region styled-components
const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;
// #endregion

// #region component
const SocialLinks = () => {
  return (
    <StyledSocialLinks>
      {socialLinks.map((element) => {
        return (
          <a
            key={element.id}
            href={element.url}
            aria-label={element.label}
            className="link-icons"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon={element.icon} />
          </a>
        );
      })}
    </StyledSocialLinks>
  );
};
// #endregion

export default SocialLinks;
