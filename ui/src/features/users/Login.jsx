import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../../components/Logo";

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  gap: 4.4rem;

  width: 100%;
  height: 100vh;
`;

function Login() {
  return (
    <StyledLogin>
      <Logo />
      <LoginForm />
    </StyledLogin>
  );
}

export default Login;
