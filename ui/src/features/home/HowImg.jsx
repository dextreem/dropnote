import styled from "styled-components";

const Img = styled.img``;

function HowImg({ img, alt }) {
  return <Img src={img} alt={alt} />;
}

export default HowImg;
