import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import UseLayoutEffectExample from './UseLayoutEffectExample/UseLayoutEffectExample';
import UseEffectExample from './UseEffectExample/UseEffectExample';

function App() {
  return (
    <div className="App">
      <div className="links">
        <Link to="useEffect">useEffect</Link>
        <Link to="useLayoutEffectExample">useLayoutEffectExample</Link>
      </div>
      <div className="app__content">
        <Routes>
          <Route path="/useEffect" element={<UseEffectExample />} />
          <Route path="/useLayoutEffectExample" element={<UseLayoutEffectExample />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
