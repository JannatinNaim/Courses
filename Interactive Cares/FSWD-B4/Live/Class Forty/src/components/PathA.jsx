import { Link } from "react-router-dom";

function PathA() {
  return (
    <div>
      <h2>Heyo! I'm Path A.</h2>

      <Link to="/">Root</Link>
    </div>
  );
}

export default PathA;
