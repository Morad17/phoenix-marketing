import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

import MainNav from "./components/MainNav";
import MobileNavbar from "./components/MobileNav";


function App() {
  return (
    <>
      <div className="">
       <MainNav />
      </div>
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
