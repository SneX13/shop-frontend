import React, {useState} from "react";
import {NavLink, useHistory} from "react-router-dom";
import logo from "../../logo1.png"

export default function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    const [loader, setLoader] = useState(false);
    const history = useHistory();

// todo add view for search results
    function searchGames(e) {
        e.preventDefault()
        if (searchTerm.trim() !== "") {
            setLoader(true)
            history.push(`/search/${searchTerm}`)
        } else {
            history.push("/");
        }
        setLoader(false)
    }

    return (
        <header className="sticky-top pb-1">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand py-2 mh-25" href="/" aria-label="Product">
                        <img src={logo} alt="..." />
                    </a>
                    <form className="form-inline my-2 my-lg-0 d-flex" onSubmit={searchGames}>
                        <div className="input-group">
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Type game name"
                                value={searchTerm}
                                aria-label="Search"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <div className="input-group-append">
                                <button className="btn btn-sm btn-outline-secondary" type="submit"
                                        disabled={loader || searchTerm.trim() === ""}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                         fill="none"
                                         stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round"
                                         className="mx-3">
                                        <circle cx="10.5" cy="10.5" r="7.5"></circle>
                                        <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav ml-auto">
                            <NavLink
                                className="nav-link"
                                to="/products"
                                activeClassName="active"
                            >
                                All Games
                            </NavLink>
                            <NavLink
                                className="nav-link"
                                to="/about"
                                activeClassName="active"
                            >
                                About us
                            </NavLink>
                            <NavLink
                                className="nav-link"
                                to="/contact"
                                activeClassName="active"
                            >
                                Contact
                            </NavLink>
                            {/* <NavLink
                                className="nav-link"
                                to="/cart"
                                activeClassName="active"
                            >
                                Cart
                            </NavLink>*/}
                            <NavLink
                                className="nav-link"
                                to="/login"
                                activeClassName="active"
                            >
                                Login/Register
                            </NavLink>
                            <NavLink
                                className="nav-link"
                                to="/dashboard"
                                activeClassName="active"
                            >
                                Dashboard
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}