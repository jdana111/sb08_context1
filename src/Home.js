import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { value, setValue } = useContext(UserContext);
  return (
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
      <div>{value}</div>
      <button onClick={() => setValue('Hello from Home.')}>Set Value</button>
    </div>
  );
};

export default Home;
