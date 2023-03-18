import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

const Contact = () => {
  const { user, setUser } = useContext(UserContext);
  return (
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
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default Contact;
