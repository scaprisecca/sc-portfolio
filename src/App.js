import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './normalize.css';
import './App.css';
import Home from './pages/Home';
import MyWork from './pages/MyWork';
import Navbar from './components/Navbar';
import Projects from './data/projects.json';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mywork" element={<MyWork projects={Projects} />} />
        </Routes>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
