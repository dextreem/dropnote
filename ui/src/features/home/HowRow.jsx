import styled, { css } from "styled-components";
import HowImg from "./HowImg";

const Div = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  align-items: center;
  gap: 3.2rem;
`;

const numberPositions = {
  left: css`
    grid-area: 1 / 1 / 3 / 2;
  `,
  right: css`
    grid-area: 1 / 2 / 3 / 3;
  `,
};

const Number = styled.p`
  font-size: 8.6rem;
  color: var(--color-grey-400);
  /* color: var(--color-brand-600); */
  ${(props) => numberPositions[props.variant]}
`;

Number.defaultProps = {
  variant: "left",
};

const Title = styled.h3`
  color: var(--color-brand-600);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 3.6rem;
`;

const Text = styled.p`
  font-size: 1.8rem;
`;

function HowRow({ row }) {
  const { number, title, text, img, alt, inverted = false } = row;
  return (
    <>
      {inverted && <HowImg img={img} alt={alt} />}
      <Div>
        <Number variant={inverted ? "right" : "left"}>{number}</Number>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Div>
      {!inverted && <HowImg img={img} alt={alt} />}
    </>
  );
}

export default HowRow;
