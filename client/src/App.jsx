import HomePage from './pages/HomePage/HomePage.jsx';
import CreatorStreamPage from "./pages/CreatorStreamPage/CreatorStreamPage.jsx";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from './components/Footer/Footer.jsx';
import AccordionMenu from './components/AccordionMenu/AccordionMenu.jsx';


function App() {

  return (
    
      <Router  
        future={{
          v7_relativeSplatPath: true,
          }}>

        <Header />
        <AccordionMenu/>
        <Routes>
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="stream" element={<CreatorStreamPage />} />
        </Routes>

        <Footer />

      </Router>

    
  )
}
export default App;