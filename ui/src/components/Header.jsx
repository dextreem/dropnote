import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import Button from "./Button";
import LoginForm from "../features/users/LoginForm";
import Modal from "./Modal";

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

function LoginButton() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="login-form">
          <Button>Login</Button>
        </Modal.Open>
        <Modal.Window name="login-form">
          <LoginForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <NavBar>
        <NavList>
          <li>Nav 1</li>
          <li>Nav 2</li>
          <LoginButton />
        </NavList>
        <DarkModeToggle />
      </NavBar>
    </StyledHeader>
  );
}

export default Header;
