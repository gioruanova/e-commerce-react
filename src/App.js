import Footer from "./components/Footer/Footer";
import { NavBar } from "./components/navbar/NavBar";
import MainContainer from "./components/Container/MainContainer";


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



