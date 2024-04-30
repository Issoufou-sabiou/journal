import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/NoteComponent/AppRouter';
import CommunautePage from './components/NoteComponent/CommunautePage';
import { BrowserRouter,Route , Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/CommunautePage" element={<CommunautePage />} />
    <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter> 
  </React.StrictMode>
  </>
 
);

reportWebVitals();