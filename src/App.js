import Header from "../src/components/Header"
import About from "../src/components/About"
import Gallery from "./components/Gallery"
import Skill from "../src/components/Skill"
import Footer from "../src/components/Footer"
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <Header />
      {/* <Gallery /> */}
      <About />
      <Skill />
      <Footer />
    </>
  );
}

export default App;
