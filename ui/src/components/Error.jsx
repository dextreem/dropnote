const funnyMessages = [
  "Oh no, it looks like we've lost the trail!",
  "Oops, we took a wrong turn at the last fork!",
  "Yikes, we've hit a dead end. Time to backtrack!",
  "Well, this is a rocky situation... Let's try that again.",
  "Looks like our compass is acting up. Let's find our way!",
  "Hmm, maybe the map is upside down? Let's give it another shot.",
  "Oh deer, we’ve spooked the app. Let’s not panic and retry!",
];

function Error({ errorMessage }) {
  const randomMessage =
    funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
  return (
    <div className="error-container">
      <h1>🗺️ Trail Error!</h1>
      <p className="funny-message">{randomMessage}</p>
      <p className="error-details">Details: {errorMessage}</p>
      <button onClick={() => window.location.reload()} className="retry-button">
        🥾 Try Again
      </button>
    </div>
  );
}

export default Error;
