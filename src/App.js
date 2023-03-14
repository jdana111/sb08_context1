import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useMemo } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { UserContext } from './UserContext';

function App() {
  const [value, setValue] = useState('Hello from context via useState.')
  // 1) Text-in const providerValue, 2) Swap UserContext.Provider value={providerValue}.
  // const providerValue = useMemo(() => ({ value, setValue }), [value, setValue])
  return (
    <div className="App">
        <UserContext.Provider value={{ value, setValue }}>
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