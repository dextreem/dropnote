import styled from "styled-components";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import Spinner from "./Spinner";
import { useUser } from "../features/users/useUser";

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
          <li>Nav 1</li>
          <li>Nav 2</li>
          {!isLoading && !isAuthenticated && <LoginButton />}
          {!isLoading && isAuthenticated && <LogoutButton />}
          {isLoading && <Spinner />}
          {user?.email || "anon"}
        </NavList>
        <DarkModeToggle />
      </NavBar>
    </StyledHeader>
  );
}

export default Header;
