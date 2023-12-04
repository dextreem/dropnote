import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  color: var(--color-grey-700);
  background-color: var(--color-brand-100);
  font-size: 1.4rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <p>
        &copy;<span> WanderTag 2023. All rights reserved.</span>
      </p>
    </StyledFooter>
  );
}

export default Footer;
