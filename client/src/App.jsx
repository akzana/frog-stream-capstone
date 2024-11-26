import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from './components/Footer/Footer.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';


export default function App() {

  return (
    <BrowserRouter>      
      <Header />
      <Routes>
        <Route path="/" element={HomePage}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}