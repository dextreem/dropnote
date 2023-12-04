import { Link, useNavigate } from "react-router-dom";
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
/* Maybe use real react links instead of this half hacked javascript approach... */
function SmoothScrollingAnchorLink({ href, children }) {
  const navigate = useNavigate();

  function onLinkClicked(e) {
    // e.preventDefault();
    // if (!href || !((href.match(/#/g) || []).length === 1)) {
    //   console.error("No href, no or too many anchors provided.");
    //   return;
    // }
    // var [path, anchor] = href.split("#");
    // anchor = "#" + anchor;
    // if (!path) {
    //   if (anchor === "#") {
    //     window.scrollTo({
    //       top: 0,
    //       behavior: "smooth",
    //     });
    //   } else {
    //     const sectionEl = document.querySelector(anchor);
    //     sectionEl.scrollIntoView({ behavior: "smooth" });
    //   }
    // } else {
    //   navigate(path);
    //   const sectionEl = document.querySelector(anchor);
    //   sectionEl.scrollIntoView({ behavior: "smooth" });
    // }
  }

  return (
    <AnchorLink href={href} onClick={onLinkClicked}>
      {children}
    </AnchorLink>
  );
}

export { SmoothScrollingAnchorLink as AnchorLink, StyledLink };
