import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './toolbar.css';
import Logo from "../../Assets/NavBar/SorsLogo.svg";

class Toolbar extends Component {

    componentDidMount() {
        if (this.props.fade) {
            window.addEventListener('scroll', (event) => {
                this.setToolbarBgColour();
            });
            this.setToolbarBgColour();
        }
    }

    setToolbarBgColour = () => {
        const fadeLimit = 300;
        const colour = [51, 179, 218];
        const opacity = Math.min(window.scrollY / fadeLimit, 1);

        document.getElementsByClassName('toolbar')[0].style.backgroundColor = 'rgba(' + colour[0] + ', ' + colour[1] + ', ' + colour[2] + ', ' + opacity + ')';
    }

    render() {
        return (
            <header className="toolbar" id="toolbar-bg">
                <nav className="toolbar_navigation">
                    <div className="toolbar_logo">
                        <NavLink to="/">
                            <img width="150px" src={Logo} />
                        </NavLink>
                    </div>
                    <div className="toolbar_nav_items">
                        <ul>
                            <li><NavLink to="/about" style={{ color: "white", textDecoration: "none" }}
                                activeStyle={{ color: "gray" }}>About</NavLink></li>
                            <li><NavLink to="/contact" style={{ color: "white", textDecoration: "none" }}
                                activeStyle={{ color: "gray" }}> Contact</NavLink></li>
                            <li><NavLink to="/products" style={{ color: "white", textDecoration: "none" }}
                                activeStyle={{ color: "gray" }}> Product</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Toolbar;