import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (

        <nav>
            <Link to={"/"}>Inicial</Link>
            <Link to={"/lgpd"}>LGPD</Link>
            <Link to={"/noticias"}>Noticias</Link>
            <Link to={"/noticias-axios"}>Noticias Pelo Axios</Link>
        </nav>

    );

};

export default Navbar;
