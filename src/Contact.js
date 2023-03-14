import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

const Contact = () => {
  const { value, setValue } = useContext(UserContext);
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
      <div>{value}</div>
    </div>
  );
};

export default Contact;
