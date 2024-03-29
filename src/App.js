import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Footer from './components/layouts/Footer';
import NotFound from './pages/NotFound';
import Alert from './components/layouts/Alert'
import {PokedexProvider} from './context/pokedex/PokedexContext'
import {AlertProvider} from './context/alert/AlertContext'
function App() {
  return (
    
    <PokedexProvider>
      <AlertProvider>
      <Router>
          
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/pokemon/:entry' element={<Pokemon />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/*' element={<NotFound />}></Route>
              </Routes>
            </main>
            <Footer />
          </div>
    
        </Router>
      </AlertProvider>
    </PokedexProvider>
  );
}

export default App;
