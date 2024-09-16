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
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useTranslation } from 'react-i18next';

function Langs() {
    const isMobile = window.innerWidth < 767
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
        <ul className="list-inline list-unstyled text-center">
            <li key={0} className="list-inline-item">
                <Button type="button" bsPrefix="btn" variant="primary" onClick={(e) => handleClick(e, 'en')}>
                    <Image src="assets/images/us.png" style={{width: '50%'}}/>
                </Button>
            </li>

            <li key={2} className="list-inline-item">
                <Button type="button" bsPrefix="btn" variant="primary" onClick={(e) => handleClick(e, 'he')}>
                    <Image src="assets/images/il.png" style={{width: '50%'}}/>
                </Button>
            </li>

            <li key={1} className="list-inline-item">
                <Button type="button" bsPrefix="btn" variant="primary" onClick={(e) => handleClick(e, 'ua')}>
                    <Image src="assets/images/ua.png" style={{width: '50%'}}/>
                </Button>
            </li>

            <li key={3} className={(isMobile ? '' : 'list-inline-item')}>
                <Button type="button" bsPrefix="btn" variant="primary" onClick={(e) => handleClick(e, 'ru')}>
                    <Image src="assets/images/ru.png" style={{width: '50%'}}/>
                </Button>
            </li>
        </ul>
    );
}

export default Langs;