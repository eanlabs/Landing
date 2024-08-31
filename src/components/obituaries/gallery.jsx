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
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTranslation } from "react-i18next";
import Additional from "./additional";

function Gallery() {
    const {t} = useTranslation('price');

    return (
        <Container>
            <Row className="ct-u-paddingBottom90">
                <Col md={4} sm={6} className="ct-u-paddingBottom30">
                    <div className="ct-iconBoxes ct-frame" style={{height: `100%`}}>
                        <div className="ct-iconBoxes-icon">
                            <span className="ct-iconDivider ct-iconDivider--dark">
                                <i className="fa fa-university fa-2x"></i>
                            </span>
                        </div>
                        <div className="ct-iconBoxes-title">{t('Econom.title')}</div>
                        <div className="ct-iconBoxes-title">{t('Econom.price')}</div>
                        <div className="ct-iconBoxes-description">
                            <ul className="ct-u-paddingTop20 text-end">
                                <li>{t('Econom.l0')}</li>
                                <li>{t('Econom.l1')}</li>
                                <li>{t('Econom.l2')}</li>
                                <li>{t('Econom.l3')}</li>
                                <li>{t('Econom.l4')}</li>
                                <li>{t('Econom.l5')}</li>
                            </ul>
                        </div>
                    </div>
                </Col>

                <Col md={4} sm={6} className="ct-u-paddingBottom30">
                    <div className="ct-iconBoxes ct-frame" style={{height: `100%`}}>
                        <div className="ct-iconBoxes-icon">
                            <span className="ct-iconDivider ct-iconDivider--dark">
                                <i className="fa fa-server fa-2x"></i>
                            </span>
                        </div>
                        <div className="ct-iconBoxes-title">{t('Standard.title')}</div>
                        <div className="ct-iconBoxes-title">{t('Standard.price')}</div>
                        <div className="ct-iconBoxes-description">
                            <ul className="ct-u-paddingTop20 text-end">
                                <li>{t('Standard.l0')}</li>
                                <li>{t('Standard.l1')}</li>
                                <li>{t('Standard.l2')}</li>
                                <li>{t('Standard.l3')}</li>
                                <li>{t('Standard.l4')}</li>
                                <li>{t('Standard.l5')}</li>
                                <li>{t('Standard.l6')}</li>
                                <li>{t('Standard.l7')}</li>
                                <li>{t('Standard.l8')}</li>
                            </ul>
                        </div>
                    </div>
                </Col>

                <Col md={4} sm={6} className="ct-u-paddingBottom30">
                    <div className="ct-iconBoxes ct-frame " style={{height: `100%`}}>
                        <div className="ct-iconBoxes-icon">
                            <span className="ct-iconDivider ct-iconDivider--dark">
                                <i className="fa fa-fire fa-2x"></i>
                            </span>
                        </div>
                        <div className="ct-iconBoxes-title">{t('VIP.title')}</div>
                        <div className="ct-iconBoxes-title">{t('VIP.price')}</div>
                        <div className="ct-iconBoxes-description">
                            <ul className="ct-u-paddingTop20 text-end">
                                <li>{t('VIP.l0')}</li>
                                <li>{t('VIP.l1')}</li>
                                <li>{t('VIP.l2')}</li>
                                <li>{t('VIP.l3')}</li>
                                <li>{t('VIP.l4')}</li>
                                <li>{t('VIP.l5')}</li>
                                <li>{t('VIP.l6')}</li>
                                <li>{t('VIP.l7')}</li>
                                <li>{t('VIP.l8')}</li>
                                <li>{t('VIP.l9')}</li>
                                <li>{t('VIP.l10')}</li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>

           <Additional />

        </Container>
    );
}

export default Gallery;