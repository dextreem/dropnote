import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  cursor: pointer;
`;

const Img = styled.img`
  height: 4.8rem;
`;

const Span = styled.span`
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-brand-700);
  font-family: "Lobster", sans-serif;
`;

function Logo() {
  const navigate = useNavigate();

  function onLogoClicked() {
    navigate("/home");
  }

  return (
    <StyledLogo role="img" alt="WanderTag Logo" onClick={onLogoClicked}>
      <Img src="/logo.svg" alt="WanderTag Logo - Icon"></Img>
      <Span>WanderTag</Span>
    </StyledLogo>
  );
}

export default Logo;
