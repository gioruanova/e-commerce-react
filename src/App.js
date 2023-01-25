import Footer from "./components/Footer";
import { NavBar } from "./components/NavBar";
import MainContainer from "./layouts/MainContainer";

function App() {
  return (
    <>
      <NavBar />
      <MainContainer initialWelcome="Initial Welcome Testing H1" />
      <Footer />
    </>
  );
}

export default App;

