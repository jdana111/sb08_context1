import React, { useContext} from 'react';
import { UserContext } from './UserContext';
import { Link } from "react-router-dom";

const About = () => {
  const msg = useContext(UserContext);
  return  (
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
      <div>{msg}</div>
    </div>
  );
    
}

export default About;
