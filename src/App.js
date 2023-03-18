import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useMemo } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { UserContext } from './UserContext';

function App() {
  const [user, setUser] = useState(null)
  const value = useMemo(() => ({ user, setUser }), [user, setUser])
  return (
    <div className="App">
        <UserContext.Provider value={value}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;