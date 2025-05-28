import { Routes, Route } from 'react-router-dom';

import About from './features/About/pages/About';
import Contact from './features/Contact/pages/Contact';
import Projects from './features/Projects/pages/Projects';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
