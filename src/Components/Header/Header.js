import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Explore } from "../../assets/explore.svg";
import "./Header.css";

const Header = () => {
    return (
        <nav>
            <div className="div-header">
                <div className="div-svg">
                    <Logo />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <NavLink to="/">
                        <Home className="div-svg" />
                    </NavLink>
                    <NavLink to="/explore">
                        <Explore className="div-svg" />
                    </NavLink>
                    <button className="button-header">Log out</button>
                </div>
            </div>
        </nav>
    );
};

export default Header;
