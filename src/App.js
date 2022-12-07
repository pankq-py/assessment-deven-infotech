import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { AllTabs } from './Components/AllTabs';
import { SignIn } from './Components/SignIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/alltabs" element={<AllTabs />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
