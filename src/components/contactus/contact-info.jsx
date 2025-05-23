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
import { useTranslation } from 'react-i18next';
import Image from "react-bootstrap/Image";

function ContactInfo() {
    const {t} = useTranslation('contacts');

    return(
        <>
            {/*
            <Row className="text-center">
                <Col md={12}>
                    <h3 className="text-uppercase ct-fw-700 ct-u-colorWhite">{t('title')}</h3>
                    <span className="ct-iconDivider ct-iconDivider--dark ct-iconDivider--withOpacity"><i className="fa fa-leaf fa-2x"></i></span>
                </Col>
            </Row>
            <Row>
                <Col lg={{span: 6, offset: 2}} md={6} sm={6}>
                    <div className="ct-contactBox  ct-u-paddingTop50">
                        <ul className="ct-contactBox-list ct-contactBox-list--smallPadding list-unstyled list-inline">
                            <li data-toggle="tooltip" data-placement="bottom" title="Call us"
                                className="active list-inline-item">
                                {/*
                                <a href="https://wa.me/+972545732280">
                                    <i className="fa-brands fa-whatsapp fa-2x"></i>
                                </a>
                                /}
                                <span>
                                    <i className="fa-brands fa-whatsapp fa-2x"></i>
                                </span>
                            </li>
                            <li data-toggle="tooltip" data-placement="bottom" title="Call us"
                                className="active list-inline-item">
                                {/* <a href="tel:+972545732280"><i className="fa fa-phone fa-2x"></i></a> /}
                                <span>
                                    <i className="fa fa-phone fa-2x"></i>
                                </span>
                            </li>
                        </ul>
                        <span dir="ltr"
                              className="ct-cont ct-u-displayBlock ct-u-fontType2 ct-u-fontSize30 ct-u-colorMotive ">
                            {t('phone')}
                        </span>
                        <span dir="ltr"
                              className="ct-cont ct-u-displayBlock ct-u-fontType2 ct-u-fontSize30 ct-u-colorMotive ">
                            {t('phoneua')}
                        </span>
                    </div>
                </Col>
                {/*
                <Col lg={6} md={6} sm={6}>
                    <div className="ct-contactBox ct-u-paddingTop50">
                        <ul className="ct-contactBox-list ct-contactBox-list--smallPadding list-unstyled list-inline">
                            <li data-toggle="tooltip" data-placement="bottom" title="Send a message" className="active">
                                <a href="mailto:memorealy@gmail.com"><i className="fa fa-envelope fa-2x"></i></a>
                            </li>
                        </ul>
                        <span className="ct-contactBox-content ct-u-displayBlock ct-u-fontType2 ct-u-fontSize30 ct-u-colorMotive">
                            memorealy@gmail.com
                        </span>
                    </div>
                </Col>
                /}
            </Row>
            <Row>
                <Col lg={{span: 6, offset: 2}} md={8} sm={12}>
                    <div className="ct-contactBox ct-u-paddingTop50">
                        <ul className="ct-contactBox-list ct-contactBox-list--smallPadding list-unstyled list-inline">
                            <li data-toggle="tooltip" data-placement="bottom" title="Send a message" className="active">
                                <a href="mailto:memorealy@gmail.com"><i className="fa fa-envelope fa-2x"></i></a>
                            </li>
                        </ul>
                        <span
                            className="ct-contactBox-content ct-u-displayBlock ct-u-fontType2 ct-u-fontSize30 ct-u-colorMotive">
                            {t('mail')}
                        </span>
                    </div>
                </Col>
            </Row>
            */}
            <Col md={6} className="contact-face-position" style={{zIndex: 500}}>
                <h3 className="ct-fw-700 ct-u-colorWhite text-center ct-u-paddingBottom20">{t('title')}</h3>
                <div className="contact-face-bg">
                    <Image className="contact-face" fluid src="assets/images/content/contact_face.jpg" />
                </div>
            </Col>
        </>
    )
}

export default ContactInfo