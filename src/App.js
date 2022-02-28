import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tour from './pages/Tour';
import SearchAppBar from './components/AppBar';

function App() {

  return <BrowserRouter>

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/:id" element={<Tour />} />
    </Routes>
  </BrowserRouter>
}

export default App;
