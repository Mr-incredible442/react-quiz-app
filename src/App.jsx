//import { useState } from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';
import Easy from './components/Easy';
import Hard from './components/Hard';
import Medium from './components/Medium';
import Home from './components/Home';

function App() {
  //const [count, setCount] = useState(0);
  const location = useLocation();

  window.document.title =
    'Qz Quiz - ' +
    location.pathname.substring(1).charAt(0).toUpperCase() +
    location.pathname.substring(2);
  if (location.pathname == '/') {
    window.document.title = 'Qz Quiz';
  }
  return (
    <>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/easy' element={<Easy />} />
        <Route path='/medium' element={<Medium />} />
        <Route path='/hard' element={<Hard />} />
      </Routes>
    </>
  );
}

export default App;
