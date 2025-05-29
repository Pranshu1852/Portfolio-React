import { ErrorBoundary } from 'react-error-boundary';
import { Routes, Route } from 'react-router-dom';

import ErrorFallBack from './components/ErrorFallback';
import NotFound from './components/NotFound';
import About from './features/About/pages/About';
import Contact from './features/Contact/pages/Contact';
import ProjectDetail from './features/Projects/pages/ProjectDetail';
import Projects from './features/Projects/pages/Projects';
import MainLayout from './layouts/MainLayout';
import { sharedRef } from './utils/sharedRef';

function App() {
  return (
    <ErrorBoundary
      fallbackRender={ErrorFallBack}
      onReset={() => {
        if (sharedRef.current) {
          sharedRef.current.navigate('/');
        }
      }}
    >
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<ProjectDetail />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
