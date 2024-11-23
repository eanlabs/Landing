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
import Image from "react-bootstrap/Image";
import {Card, Table} from "react-bootstrap";

function Gallery() {
    const {t} = useTranslation('price');

    return (
        <>
            <Row className="ct-u-backgroundWhite">
                <Col md={6} className="price-img ct-u-paddingTop30">
                    <Image fluid src="assets/images/content/price_face.jpg"/>
                </Col>
                <Col className="ct-u-backgroundWhite price-cart ct-u-paddingTop30">
                    <Row>
                        <Col md={6} className="ct-u-paddingBottom30 ">
                            <Card className="">
                                <Card.Header
                                    className="card-head-foot  ct-fw-700 ct-u-colorWhite text-center ct-u-fontSize30 text-uppercase">{t('Econom.title')}</Card.Header>
                                <Card.Body className="cart-body">
                                    <Card.Text>
                                        <ul className="ct-u-paddingTop20 text-end ct-u-fontSize24">
                                            <li>{t('Econom.l0')}</li>
                                            <li>{t('Econom.l1')}</li>
                                            <li>{t('Econom.l2')}</li>
                                            <li>{t('Econom.l3')}</li>
                                            <li>{t('Econom.l4')}</li>
                                            <li>{t('Econom.l5')}</li>
                                            <li className="ct-u-colorWhite text-decoration-line-through">{t('Econom.l6')}</li>
                                            <li className="ct-u-colorWhite text-decoration-line-through">{t('Econom.l7')}</li>
                                            <li className="ct-u-colorWhite text-decoration-line-through">{t('Econom.l8')}</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer
                                    className="card-head-foot  ct-fw-700 ct-u-colorWhite text-center ct-u-fontSize30 text-uppercase">{t('Econom.price')}</Card.Footer>
                            </Card>
                        </Col>

                        <Col md={6} className="ct-u-paddingBottom30 ">
                            <Card className="">
                                <Card.Header
                                    className="card-head-foot  ct-fw-700 ct-u-colorWhite text-center ct-u-fontSize30 text-uppercase">{t('Standard.title')}</Card.Header>
                                <Card.Body className="cart-body">
                                    <Card.Text>
                                        <ul className="ct-u-paddingTop20 text-end ct-u-fontSize24">
                                            <li>{t('Econom.l0')}</li>
                                            <li>{t('Econom.l1')}</li>
                                            <li>{t('Econom.l2')}</li>
                                            <li>{t('Econom.l3')}</li>
                                            <li>{t('Econom.l4')}</li>
                                            <li>{t('Econom.l5')}</li>
                                            <li className="ct-u-colorRed">{t('Econom.l6')}</li>
                                            <li className="ct-u-colorRed">{t('Econom.l7')}</li>
                                            <li className="ct-u-colorRed">{t('Econom.l8')}</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer
                                    className="card-head-foot  ct-fw-700 ct-u-colorWhite text-center ct-u-fontSize30 text-uppercase">{t('Standard.price')}</Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <p className="text-center ct-u-fontSize24 ct-fw-700 ct-u-colorBlack">{t('pkgFinal')}</p>
            </Row>
            <Container>
                <Row className="ct-u-paddingTop70 ct-u-paddingBottom30 ">
                    <Col>
                        <p className="ct-u-fontSize24 ct-fw-700 ct-u-colorWhite">{t('final_disco_new')}</p>
                    </Col>
                </Row>
            </Container>

            <Additional />
    </>
    );
}

export default Gallery;