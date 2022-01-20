import { useContext } from "react";
import About from "./components/intro/about/About.jsx";
import Intro from "./components/intro/intro/Intro";
import ProductList from "./components/intro/productsList/ProductList.jsx";
import Contact from "./components/intro/contact/Contact"
import Toogle from "./components/intro/toggle/Toogle"
import { ThemeContext } from "./Context.js";

function App() {
const theme = useContext(ThemeContext)
const darkMode = theme.state.darkMode


  return (
    <div style={{backgroundColor:darkMode ? "#222" : "white", color:darkMode && "white"}} >
    <Toogle />
      <Intro />
      <About />
      <ProductList/>
      <Contact />
    </div>
  );
}

export default App;
