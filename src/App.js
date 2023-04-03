import Background from './Components/Background/Background';
import First from './Pages/First/First';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Education from './Pages/Education/Education';
import Language from './Pages/Language/Language';
import Final from './Pages/Final/Final';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Background />
        <Routes>
          <Route path='/' element={<First />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/education' element={<Education />} /> 
          <Route path='/languages' element={<Language />} /> 
          <Route path='/final' element={<Final />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
