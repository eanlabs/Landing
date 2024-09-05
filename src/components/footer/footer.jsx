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

import React from "react";
import { useTranslation } from 'react-i18next';

function Footer() {
    const {t} = useTranslation('header');
    return (
        <footer className="ct-footer ct-footer--small">
            <div className="ct-footerUp">
                <ul className="list-inline list-unstyled text-center">
                    <li className="list-inline-item">
                        <a href="#home">{t('menu.home')}</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#about-us">{t('menu.about')}</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#services">{t('menu.services')}</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#obituaries">{t('menu.price')}</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#contact">{t('menu.contact')}</a>
                    </li>
                </ul>
            </div>

            <div className="ct-footerMiddle">
                <div className="container">
                    <div className="ct-u-displayTableVertical">
                        <div className="ct-u-displayTableCell ct-col4 text-center">
                            {/*
                            <ul className="ct-socials list-unstyled list-inline">
                                <li data-toggle="tooltip" data-placement="bottom" title="Facebook" className="list-inline-item"><a
                                    href="https://www.facebook.com/createITpl"><i className="fa fa-facebook fa-lg"></i></a>
                                </li>
                                <li data-toggle="tooltip" data-placement="bottom" title="Twitter" className="list-inline-item"><a
                                    href="https://twitter.com/createitpl"><i className="fa fa-twitter fa-lg"></i></a>
                                </li>
                                <li data-toggle="tooltip" data-placement="bottom" title="Google Plus" className="list-inline-item"><a href="#"><i
                                    className="fa fa-google-plus fa-lg"></i></a></li>
                            </ul>
                            */}
                        </div>
                    </div>
                    <a href="#" className="ct-scrollUpButton ct-scrollUpButton--Top ct-js-btnScrollUp">
                       <span className="ct-sectioButton--square">
                           <i className="fa fa-angle-double-up"></i>
                       </span>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer