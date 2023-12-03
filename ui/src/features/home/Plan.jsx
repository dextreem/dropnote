import styled, { css } from "styled-components";
import PlanFeature from "./PlanFeature";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const StyledPlan = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 11px;
  justify-self: end;
  padding: 2.4rem 4.6rem;
  background-color: var(--color-brand-50);

  overflow: hidden;
  ${(props) =>
    props.active === "false" &&
    css`
      filter: grayscale(1);

      &::after {
        content: "Coming Soon";
        position: absolute;
        top: 7%;
        right: -28%;

        text-transform: uppercase;
        font-size: 1.4rem;
        font-weight: 700;
        color: #333;
        background-color: var(--color-brand-200);
        padding: 1rem 8rem;
        transform: rotate(45deg);
      }
    `};
`;

StyledPlan.defaultProps = {
  active: "true",
};

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
  const navigate = useNavigate();

  const {
    name,
    price,
    subtitle,
    features,
    buttonText,
    buttonGoTo,
    highlight,
    active,
  } = plan;

  function onCtaClicked() {
    navigate(buttonGoTo);
  }

  return (
    <StyledPlan active={active.toString()}>
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
        <Button onClick={onCtaClicked} disabled={!active}>
          {buttonText}
        </Button>
      ) : (
        <Button onClick={onCtaClicked} variation="secondary" disabled={!active}>
          {buttonText}
        </Button>
      )}
    </StyledPlan>
  );
}

export default Plan;
