import "./toogle.css"
import sun from "../../../img/sun.png"
import moon from "../../../img/moon.png"
import { ThemeContext } from "../../../Context"
import { useContext } from "react"

function Toogle() {
   const theme = useContext(ThemeContext)
   const darkMode = theme.state.darkMode

   function onclick(){
      theme.dispatch({type:"TOGGLE"})
   }

    return (
        <div className="t">
        <img src={sun} alt="sun" className="t-icon"  />
        <img src={moon} alt="moon" className="t-icon"  />
        <div className="t-button" onClick={onclick} style={{left: darkMode ? 0 : 25  }}></div>
        </div>
    )
}

export default Toogle
