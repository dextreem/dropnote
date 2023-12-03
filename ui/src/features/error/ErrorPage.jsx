import styled from "styled-components";
import LinkButton from "../../components/LinkButton";

const StyledErrorPage = styled.main`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  gap: 4.4rem;

  width: 100%;
  height: 100vh;
`;

function ErrorPage() {
  return (
    <StyledErrorPage>
      <h1>Oooops! Something went wrong!</h1>
      <LinkButton to="/home">Back to Main Page</LinkButton>
    </StyledErrorPage>
  );
}

export default ErrorPage;
