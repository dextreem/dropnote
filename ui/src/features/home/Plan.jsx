import styled from "styled-components";
import PlanFeature from "./PlanFeature";
import Button from "../../components/Button";

const StyledPlan = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 11px;
  justify-self: end;
  padding: 2.4rem 4.6rem;
  background-color: var(--color-brand-50);
`;

const H3 = styled.h3`
  color: var(--color-brand-600);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2rem;
`;

const Price = styled.span`
  margin-bottom: 1.2rem;
  font-size: 3.6rem;
  font-weight: 600;
`;

const Subtitle = styled.p`
  margin-bottom: 1.2rem;
  font-size: 1.6rem;
  color: var(--color-grey-500);
`;

const U1 = styled.ul`
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

function Plan({ plan }) {
  const { name, price, subtitle, features, buttonText, highlight } = plan;

  return (
    <StyledPlan>
      <H3>{name}</H3>
      <p>
        <Price>{price}</Price>
        {price.toLowerCase() !== "free" && <span> / month</span>}
      </p>
      <Subtitle>{subtitle}</Subtitle>
      <U1>
        {features.map((f) => (
          <PlanFeature key={f.feature} feature={f}></PlanFeature>
        ))}
      </U1>
      {highlight ? (
        <Button>{buttonText}</Button>
      ) : (
        <Button variation="secondary">{buttonText}</Button>
      )}
    </StyledPlan>
  );
}

export default Plan;
