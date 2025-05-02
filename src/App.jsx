import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/landing.jsx';
import Gallery from './pages/gallery/gallery.jsx';
import AboutUs from './pages/aboutUs/aboutUs.jsx';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/aboutUs' element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default App
