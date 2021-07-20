import React from 'react'
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer>
            <div>
                <img src="https://png.pngtree.com/template/20191025/ourmid/pngtree-gym-logo-vector-image_323395.jpg" alt="logo" className="logo" />
                <p>More than 60 clubs across NSW, ACT, VIC and QLD. More opportunities to put yourself first.</p>
            </div>
            <div>
                <h3 className="secondary_heading">MENU</h3>
                <Link to="/">HOME</Link>
                <Link to="/gallery">GALLERY</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
            <div>
                <p>&copy;2020 Fitness First</p>
            </div>
        </footer>
    )
}
