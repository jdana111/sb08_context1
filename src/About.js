import { Link } from "react-router-dom";

const About = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    <h1>About</h1>
  </div>
);

export default About;
