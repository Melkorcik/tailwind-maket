import React from "react";

function Header(){
    return<header className=" mx-44 my-6 border-t-2 border-b-2">
        <nav className=" py-3">
            <ul className="flex">
                <li className="mx-20 text-gray-600 hover:text-orange-700 cursor-pointer">HOME</li>
                <li className="mx-20 text-gray-600 hover:text-orange-700 cursor-pointer">PRODUCTS</li>
                <li className="mx-20 text-gray-600 hover:text-orange-700 cursor-pointer">NEWS</li>
                <li className="mx-20 text-gray-600 hover:text-orange-700 cursor-pointer">ABOUT US</li>
                <li className="mx-20 text-gray-600 hover:text-orange-700 cursor-pointer">CONTACT US</li>
            </ul>
        </nav>
    </header>
}

export default Header;