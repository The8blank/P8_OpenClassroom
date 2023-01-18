import React from 'react';
import LogoFooter from "./img/logo-footer.png"

const Footer = () => {

    return (
        <footer>
            <img className="header-logo" src={LogoFooter} alt="Logo Kasa" />
            <div className="footer-all-right">
            © 2020 Kasa. All rights reserved
            </div>
        </footer>
    );
};

export default Footer;