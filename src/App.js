import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<Page404/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
