import styled from "styled-components";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import Spinner from "./Spinner";
import { useUser } from "../features/users/useUser";
import { AnchorLink, StyledLink } from "./AnchorLink";

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
  const { user, isAuthenticated, isLoading } = useUser();

  return (
    <StyledHeader>
      <Logo />
      <NavBar>
        <NavList>
          <li>
            <AnchorLink href="#how">How it Works</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#plans">Plans</AnchorLink>
          </li>
          <StyledLink to="/notes">Notes</StyledLink>
          <li>
            <AnchorLink href="#signup">SignUp</AnchorLink>
          </li>
          {!isLoading && !isAuthenticated && <LoginButton />}
          {isLoading && <Spinner />}
          {user?.email || "anon"}
          {!isLoading && isAuthenticated && <LogoutButton />}
        </NavList>
        <DarkModeToggle />
      </NavBar>
    </StyledHeader>
  );
}

export default Header;
