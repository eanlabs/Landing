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
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from 'react-i18next';

function IconBox() {
    const {t} = useTranslation('header');

    return (
        <section className="ct-iconBoxesSection ct-u-backgroundDarkGrey ct-u-paddingBottom20">
            <Container>
                <Row className="ct-u-paddingAll5 ct-row--noPadding ct-row--topPosition">
                    <Col md={6} sm={6}>
                        <div className="ct-iconBoxes ct-iconBoxes--differentHeight">
                            <div className="ct-iconBoxes-icon">
                                <span className="ct-iconDivider"><i className="fa fa-info fa-2x"></i></span>
                            </div>
                            <div className="ct-iconBoxes-title">
                                {t('info.left')}
                            </div>
                            <div className="ct-iconBoxes-button">
                                <a href="#about-us" className="btn btn-default ct-js-btnScroll">{t('morebtn')}</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} sm={6}>
                        <div className="ct-iconBoxes ct-iconBoxes--differentHeight">
                            <div className="ct-iconBoxes-icon">
                                <span className="ct-iconDivider"><i className="fa fa-server fa-2x"></i></span>
                            </div>
                            <div className="ct-iconBoxes-title">{t('info.right')}</div>
                            <div className="ct-iconBoxes-button">
                                <a href="#services" className="btn btn-default ct-js-btnScroll">{t('morebtn')}</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default IconBox;