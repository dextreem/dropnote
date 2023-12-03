import styled from "styled-components";

import plans from "../../static/data/pricing";
import Plan from "./Plan";

const PlansSection = styled.section`
  background-color: var(--color-brand-100);
  padding: 9.6rem 4.8rem;
  text-align: center;
`;

const P = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-brand-600);
`;

const H2 = styled.h2`
  font-size: 5rem;
  margin-bottom: 9.6rem;
`;

const StyledPlans = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.plans}, 1fr);

  column-gap: 4.4rem;
  align-items: center;
  max-width: 100rem;
  margin: 0 auto;
`;

function Plans() {
  return (
    <PlansSection id="plans">
      <P>Plans</P>
      <H2>Leave footprints for free</H2>
      <StyledPlans plans={plans?.length || 0}>
        {plans.map((p) => (
          <Plan key={p.name} plan={p} />
        ))}
      </StyledPlans>
    </PlansSection>
  );
}

export default Plans;
