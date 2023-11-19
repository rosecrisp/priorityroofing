import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopHeaderStyleThree from './TopBarStyleThree';
import RSMobileMenu from './RSMobileMenu';
import MenuItems from './MenuItems';

import whiteLogo from '../../../assets/img/logo/white-logo.png';
import Logo from '../../../assets/img/logo/logo.png';


const HeaderStyleThree = (props) => {
	const { parentMenu, secondParentMenu, activeMenu } = props;

	const [menuOpen, setMenuOpen] = useState(false)

	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		// Sticky is displayed after scrolling for 100 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const searchModalAdd = () => {
		document.body.classList.add('modal-open');
	};

	return (
		<React.Fragment>
			<div className="full-width-header">
				<header id="rs-header" className="rs-header style3 header-transparent">
					<TopHeaderStyleThree />
					<div className={isVisible ? 'menu-area menu-sticky sticky' : 'menu-area menu-sticky'}>
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-3">
									<div className="logo-part hidden-md">
										<Link to="/">
											<img className="normal-logo" src={whiteLogo} alt="" />
											<img className="sticky-logo" src={Logo} alt="" />
										</Link>
									</div>
								</div>
								<div className="col-lg-9 text-right md-text-left">
									<div className="rs-menu-area">
										<div className="main-menu">
											<div className="mobile-menu md-display-block">
												<Link to="/" className="mobile-normal-logo"><img src={whiteLogo} alt="logo" /></Link>
												<Link to="/" className="mobile-sticky-logo"><img src={Logo} alt="logo" /></Link>
												<Link to="#" className="rs-menu-toggle" onClick={() => {
													setMenuOpen(!menuOpen)
												}}>
													<i className="fa fa-bars"></i>
												</Link>
											</div>
											<nav className="rs-menu pr-70 lg-pr-50 md-pr-0 hidden-md">
												<ul className="nav-menu">
													<MenuItems
														parentMenu={parentMenu}
														secondParentMenu={secondParentMenu}
														activeMenu={activeMenu}
													/>
												</ul>
											</nav>
										</div>
										<div className="expand-btn-inner search-icon hidden-md">
											<ul>
												<li className="sidebarmenu-search">
													<a href="#" onClick={searchModalAdd} className="rs-search" href="#">
														<i className="flaticon-search"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<RSMobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
					<div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>

				</header>
			</div>
		</React.Fragment>
	);
}

export default HeaderStyleThree;