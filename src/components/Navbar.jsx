import logo from "../assets/tolulogo.png";
import {LINKS} from "../constants"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className="mx-2 w-12"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-2 text-2xl">
            <a href={LINKS.linkedin}><FaLinkedin/></a>
            <a href={LINKS.github}><FaGithub/></a>
            <FaSquareXTwitter/>
            <a href={LINKS.instagram}><FaInstagram/></a>

        </div>

    </nav>
  )
}

export default Navbar