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
                <Col md={7} className="pe-md-5">
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
                <Col md={6} className="ct-u-paddingLR40">
                    <h2 className="ct-fw-700 ct-u-colorWhite">{t('onetime_work.title')}</h2>
                    <p className=" ct-u-fontSize24 ct-fw-700 ct-u-colorWhite">{t('onetime_work.desc')}</p>
                </Col>
                <Col md={6} className="" >
                    <Image className="" fluid src="assets/images/content/one_time.jpg" />
                </Col>
            </Row>
        </>
    );
}

export default Additional;