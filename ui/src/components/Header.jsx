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

  const isLoginPage = window.location.pathname === "/login";
  const isHomePage = window.location.pathname === "/home";
  const isNotesPage = window.location.pathname === "/notes";
  const isSignupPage = window.location.pathname === "/signup";

  return (
    <StyledHeader>
      <Logo />
      <NavBar>
        <NavList>
          {isHomePage && (
            <li>
              <AnchorLink href="/home#how">How it Works</AnchorLink>
            </li>
          )}
          {isHomePage && (
            <li>
              <AnchorLink href="/home#plans">Plans</AnchorLink>
            </li>
          )}
          {!isNotesPage && <StyledLink to="/notes">Notes</StyledLink>}
          {isHomePage && !isSignupPage && (
            <li>
              <AnchorLink href="/home#signup">Sign Up</AnchorLink>
            </li>
          )}
          {isLoginPage || (!isLoading && !isAuthenticated && <LoginButton />)}
          {isLoading && <Spinner />}
          {/* {user?.email || "anon"} */}
          {user?.email}
          {!isLoading && isAuthenticated && <LogoutButton />}
        </NavList>
        <DarkModeToggle />
      </NavBar>
    </StyledHeader>
  );
}

export default Header;
