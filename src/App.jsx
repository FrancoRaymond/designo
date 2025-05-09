import React,{useState, useEffect, createContext, useContext} from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Contacts from './pages/Contacts';
import Footer from './components/Footer';
import WebDesignPage from './pages/WebDesignPage';
import AppDesignPage from './pages/AppDesignPage';
import GraphicDesignPage from './pages/GraphicDesignPage';
import About from './pages/About';

const AppContext = createContext()

function App() {
  const [size, setSize] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setSize(window.innerWidth);
        if (window.innerWidth >= 640) {
          setIsMenuOpen(false);
        }
      };

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
      document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
      return () => {
        document.body.style.overflow = 'auto';
      };
  }, [isMenuOpen]);
 
  return (
    <AppContext.Provider value={{size, setIsMenuOpen, isMenuOpen}}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/locations' element={<Locations/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/WebDesignPage' element={<WebDesignPage/>}/>
        <Route path='/AppDesignPage' element={<AppDesignPage/>}/>
        <Route path='/GraphicDesignPage' element={<GraphicDesignPage/>}/>
      </Routes>
      <Footer />
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
};

export default App;