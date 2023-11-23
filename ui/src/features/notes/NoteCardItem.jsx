import styled from "styled-components";
import { HiHandThumbUp } from "react-icons/hi2";

const StyledNoteCardItem = styled.div`
  padding: 2rem;
  /* border: 2px solid var(--color-grey-100); */
  box-shadow: 0 2px 4px var(--color-grey-100);
  border-radius: var(--border-radius-lg);
  background-color: var(--color-grey-200);
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;
`;

const Title = styled.div`
  align-items: start;
  margin-bottom: 1rem;
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

const TitleText = styled.h4`
  align-items: start;
  font-size: 1.4rem;
  color: var(--color-grey-500);
  margin-bottom: 1rem;
`;

const User = styled.span`
  font-size: 1.2rem;
  color: var(--color-grey-400);
`;

// const Text = styled.p`
//   font-size: 1.8rem;
//   margin-bottom: 2rem;
// `;

const Footer = styled.footer`
  font-size: 1.4rem;
  color: var(--color-grey-500);
  justify-self: end;
  display: flex;
  justify-content: space-between;
`;

const Like = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

function NoteCardItem({ item }) {
  const { title, text, id, lat, long, created_at, user_name, dist_meters } =
    item;

  return (
    <StyledNoteCardItem>
      <Title>
        <TitleText>
          ({id}) {title}
        </TitleText>
        <User>{user_name}</User>
      </Title>
      {/* <Text>{text}</Text> */}
      <Footer>
        <Like>
          <HiHandThumbUp />
          <span>&nbsp;Like</span>
        </Like>
        <div>
          {/* <span>{created_at.split("T")[0].replaceAll("-", ".")}</span> */}
          {/* &nbsp;at&nbsp; */}
          <span>
            {/* {lat}/{long}  */}
            {Math.floor(dist_meters)}m
          </span>
        </div>
      </Footer>
    </StyledNoteCardItem>
  );
}

export default NoteCardItem;
