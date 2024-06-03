// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookCollection from './components/BookCollection';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <Router>
      <div className="app-content">
        <Routes>
          <Route path="/" element={<BookCollection />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
