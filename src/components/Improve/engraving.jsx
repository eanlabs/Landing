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

function Engraving() {
    const {t} = useTranslation('improve');

    return (
        <>
        <Row className="ct-u-backgroundBlack p-5 ">
            <h3 className="ct-fw-700 ct-u-colorWhite text-center pb-5">{t('engraving_titleIL')}</h3>
            <Col md={4} className="position-relative">
                <Image className="engraving-bg" fluid src="assets/images/content/engraving1.png"/>
                <div className="caption top-0">
                     <p className="h5 ct-u-colorBlack ">{t("david_star")}</p>
                </div>
            </Col>
            <Col md={4} className="position-relative">
                <Image className="engraving-bg" fluid src="assets/images/content/engraving2.png"/>
                <div className="caption top-0">
                    <p className="h5 ct-u-colorBlack ">{t("heaven_gate")}</p>
                </div>
            </Col>
            <Col md={4} className="position-relative">
                <Image className="engraving-bg" fluid src="assets/images/content/engraving3.png"/>
                <div className="caption top-0">
                    <p className="h5 ct-u-colorBlack ">{t("hearth")}</p>
                </div>
            </Col>
            <Row className="p-md-5">
                <Col md={2}></Col>

                <Col md={4} className="position-relative">
                    <Image className="engraving-bg" fluid src="assets/images/content/engraving4.png"/>
                    <div className="caption top-0" style={{left: "unset", right: 0, width: "60%" }}>
                        <p className="h5 ct-u-colorBlack ">{t("menora")}</p>
                    </div>
                </Col>
                <Col md={4} className="position-relative">
                    <Image className="engraving-bg" fluid src="assets/images/content/engraving5.png"/>
                    <div className="caption bottom-0" style={{top: "unset"}}>
                        <p className="h5 ct-u-colorBlack ">{t("flowers")}</p>
                    </div>
                </Col>
            </Row>
        </Row>

        <Row className="ct-u-backgroundWhite p-5 ">
            <h3 className="ct-fw-700 ct-u-colorBlack pb-5">{t('engraving_titleUA')}</h3>
            <Col md={6} className="position-relative">
                <Image className="engraving-bg" fluid src="assets/images/content/engraving1UA.png"/>
            </Col>
            <Col md={6} className="position-relative">
                <Image className="engraving-bg" fluid src="assets/images/content/engraving2UA.png"/>
            </Col>
        </Row>
        </>
    );
}

export default Engraving;