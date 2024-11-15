import React from 'react'
import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import LanderPage from './components/landingpage/LanderPage';
import { AppProvider } from './context/AppContext';
function App() {
  return (
    <AppProvider>
    <BrowserRouter future={{ v7_startTransition: true }}>
    <Routes>
    <Route path="/" element={<LanderPage />} />
    </Routes>
    </BrowserRouter>
    </AppProvider>
  )
}

export default App