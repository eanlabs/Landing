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
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";

function Stones() {
    const {t} = useTranslation('improve');

    return (
        <Container className="ct-u-backgroundWhite ct-u-paddingTop70 ct-u-paddingBottom30">
            <Row >
                <Col md={6}>
                    <h3 className="ct-fw-700">{t('stones_title')}</h3>
                    <Image className="d-block w-100 mx-auto" fluid src="assets/images/content/stones1.jpg" />
                </Col>
                <Col md={6}>
                    <Image className="w-100" fluid src="assets/images/content/stones2.jpg" />
                </Col>
            </Row>
        </Container>
    );
}

export default Stones;