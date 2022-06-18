import About from "./components/about/About";
import "./App.css";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Project from "./components/projects/Project";
import Service from "./components/service/Service";

function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Service />
       <Project />
       <Blog />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
