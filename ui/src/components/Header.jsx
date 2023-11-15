import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";

const StyledHeader = styled.header`
  background: var(--color-grey-100);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;
`;

const NavBar = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: center;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: center;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <NavBar>
        <NavList>
          <li>Nav 1</li>
          <li>Nav 2</li>
          <li>Nav 3</li>
        </NavList>
        <DarkModeToggle />
      </NavBar>
    </StyledHeader>
  );
}

export default Header;
