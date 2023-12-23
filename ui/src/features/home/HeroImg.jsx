import styled from "styled-components";

const StyledHeroImg = styled.img`
  max-height: 95%;
`;

function HeroImg() {
  return (
    <StyledHeroImg
      src="/location_app.svg"
      alt="Illustration of a person sitting on a location marker on a map."
    />
    // <StyledHeroImg
    //   src="/hero_5.jpg"
    //   alt="A male person using the application in a forest."
    // />
  );
}

export default HeroImg;
