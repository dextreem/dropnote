import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1>Page not Found 😥</h1>
      <p>
        Bring me back to the <Link to="/">main page</Link>
      </p>
    </div>
  );
}

export default PageNotFound;
