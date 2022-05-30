import "./../css/Header.css"
import Logo from "./../../images/logo_E-Laptop_complete.png"
import { Link } from "react-router-dom"
import Button from "./Button"

const Header = () => {
    return( <> 
    
    <div className="header_content">
        <Link to="/Dashboard">
            <span className="header_icon">
                <img src={Logo}></img>
            </span>
            <span className="header_title">
                Airport Shuttle
            </span>
        </Link>
        <form className="search">
            <input type="text" placeholder="Search.." className="txt_search" />
            <input type="submit" value="Search" className="btn_search"/>
        </form>
    </div>
    </>)
}

export default Header