import styled from "styled-components";
import HeroCta from "./HeroCta";

const StyledHeroText = styled.div`
  /* color: var(--color-grey-fixed-dark); */
`;

const H1 = styled.h1`
  text-transform: uppercase;
  margin-bottom: 4.8rem;
  font-size: 4.4rem;
`;

const P = styled.p`
  font-size: 1.8rem;
  margin-bottom: 4.8rem;
  padding: 3.2rem;

  /* background: var(--color-background-grey-opaque-fixed-light); */
`;

const Span = styled.span`
  /* color: var(--color-brand-fixed-medium); */
`;

function HeroText() {
  return (
    <StyledHeroText>
      <H1>Share tales where your footsteps become stories on maps</H1>
      <P>
        Welcome to <strong>WanderTag</strong>, where the great outdoors meets
        digital discovery! Embark on a journey of exploration, as your passions
        and geolocation converge. Leave virtual notes that come to life only
        when others venture into the same physical space. Uncover hidden gems,
        share your outdoor wisdom, and forge connections with like-minded
        adventurers. &nbsp;<Span>Your next adventure starts here.</Span>
      </P>
      <HeroCta />
    </StyledHeroText>
  );
}

export default HeroText;
