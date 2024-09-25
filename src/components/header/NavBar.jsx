/*
 * Copyright (c) 2024, Eanlabs
 * All rights reserved.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the 3-Clause BSD
 * (also "New BSD", or "Modified BSD") License (BSD-3-Clause)
 * that is bundled with this package in the file LICENSE.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/BSD-3-Clause
 *
 * @author    Eanlabs
 * @copyright 2024, Eanlabs
 * @license   https://opensource.org/licenses/BSD-3-Clause (3-Clause BSD License)
 */

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import { useTranslation } from 'react-i18next';
import Langs from "./langs";

function NavBar() {
    const isMobile = window.innerWidth < 767;
    const class_switch = isMobile ? 'ct-navbarMobile ct-navbarMobile--inverse' : 'navbar navbar-default ct-stretchedMenu';

    const {t} = useTranslation('header');

    return(
        <Navbar
            expand="md"
            className={class_switch}
            data-bs-theme="dark"
            sticky="top"
            collapseOnSelect={true}
        >
            <Container>
                <Navbar.Brand href="/" className="d-md-none" ><Image src="assets/images/logo.png" alt="Website Logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-md"
                    aria-labelledby="offcanvasNavbarLabel-expand-md"
                    placement="end"
                    className={(isMobile ? 'ct-menuMobile' : '')}
                    scroll={true}
                    restoreFocus={false}
                >
                    {/*
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    */}
                    <Offcanvas.Body>
                        <Nav className="justify-content-start">
                            <ul className={("nav navbar-nav pull-left ") + (isMobile ? ' ct-menuMobile-navbar list-unstyled' : '')}>
                                <li className="onepage"><Nav.Link href="#home">{t('menu.home')}</Nav.Link></li>
                                <li className="onepage"><Nav.Link href="#about-us">{t('menu.about')}</Nav.Link></li>
                                <li className="onepage"><Nav.Link href="#services">{t('menu.services')}</Nav.Link></li>
                                <li className="onepage"><Nav.Link href="#obituaries">{t('menu.price')}</Nav.Link></li>
                                <li className="onepage"><Nav.Link href="#contact">{t('menu.contact')}</Nav.Link></li>
                            </ul>
                            {/*
                        <Nav as="ul" className={("justify-content-start pull-left ") + (isMobile ? ' ct-menuMobile-navbar list-unstyled' : '')} >
                            <Nav.Item as="li">
                                <Nav.Link bsPrefix="ttt" href="#home">{t('menu.home')}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="#about-us">{t('menu.about')}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="#services">{t('menu.services')}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="#obituaries">{t('menu.price')}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="#contact">{t('menu.contact')}</Nav.Link>
                            </Nav.Item>
                            */}
                        </Nav>
                        <Langs/>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavBar