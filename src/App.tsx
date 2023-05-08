import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import UseStateExample from './useStateExample/UseStateExample';

function App() {
  return (
    <div className="App">
      <div className="links">
        <Link to="useState">useState</Link>
      </div>
      <div className="app__content">
        <Routes>
          <Route path="/useState" element={<UseStateExample />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
