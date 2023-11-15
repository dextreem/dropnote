import styled from "styled-components";
import HeroText from "./HeroText";
import HeroImg from "./HeroImg";

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 9.6rem;
  /* align-items: center; */
  justify-content: space-between;
  min-height: 90vh;

  background-color: var(--color-brand-100);

  /* margin-bottom: 9.6rem; */
  padding: 9.6rem 4.8rem;

  /* background-image: url("/hero_4.jpg");
  background-size: 100% auto; */
`;

function Hero() {
  return (
    <HeroSection>
      <HeroText />
      <HeroImg />
    </HeroSection>
  );
}

export default Hero;
