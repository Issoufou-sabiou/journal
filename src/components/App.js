import React from 'react';
import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRouter from './NoteComponent/AppRouter';

function App() {
  return (
    <div className="main">
      <AppRouter />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={App} />
          <Route path="/communaute" element={CommunautePage} />
          <Route path="/communaute" element={CommunautePage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
