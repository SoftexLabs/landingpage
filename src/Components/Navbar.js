import { useRef } from "react";
import "../Styles/Navbar.css";
import LogoLabs from "../img/labsLogoTransparent.png"




function Navbar () {
    const navRef = useRef();

   
    return(        
    <>
    <header>
            <div>
              <img src={LogoLabs} alt="logo do laboratório"/>
            </div>
       
        <nav ref={navRef} className="horizon">
                <a href="/#">Labs</a>
                <a href="/#">Game</a>
                <a href="/#">IOT</a>
                <a href="/#">Robótica</a>
                <a href="/#">Weather Station</a>
                <a href="/#">ID</a>
                <a href="/#">Salas</a>
                <a href="/#">Contato</a>
               
            </nav>
           
            </header>
            </>
    )

}

export default Navbar