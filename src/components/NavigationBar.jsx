import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from "../assets/Library.svg"
import { Link } from "react-router-dom"

const Nav = ( {cartSize} ) => {
    function toggleMenu() {
        document.body.classList.toggle("menu--open")
    }
    return (
        <nav>
            <div className="nav__container">
                <Link to="/">
                    <img src={LibraryLogo} alt="" className="logo" />
                </Link>
                <ul className="nav__links">
                    <li className="nav__list">
                        <Link to="/" className="nav__link" >
                            Home
                        </Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/books" className="nav__link" >
                            Books
                        </Link>
                    </li>
                    <button className="btn__menu" onClick={toggleMenu}>
                        <FontAwesomeIcon icon="bars"/>
                    </button>
                    <li className="nav__list">
                        <Link to="/cart" className="nav__link" >
                            <FontAwesomeIcon icon="shopping-cart" />
                        </Link>
                        {!!cartSize && <span className="cart__length">{cartSize}</span>}
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={toggleMenu}>
                        <FontAwesomeIcon icon="times"/>
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <Link to="/" className="menu__link" onClick={toggleMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/books" className="menu__link" onClick={toggleMenu}>
                                Books
                            </Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/cart" className="menu__link" onClick={toggleMenu}>
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav