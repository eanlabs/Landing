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
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ContactInfo() {
    return(
        <>
            <Row className="text-center">
                <Col md={12}>
                    <h3 className="text-uppercase ct-fw-700 ct-u-colorWhite">Contact Us</h3>
                    <span className="ct-iconDivider ct-iconDivider--dark ct-iconDivider--withOpacity"><i className="fa fa-leaf fa-2x"></i></span>
                </Col>
            </Row>
            <Row>
                <Col lg={{span: 4, offset: 2}} md={6} sm={6}>
                    <div className="ct-contactBox  ct-u-paddingTop50">
                        <ul className="ct-contactBox-list ct-contactBox-list--smallPadding list-unstyled list-inline">
                            <li data-toggle="tooltip" data-placement="bottom" title="Call us" className="active">
                                <a href="#"><i className="fa fa-phone fa-2x"></i></a>
                            </li>
                        </ul>
                        <span className="ct-contactBox-content ct-u-displayBlock ct-u-fontType2 ct-u-fontSize30 ct-u-colorMotive ">0 800 123 4567</span>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <div className="ct-contactBox ct-u-paddingTop50">
                        <ul className="ct-contactBox-list ct-contactBox-list--smallPadding list-unstyled list-inline">
                            <li data-toggle="tooltip" data-placement="bottom" title="Send a message" className="active">
                                <a href="#"><i className="fa fa-envelope fa-2x"></i></a>
                            </li>
                        </ul>
                        <span className="ct-contactBox-content ct-u-displayBlock ct-u-fontType2 ct-u-fontSize30 ct-u-colorMotive">info@example.com</span>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={{span: 6, offset: 2}} md={8} sm={12}>
                    <div className="ct-contactBox ct-u-paddingTop40">
                        <ul className="ct-contactBox-list ct-contactBox-list--smallPadding list-unstyled list-inline">
                            <li data-toggle="tooltip" data-placement="bottom" title="Get more info" className="active">
                                <a href="#"><i className="fa fa-home fa-2x"></i></a>
                            </li>
                        </ul>
                        <span className="ct-contactBox-content ct-u-displayBlock ct-u-fontType2 ct-u-fontSize30 ct-u-colorLight">121 King Street, Melbourne Victoria 3000 Australia</span>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default ContactInfo