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

function About() {
    const {t} = useTranslation('about');

    return (
        <section className="ct-aboutSection ct-u-backgroundBlack section" id="about-us">
            <Container>
                <Row className="ct-u-paddingBottom100 ct-u-paddingTop60">
                    <Col md={12} className="text-center">
                        <h3 className="text-uppercase ct-fw-700 ct-u-colorWhite">{t('Title')}</h3>
                        <span className="ct-iconDivider ct-iconDivider--dark ct-iconDivider--withOpacity">
                            <i className="fa fa-leaf fa-2x"></i>
                        </span>
                    </Col>
                    <Col md={6} sm={12} className="ct-aboutSection-imageBox ct-u-paddingTop50">
                        <img src="assets/images/content/about-us.png" alt="Image"/>
                    </Col>
                    <Col md={6} sm={12} className="ct-aboutSection-descriptionBox ct-u-paddingTop50">
                        <p className="ct-u-fontSize24 ct-u-colorWhite ct-u-lineHeight36">
                            {t('Body')}
                        </p>
                        <br/>
                        {/*
                        <p className="ct-u-colorWhite ct-u-lineHeight30 ct-u-paddingBottom30">
                            Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia
                            in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.
                            Quisque semper justo at risus.
                        </p>
                        <ul className="ct-buttonList list-inline list-unstyled">
                            <li className="list-inline-item">
                                <a href="#" className="btn btn-default ">Learn More</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="btn btn-primary ct-btn--border">Testimonials</a>
                            </li>
                        </ul>
                        */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;