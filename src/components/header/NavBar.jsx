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

    const {t, i18n} = useTranslation(['header', 'contacts']);
    const lang = i18n.language;
    let il = false;
    if (lang === 'he')
        il = !il;


    //console.log(il);

    return(
        <Navbar
            //expand="md"
            expand={false}
            //className={class_switch}
            className="ct-navbarMobile ct-navbarMobile--inverse"
            data-bs-theme="dark"
            //sticky="top"
            fixed="top"
            collapseOnSelect={true}
        >
            <Container fluid>
                <Navbar.Brand href="/" className="" >
                    <Image src="assets/images/logo.png" alt="Website Logo"/>
                </Navbar.Brand>

                 <span>
                     <p className="text-center text-uppercase ct-fw-700"> {t('menu_name')}</p>
                     <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" className="btn-lg"/>
                 </span>
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-false"
                    aria-labelledby="offcanvasNavbarLabel-expand-false"
                    placement="end"
                    //className={(isMobile ? 'ct-menuMobile' : '')}
                    //className="ct-u-colorWhite "
                    scroll={true}
                    restoreFocus={false}
                >

                    <Offcanvas.Header closeButton closeVariant="white">
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-false" className="ct-u-colorWhite" >
                            {t('menu_name')}
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-start">
                            {/*<ul className={("nav navbar-nav pull-left ") + (isMobile ? ' ct-menuMobile-navbar list-unstyled' : '')}> */}
                            <ul className="nav navbar-nav pull-left ct-menuMobile-navbar ct-u-colorWhite ct-fw-700">
                                <li className="onepage"><Nav.Link href="#home">{t('menu.home')}</Nav.Link></li>
                                <li className="onepage"><Nav.Link href="#about-us">{t('menu.about')}</Nav.Link></li>
                                <li className="onepage"><Nav.Link href="#contact">{t('menu.contact')}</Nav.Link></li>
                                <li className="onepage"><Nav.Link href="#obituaries">{t('menu.price')}</Nav.Link></li>
                                <li className="onepage"><Nav.Link href="#improvement">{t('menu.improvement')}</Nav.Link></li>
                                <li className="onepage"><Nav.Link href="#ourworks">{t('menu.ourworks')}</Nav.Link></li>


                            </ul>
                        </Nav>
                        {isMobile && <Langs/>}
                    </Offcanvas.Body>
                </Navbar.Offcanvas>

                <Navbar.Text className="mx-auto">
                    {il ?
                        <span>
                            <p className="h6 text-center ct-u-colorWhite ct-fw-700">
                                {t("appName", {ns: 'contacts'})}
                                {' '}
                                {t("inIL", {ns: 'contacts'})}
                            </p>
                            <p className="h6 text-center ct-u-colorWhite ct-fw-700">
                                {t("phone", {ns: 'contacts'})}
                            </p>
                        </span>
                    :
                        <span>
                            <p className="h6 text-center ct-u-colorWhite ct-fw-700">
                                {t("appName", {ns: 'contacts'})}
                                {' '}
                                {t("inUA", {ns: 'contacts'})}
                            </p>
                            <p className="h6 text-center ct-u-colorWhite ct-fw-700">
                                {t("phoneua", {ns: 'contacts'})}
                            </p>
                        </span>
                }
                    <p className="h6 text-center ct-u-paddingBottom15 ct-u-colorWhite ct-fw-700">{t("mail", {ns: 'contacts'})}</p>
                </Navbar.Text>
                {!isMobile && <Langs/>}
                {!isMobile &&
                <Navbar.Text className="mx-auto">
                    <p className="h6 text-center ct-u-paddingBottom15 ct-u-colorWhite ct-fw-700">
                        {t('info.right0')}
                        <br />
                        {t('info.right1')}
                        <br />
                        {t('info.right2')}
                    </p>
                </Navbar.Text>
                }

            </Container>
        </Navbar>
)
}

export default NavBar