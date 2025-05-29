import { Routes, Route } from 'react-router-dom';

import NotFound from './features/About/components/NotFound';
import About from './features/About/pages/About';
import Contact from './features/Contact/pages/Contact';
import ProjectDetail from './features/Projects/pages/ProjectDetail';
import Projects from './features/Projects/pages/Projects';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectDetail />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
