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
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTranslation } from "react-i18next";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import {Table} from "react-bootstrap";

function Additional() {
    const {t} = useTranslation('price');

    return (
        <>
            <Row>
                <Col md={5} className="price-face-position" >
                    <div className="contact-face-bg">
                        <Image className="contact-face" fluid src="assets/images/content/pay_cond.jpg" />
                    </div>
                </Col>
                <Col md={7} className="pe-5">
                    <h2 className="ct-fw-700 ct-u-colorWhite">{t('pay_cond')}</h2>
                    <ol className="ct-u-fontSize24 ct-u-colorWhite">
                        <li>{t('pay_cond_desc.l0')}</li>
                        <li>{t('pay_cond_desc.l1')}</li>
                        <li>{t('pay_cond_desc.l2')}</li>
                        <li>{t('pay_cond_desc.l3')}</li>
                    </ol>
                    <p className=" ct-u-fontSize24 ct-fw-700 ct-u-colorWhite">{t('pay_cond_desc.long_desc')}</p>
                </Col>
            </Row>
            <Row className="ct-u-paddingTop70">
                <Col md={5} className="ct-u-paddingLR40">
                    <h2 className="ct-fw-700 ct-u-colorWhite">{t('onetime_work.title')}</h2>
                    <p className=" ct-u-fontSize24 ct-fw-700 ct-u-colorWhite ct-u-paddingAll60">{t('onetime_work.desc')}</p>
                </Col>
                <Col md={7} className="" >
                    <Image className="" fluid src="assets/images/content/one_time.jpg" />
                </Col>
            </Row>


            {/*
        <Row className="text-center ct-u-paddingTop70 ct-u-paddingBottom30">
            <Col md={12}>
                <h3 className="text-uppercase ct-fw-700 ct-u-colorWhite">{t('Additional.title')}</h3>
                <span className="ct-iconDivider ct-iconDivider--dark ct-iconDivider--withOpacity">
                       <i className="fa fa-leaf fa-2x"></i>
                    </span>
            </Col>
        </Row>

        <Row>

            <Col md={3} sm={6} className="ct-u-paddingBottom30">
                <div className="ct-iconBoxes ct-frame" style={{height: `100%`}}>
                    <div className="ct-iconBoxes-icon">
                            <span className="ct-iconDivider ct-iconDivider--dark">
                                <i className="fa-brands fa-pagelines fa-2x"></i>
                            </span>
                    </div>
                    <div className="ct-iconBoxes-title">{t('Additional.cleaning.title')}</div>
                    <div className="ct-iconBoxes-title">{t('Additional.cleaning.price')}</div>
                    <div className="ct-iconBoxes-description">
                        <p>{t('Additional.cleaning.desc')}</p>
                    </div>
                </div>
            </Col>

            <Col md={3} sm={6} className="ct-u-paddingBottom30">
                <div className="ct-iconBoxes ct-frame" style={{height: `100%`}}>
                    <div className="ct-iconBoxes-icon">
                            <span className="ct-iconDivider ct-iconDivider--dark">
                                <i className="fa-brands fa-pagelines fa-2x"></i>
                            </span>
                    </div>
                    <div className="ct-iconBoxes-title">{t('Additional.landscaping_cr.title')}</div>
                    <div className="ct-iconBoxes-title">{t('Additional.landscaping_cr.price')}</div>
                    <div className="ct-iconBoxes-description">
                        <p>{t('Additional.landscaping_cr.desc')}</p>
                    </div>
                </div>
            </Col>

            <Col md={3} sm={6} className="ct-u-paddingBottom30">
                <div className="ct-iconBoxes ct-frame" style={{height: `100%`}}>
                    <div className="ct-iconBoxes-icon">
                            <span className="ct-iconDivider ct-iconDivider--dark">
                                <i className="fa-brands fa-pagelines fa-2x"></i>
                            </span>
                    </div>
                    <div className="ct-iconBoxes-title">{t('Additional.cutting.title')}</div>
                    <div className="ct-iconBoxes-title">{t('Additional.cutting.price')}</div>
                    <div className="ct-iconBoxes-description">
                        <p>{t('Additional.cutting.desc')}</p>
                    </div>
                </div>
            </Col>

            <Col md={3} sm={6} className="ct-u-paddingBottom30">
                <div className="ct-iconBoxes ct-frame" style={{height: `100%`}}>
                    <div className="ct-iconBoxes-icon">
                            <span className="ct-iconDivider ct-iconDivider--dark">
                                <i className="fa-brands fa-pagelines fa-2x"></i>
                            </span>
                    </div>
                    <div className="ct-iconBoxes-title">{t('Additional.landscaping.title')}</div>
                    <div className="ct-iconBoxes-title">{t('Additional.landscaping.price')}</div>
                    <div className="ct-iconBoxes-description">
                        <p>{t('Additional.landscaping.desc')}</p>
                    </div>
                </div>
            </Col>

            <Col md={3} sm={6} className="ct-u-paddingBottom30">
                <div className="ct-iconBoxes ct-frame" style={{height: `100%`}}>
                    <div className="ct-iconBoxes-icon">
                            <span className="ct-iconDivider ct-iconDivider--dark">
                                <i className="fa-brands fa-pagelines fa-2x"></i>
                            </span>
                    </div>
                    <div className="ct-iconBoxes-title">{t('Additional.sprinkle.title')}</div>
                    <div className="ct-iconBoxes-title">{t('Additional.sprinkle.price')}</div>
                    <div className="ct-iconBoxes-description">
                        <p>{t('Additional.sprinkle.desc')}</p>
                    </div>
                </div>
            </Col>

            <Col md={3} sm={6} className="ct-u-paddingBottom30">
                <div className="ct-iconBoxes ct-frame" style={{height: `100%`}}>
                    <div className="ct-iconBoxes-icon">
                            <span className="ct-iconDivider ct-iconDivider--dark">
                                <i className="fa-brands fa-pagelines fa-2x"></i>
                            </span>
                    </div>
                    <div className="ct-iconBoxes-title">{t('Additional.decorating.title')}</div>
                    <div className="ct-iconBoxes-title">{t('Additional.decorating.price')}</div>
                    <div className="ct-iconBoxes-description">
                        <p>{t('Additional.decorating.desc')}</p>
                    </div>
                </div>
            </Col>

            <Col md={3} sm={6} className="ct-u-paddingBottom30">
                <div className="ct-iconBoxes ct-frame" style={{height: `100%`}}>
                    <div className="ct-iconBoxes-icon">
                            <span className="ct-iconDivider ct-iconDivider--dark">
                                <i className="fa-brands fa-pagelines fa-2x"></i>
                            </span>
                    </div>
                    <div className="ct-iconBoxes-title">{t('Additional.painting.title')}</div>
                    <div className="ct-iconBoxes-title">{t('Additional.painting.price')}</div>
                    <div className="ct-iconBoxes-description">
                        <p>{t('Additional.painting.desc')}</p>
                    </div>
                </div>
            </Col>

            <Col md={3} sm={6} className="ct-u-paddingBottom30">
                <div className="ct-iconBoxes ct-frame" style={{height: `100%`}}>
                    <div className="ct-iconBoxes-icon">
                            <span className="ct-iconDivider ct-iconDivider--dark">
                                <i className="fa-brands fa-pagelines fa-2x"></i>
                            </span>
                    </div>
                    <div className="ct-iconBoxes-title ">{t('Additional.installation.title')}</div>
                    <div className="ct-iconBoxes-title">{t('Additional.installation.price')}</div>
                    <div className="ct-iconBoxes-description">
                        <p>{t('Additional.installation.desc')}</p>
                    </div>
                </div>
            </Col>

            <Col md={3} sm={6} className="ct-u-paddingBottom30">
                <div className="ct-iconBoxes ct-frame" style={{height: `100%`}}>
                    <div className="ct-iconBoxes-icon">
                            <span className="ct-iconDivider ct-iconDivider--dark">
                                <i className="fa-brands fa-pagelines fa-2x"></i>
                            </span>
                    </div>
                    <div className="ct-iconBoxes-title">{t('Additional.flowers.title')}</div>
                    <div className="ct-iconBoxes-title">{t('Additional.flowers.price')}</div>
                    <div className="ct-iconBoxes-description">
                        <p>{t('Additional.flowers.desc')}</p>
                    </div>
                </div>
            </Col>

            <Col md={3} sm={6} className="ct-u-paddingBottom30">
                <div className="ct-iconBoxes ct-frame" style={{height: `100%`}}>
                    <div className="ct-iconBoxes-icon">
                            <span className="ct-iconDivider ct-iconDivider--dark">
                                <i className="fa-brands fa-pagelines fa-2x"></i>
                            </span>
                    </div>
                    <div className="ct-iconBoxes-title">{t('Additional.artwork.title')}</div>
                    <div className="ct-iconBoxes-title">{t('Additional.artwork.price')}</div>
                    <div className="ct-iconBoxes-description">
                        <p>{t('Additional.artwork.desc')}</p>
                    </div>
                </div>
            </Col>

            <Col md={3} sm={6} className="ct-u-paddingBottom30">
                <div className="ct-iconBoxes ct-frame" style={{height: `100%`}}>
                    <div className="ct-iconBoxes-icon">
                            <span className="ct-iconDivider ct-iconDivider--dark">
                                <i className="fa-brands fa-pagelines fa-2x"></i>
                            </span>
                    </div>
                    <div className="ct-iconBoxes-title">{t('Additional.winter.title')}</div>
                    <div className="ct-iconBoxes-title">{t('Additional.winter.price')}</div>
                    <div className="ct-iconBoxes-description">
                        <p>{t('Additional.winter.desc')}</p>
                    </div>
                </div>
            </Col>
                <p className="ct-u-fontSize24 ct-u-colorWhite ct-u-lineHeight36">
                    {t('final_disco')}
                </p>
        </Row>
        */}
        </>
    );
}

export default Additional;