import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TakeQuiz } from './components/TakeQuiz';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { Results } from './components/Results';
import { CreateQuiz } from './components/CreateQuiz';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/take-quiz" element={<TakeQuiz />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create-quiz" element={<CreateQuiz />} />
      <Route path="/results" element={<Results />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;