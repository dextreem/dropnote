import styled from "styled-components";

const P = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-brand-600);
`;

const H2 = styled.h2`
  font-size: 5rem;
  margin-bottom: 9.6rem;
`;

const PlansSection = styled.section`
  background-color: var(--color-brand-100);
  margin-bottom: 9.6rem;
  padding: 9.6rem 4.8rem;
`;

const StyledPlans = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  column-gap: 6.4rem;
  row-gap: 9.6rem;
  align-items: center;
`;

function Plans() {
  return (
    <PlansSection>
      <P>Plans</P>
      <H2>Leave footprints for free</H2>
      <StyledPlans>
        <div>Plan 1</div>
        <div>Plan 2</div>
        <div>Plan 3</div>
      </StyledPlans>
    </PlansSection>
  );
}

export default Plans;
