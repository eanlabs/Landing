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
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { useTranslation } from "react-i18next";

function Decor() {
    const {t} = useTranslation('improve');

    return (
        <Row className="ct-u-backgroundBlack p-4 p-md-5">
            <h3 className="ct-fw-700 ct-u-colorWhite text-center pb-5">{t('decor_title')}</h3>
            <Col md={4} className="position-relative mb-3">
                <Image className="" fluid src="assets/images/content/vaze1.png"/>
                <div className="caption">
                    <div className="ct-box">
                        <div className="ct-box-inner text-center">
                            <p className="h5 ct-u-colorWhite ">{t("vaze1_caption")}</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={4} className="position-relative mb-3">
                <Image className="" fluid src="assets/images/content/vaze2.png"/>
                <div className="caption">
                    <div className="ct-box">
                        <div className="ct-box-inner text-center">
                            <p className="h5 ct-u-colorWhite ">{t("vaze2_caption")}</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={4} className="position-relative mb-3">
                <Image className="" fluid src="assets/images/content/bolls.png"/>
                <div className="caption">
                    <div className="ct-box">
                        <div className="ct-box-inner text-center">
                            <p className="h5 ct-u-colorWhite">{t("bolls_caption")}</p>
                        </div>
                    </div>
                </div>
            </Col>
            {/*<Row className="p-4 mx-auto">*/}
                <Col md={2} className=""></Col>

                <Col md={4} className="position-relative mb-3">
                    <Image className="logo-bg" fluid src="assets/images/content/candlestick1.png"/>
                    <div className="caption">
                        <div className="ct-box">
                            <div className="ct-box-inner text-center">
                                <p className="h5 ct-u-colorWhite">{t("candlestick1_caption")}</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} className="position-relative mb-3">
                    <Image className="logo-bg" fluid src="assets/images/content/candlestick2.png"/>
                    <div className="caption">
                        <div className="ct-box">
                            <div className="ct-box-inner text-center">
                                <p className="h5 ct-u-colorWhite">{t("candlestick2_caption")}</p>
                            </div>
                        </div>
                    </div>
                </Col>
        </Row>
    );
}

export default Decor;