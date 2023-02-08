import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return(

<footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a>Abhijeet™</a> All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
     
       
     
        <li>
        <NavLink className="nav" to="/contact">Contact</NavLink>
        </li>
    </ul>
</footer>




    )
}

export default Footer;
