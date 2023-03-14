import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    <h1>Home</h1>
  </div>
);

export default Home;
