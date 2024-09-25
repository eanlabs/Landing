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
import Image from 'react-bootstrap/Image';
import { useTranslation } from 'react-i18next';

function TopBar() {
    const {t} = useTranslation('contacts');

    return (
        <div className="ct-topBar ct-topBar--small d-none d-md-block">
            <Container>
                <div className="ct-u-displayTableVertical ct-u-marginTopMinus10">
                    <div className="ct-u-displayTableCell ct-topBar-col1">
                        <a href="/">
                            <Image src="assets/images/logo-small.png" alt="Logo Image"/>
                        </a>
                    </div>
                    <div className="ct-u-displayTableCell ct-topBar-col2">
                        <div className="ct-contactBox">
                            <ul className="ct-contactBox-list list-unstyled list-inline">
                                <li data-toggle="tooltip" data-placement="bottom" title="Call us"
                                    className="active list-inline-item">
                                    {/*
                                    <a href="https://wa.me/+972545732280">
                                        <i className="fa-brands fa-whatsapp fa-2x"></i>
                                    </a>
                                    */}
                                    <span>
                                        <i className="fa-brands fa-whatsapp fa-2x"></i>
                                    </span>
                                </li>
                                <li data-toggle="tooltip" data-placement="bottom" title="Call us"
                                    className="active list-inline-item">
                                    {/* <a href="tel:+972545732280"><i className="fa fa-phone fa-2x"></i></a> */}
                                    <span>
                                        <i className="fa fa-phone fa-2x"></i>
                                    </span>
                                </li>
                            </ul>
                            <span dir="ltr"
                                  className="ct-cont ct-u-colorMotive ct-u-displayBlock ct-fs-i ct-u-fontSize24 ct-u-fontType2">
                                {t('phone')}
                            </span>
                            <span dir="ltr"
                                  className="ct-cont ct-u-colorMotive ct-u-displayBlock ct-fs-i ct-u-fontSize24 ct-u-fontType2">
                                {t('phoneua')}
                            </span>
                            <span className="ct-contactBox-info ct-fw-800 ct-fs-i ct-u-colorWhite ct-u-displayBlock ">
                                {t('CallUs')}
                            </span>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="ct-u-displayTableCell ct-topBar-col3">
                        <div className="ct-contactBox">
                            <ul className="ct-contactBox-list ct-contactBox-list--smallPadding list-unstyled list-inline">
                                <li data-toggle="tooltip" data-placement="bottom" title="Send a message" className="active">
                                    <a href="mailto:memorealy@gmail.com"><i className="fa fa-envelope fa-2x"></i></a>
                                </li>
                            </ul>
                            <span  className="ct-contactBox-content ct-u-displayBlock ct-u-fontType2 ct-u-fontSize24 ct-fs-i ct-u-colorMotive">
                                {t('mail')}
                            </span>
                            <span className="ct-contactBox-info ct-fw-800 ct-fs-i ct-u-colorWhite ct-u-displayBlock ">
                                {t('Respond')}
                            </span>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TopBar