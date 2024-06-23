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

function TopBar() {
    return (
        <div className="ct-topBar ct-topBar--small d-none d-md-block">
            <Container>
                <div className="ct-u-displayTableVertical ct-u-marginTopMinus10">
                    <div className="ct-u-displayTableCell ct-topBar-col1">
                        <a href="/"><img src="assets/images/logo-small.png" alt="Logo Image"/></a>
                    </div>
                    <div className="ct-u-displayTableCell ct-topBar-col2">
                        <div className="ct-contactBox">
                            <ul className="ct-contactBox-list list-unstyled list-inline">
                                <li data-toggle="tooltip" data-placement="bottom" title="Call us" className="active"><a
                                    href="#"><i className="fa fa-phone fa-2x"></i></a></li>
                            </ul>
                            <span
                                className="ct-contactBox-content ct-u-colorMotive ct-u-displayBlock ct-fs-i ct-u-fontSize24 ct-u-fontType2">0 800 123 4567</span>
                            <span className="ct-contactBox-info ct-fw-800 ct-fs-i ct-u-colorWhite ct-u-displayBlock ">Call Us 24/7</span>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="ct-u-displayTableCell ct-topBar-col3">
                        <div className="ct-contactBox">
                            <ul className="ct-contactBox-list ct-contactBox-list--smallPadding list-unstyled list-inline">
                                <li data-toggle="tooltip" data-placement="bottom" title="Send a message"
                                    className="active"><a href="#"><i className="fa fa-envelope fa-2x"></i></a></li>
                            </ul>
                            <span
                                className="ct-contactBox-content ct-u-displayBlock ct-u-fontType2 ct-u-fontSize24 ct-fs-i ct-u-colorMotive">info@example.com</span>
                            <span className="ct-contactBox-info ct-fw-800 ct-fs-i ct-u-colorWhite ct-u-displayBlock ">We will respond within 12 h</span>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TopBar