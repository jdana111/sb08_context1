import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import { login } from "./login";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
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
      {/* pre, async, await */}
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button onClick={() => setUser(null)}>Logout</button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Home;
