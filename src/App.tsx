import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { TestsPage } from './pages/TestsPage';
import { ProgressPage } from './pages/ProgressPage';
import { MaterialsPage } from './pages/MaterialsPage';
import { MaterialPage } from './pages/MaterialPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tests" element={<TestsPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/materials" element={<MaterialsPage />} />
          <Route path="/materials/:id" element={<MaterialPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;