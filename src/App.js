import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import HomePage from "./pages/HomePage/HomePage";
import UploadVideo from "./pages/UploadVideo/UploadVideo";
import './App.scss';

function App() {
  useEffect(() => {
    document.title = "BrainFlix";
  }, []);
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/video/:videoId" element={<HomePage />} />
          <Route path="/upload" element={<UploadVideo />} />
        </Routes>
    </BrowserRouter>  
    </>
  );
}

export default App;