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
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import { useTranslation } from 'react-i18next';

function Langs() {
    //const isMobile = window.innerWidth < 767
    const { i18n } = useTranslation();

    const handleClick = (e, lang) => {
        document.documentElement.lang = lang;

        if (lang !== 'he') {
            document.documentElement.dir = 'ltr';
            document.body.classList.remove('rtl');
        } else {
            document.documentElement.dir = 'rtl';
            document.body.className = "rtl";
        }
        i18n.changeLanguage(lang);
    }

    return (
        <Nav as="ul" className="align-items-center flex-row">
            <Nav.Item as="li">
                <Nav.Link
                    as="button"
                    eventKey="en"
                    className="btn btn-outline-default"
                    onClick={(e) => handleClick(e, 'en')}
                >
                    <Image fluid src="assets/images/us.png"/>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link
                    as="button"
                    eventKey="he"
                    className="btn btn-outline-default"
                    onClick={(e) => handleClick(e, 'he')}
                >
                    <Image fluid src="assets/images/il.png" />
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link
                    as="button"
                    eventKey="ua"
                    className="btn btn-outline-default"
                    onClick={(e) => handleClick(e, 'ua')}
                >
                    <Image fluid src="assets/images/ua.png" />
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" >
                <Nav.Link
                    as="button"
                    eventKey="ru"
                    className="btn btn-outline-default"
                    onClick={(e) => handleClick(e, 'ru')}
                >
                    <Image fluid src="assets/images/ru.png" />
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Langs;