import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from './components/Footer/Footer.jsx';
import { HomePage } from './pages/HomePage/HomePage.jsx';


function App() {

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>

        <Footer />
      </Router>

    </>
  )
}
export default App;