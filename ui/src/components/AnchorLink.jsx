import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const LinkStyle = css`
  margin: 0;
  padding: 0;

  cursor: pointer;

  &:hover {
    color: var(--color-brand-600);
  }
`;

const AnchorLink = styled.a`
  ${LinkStyle}
`;

const StyledLink = styled(Link)`
  ${LinkStyle}
`;

/* TODO: Move to other page, if href starts with / and differs from current path */
function SmoothScrollingAnchorLink({ href, children }) {
  function onLinkClicked(e) {
    e.preventDefault();

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <AnchorLink href={href} onClick={onLinkClicked}>
      {children}
    </AnchorLink>
  );
}

export { SmoothScrollingAnchorLink as AnchorLink, StyledLink };
