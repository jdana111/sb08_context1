import { Link } from "react-router-dom";
import "./App.css";

const Contact = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <h1>Contact</h1>
  </div>
);

export default Contact;
