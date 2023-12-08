
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/HomePage/LandingPage';
import Footer from '../src/components/Footer/Footer';

const App = () => {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App
