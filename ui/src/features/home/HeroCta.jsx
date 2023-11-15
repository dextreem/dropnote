import styled from "styled-components";
import Button from "../../components/Button";

const StyledHeroCta = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  justify-content: center;
`;

function HeroCta() {
  return (
    <StyledHeroCta>
      <Button>Start an Adventure</Button>
      <Button variation="secondary">Learn more</Button>
    </StyledHeroCta>
  );
}

export default HeroCta;
