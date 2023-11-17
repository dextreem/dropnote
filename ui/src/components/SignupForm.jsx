import styled from "styled-components";
import FormRowVertical from "./FormRowVertical";
import Button from "./Button";
import Input from "./Input";

const Container = styled.div`
  margin: 0 auto;
  max-width: 80rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 3.2rem;
  border-radius: 10px;

  padding: 4rem;
  background-color: var(--color-brand-200);
`;

const SignupButton = styled(Button)`
  align-self: end;
`;

function SignupForm() {
  return (
    <Container>
      <FormRowVertical label="Username">
        <Input id="username"></Input>
      </FormRowVertical>
      <FormRowVertical label="Email">
        <Input id="email"></Input>
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input id="password"></Input>
      </FormRowVertical>

      <SignupButton>Sign Up</SignupButton>
    </Container>
  );
}

export default SignupForm;
