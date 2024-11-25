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
                <Row className="ct-u-paddingBottom50">
                    <Col md={6} sm={6} className="ct-aboutSection-imageBox ct-u-paddingTop50 ">
                        <h3 className="ct-fw-700 ct-u-colorWhite">{t('Title')}</h3>
                        {/*img src="assets/images/content/about-us.png" alt="Image"/> */}
                    </Col>
                    <Col md={6} sm={6} className="ct-aboutSection-descriptionBox ct-u-paddingTop50">
                        <p className="ct-u-fontSize24 ct-u-colorWhite ct-u-lineHeight30">
                            {t('Body_p0')}
                        </p>
                        <p className="ct-u-fontSize24 ct-u-colorWhite ct-u-lineHeight30">
                            {t('Body_p1')}
                        </p> <p className="ct-u-fontSize24 ct-u-colorWhite ct-u-lineHeight30">
                        {t('Body_p2')}
                    </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;