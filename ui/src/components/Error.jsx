import styled from "styled-components";
import Button from "./Button";

const funnyMessages = [
  "Oh no, it looks like we've lost the trail!",
  "Oops, we took a wrong turn at the last fork!",
  "Yikes, we've hit a dead end. Time to backtrack!",
  "Well, this is a rocky situation... Let's try that again.",
  "Looks like our compass is acting up. Let's find our way!",
  "Hmm, maybe the map is upside down? Let's give it another shot.",
  "Oh deer, we’ve spooked the app. Let’s not panic and retry!",
];

const ErrorComponent = styled.div`
  display: grid;
  gap: 1.2rem;
`;

function Error({ errorMessage }) {
  const randomMessage =
    funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
  return (
    <ErrorComponent>
      <h1>🗺️ Trail Error!</h1>
      <p>{randomMessage}</p>
      <p>Details: {errorMessage}</p>
      <Button onClick={() => window.location.reload()}>🥾 Try Again</Button>
    </ErrorComponent>
  );
}

export default Error;
