import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Routes, Route } from 'react-router-dom';

import ErrorFallBack from './components/ErrorFallback';
import Loading from './components/Loading';
import NotFound from './components/NotFound';
import About from './features/About/pages/About';
import MainLayout from './layouts/MainLayout';
import { sharedRef } from './utils/sharedRef';

const ProjectsComponent = lazy(
  () => import('./features/Projects/pages/Projects')
);
const ProjectDetailComponent = lazy(
  () => import('./features/Projects/pages/ProjectDetail')
);
const ContactComponent = lazy(() => import('./features/Contact/pages/Contact'));

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
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<About />} />
            <Route path='/projects' element={<ProjectsComponent />} />
            <Route path='/projects/:id' element={<ProjectDetailComponent />} />
            <Route path='/contact' element={<ContactComponent />} />
          </Route>
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
