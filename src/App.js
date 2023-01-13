import {Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";

function App() {
  return (
    <>
    <nav>
      <img src="/logo.png" alt="Logo Kasa" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">À propos</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<Page404/>}/>
    </Routes>
    </>
  );
}

export default App;
