import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import canvasLogo from '../../../assets/img/logo/logo.png';

const CanvasMenu = () => {

    const canvasMenuRemove = () => {
        document.body.classList.remove('nav-expanded');
    };

    return (
        <React.Fragment>
            <nav className="right_menu_togle hidden-md">
                <div className="close-btn">
                    <div className="nav-link">
                        <a onClick={canvasMenuRemove} id="nav-close" className="humburger nav-expander" href="#">
                            <span className="dot1"></span>
                            <span className="dot2"></span>
                            <span className="dot3"></span>
                            <span className="dot4"></span>
                            <span className="dot5"></span>
                            <span className="dot6"></span>
                            <span className="dot7"></span>
                            <span className="dot8"></span>
                            <span className="dot9"></span>
                        </a>
                    </div>
                </div>
                <div className="canvas-logo">
                    <Link to="/"><img src={canvasLogo} alt="logo" /></Link>
                </div>
                <div className="offcanvas-text">
                    <p>Braintech quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas etiusto odio data center.</p>
                </div>
                <div className="canvas-contact">
                    <div className="address-area">
                        <div className="address-list">
                            <div className="info-icon">
                                <i className="fa fa-map-marker"></i>
                            </div>
                            <div className="info-content">
                                <h4 className="title">Address</h4>
                                <em>1340 Environ Way,
                                    Chapel Hill, NC 27517</em>
                            </div>
                        </div>
                        <div className="address-list">
                            <div className="info-icon">
                                <i className="fa fa-envelope-open"></i>
                            </div>
                            <div className="info-content">
                                <h4 className="title">Email</h4>
                                <em><a href="mailto:priorityroofingnc@gmail.com">priorityroofingnc@gmail.com</a></em>
                            </div>
                        </div>
                        <div className="address-list">
                            <div className="info-icon">
                                <i className="fa fa-phone">(919)762-6866</i>
                            </div>
                            <div className="info-content">
                                <h4 className="title">Phone</h4>
                                <em></em>
                            </div>
                        </div>
                    </div>
                    <ul className="social">
                        <li>
                            <a href="#"><i className="fa fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-pinterest"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default CanvasMenu;