import HomePage from './pages/home/homepage';
import Artigo from './pages/noticia/pg'
import { BrowserRouter,Route, Router, Routes  } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artigo" element={<Artigo />} />
      </Routes>
    </BrowserRouter>
      
  )
}

export default App;
