import styled from "styled-components";
import LoginForm from "./LoginForm";

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

function Login() {
  return (
    <StyledLogin>
      <LoginForm />
    </StyledLogin>
  );
}

export default Login;
