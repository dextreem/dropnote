import styled from "styled-components";
import HowRow from "./HowRow";

import howToSteps from "../../static/data/howTo";

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

const HowSection = styled.section`
  background-color: var(--color-brand-50);
  /* margin-bottom: 9.6rem; */
  padding: 9.6rem 4.8rem;
`;

const HowToSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  column-gap: 6.4rem;
  row-gap: 9.6rem;
  align-items: center;
`;

function How() {
  return (
    <HowSection>
      <P>How it works</P>
      <H2>Leave a digital footprint in 3 simple steps</H2>
      <HowToSteps>
        {howToSteps.map((h) => (
          <HowRow key={h.number} row={h} />
        ))}
      </HowToSteps>
    </HowSection>
  );
}

export default How;
