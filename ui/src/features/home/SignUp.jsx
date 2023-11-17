import styled from "styled-components";
import SignupForm from "../../components/SignupForm";

const SignUpSection = styled.section`
  background-color: var(--color-brand-50);
  padding: 9.6rem 4.8rem;
`;

const P = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-brand-600);
  text-align: center;
`;

const H2 = styled.h2`
  font-size: 5rem;
  margin-bottom: 9.6rem;
  text-align: center;
`;

// const FormContainer = styled(Form)`
//   margin: 0 auto;
//   max-width: 80rem;
// `;

function SignUp() {
  return (
    <SignUpSection>
      <P>Sign Up</P>
      <H2>Start your adventure here</H2>
      <SignupForm />
    </SignUpSection>
  );
}

export default SignUp;
