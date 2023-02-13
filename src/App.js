import Footer from "./components/Footer/Footer";
import { NavBar } from "./components/navbar/NavBar";
import MainContainer from "./components/Container/MainContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;



