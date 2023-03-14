import { Link } from "react-router-dom";

const Contact = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <h1>Contact</h1>
  </div>
);

export default Contact;
