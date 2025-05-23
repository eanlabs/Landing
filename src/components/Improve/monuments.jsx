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

function Monuments() {
    const {t} = useTranslation('improve');

    return (
        <>
            <Row className="ct-u-backgroundWhite p-5 ">
                <h3 className="ct-fw-700 ct-u-colorBlack pb-5">{t('monuments_titleIL')}</h3>
                <Col md={3} className="position-relative">
                    <Image className="engraving-bg" fluid src="assets/images/content/monument1il.png"/>
                    <p className="h4 ct-u-colorBlack ">{t("monument1IL")}</p>
                </Col>
                <Col md={3} className="position-relative">
                    <Image className="engraving-bg" fluid src="assets/images/content/monument2il.png"/>
                    <p className="h4 ct-u-colorBlack ">{t("monument2IL")}</p>
                </Col>
                <Col md={3} className="position-relative">
                    <Image className="engraving-bg" fluid src="assets/images/content/monument3il.png"/>
                    <p className="h4 ct-u-colorBlack ">{t("monument3IL")}</p>
                </Col>
                <Col md={3} className="position-relative">
                    <Image className="engraving-bg" fluid src="assets/images/content/monument4il.png"/>
                    <p className="h4 ct-u-colorBlack ">{t("monument4IL")}</p>
                </Col>
                {/*
                <Row className="p-5">
                    <Col md={3} className="position-relative">
                        <Image className="engraving-bg" fluid src="assets/images/content/engraving4.png"/>
                        <div className="caption top-0" style={{left: "unset", right: 0, width: "60%" }}>
                            <p className="h4 ct-u-colorBlack ">{t("menora")}</p>
                        </div>
                    </Col>
                    <Col md={3} className="position-relative">
                        <Image className="engraving-bg" fluid src="assets/images/content/engraving5.png"/>
                        <div className="caption bottom-0" style={{top: "unset"}}>
                            <p className="h4 ct-u-colorBlack ">{t("flowers")}</p>
                        </div>
                    </Col>
                </Row>
                */}
            </Row>

            <Row className="ct-u-backgroundWhite p-5 ">
                <h3 className="ct-fw-700 ct-u-colorBlack pb-5">{t('monuments_titleUA')}</h3>
                <Col md={3} className="position-relative">
                    <Image className="engraving-bg" fluid src="assets/images/content/monument1ua.png"/>
                    <p className="h4 ct-u-colorBlack ">{t("black_granit")}</p>
                </Col>
                <Col md={3} className="position-relative">
                    <Image className="engraving-bg" fluid src="assets/images/content/monument2ua.png"/>
                    <p className="h4 ct-u-colorBlack ">{t("black_granit")}</p>
                </Col>
                <Col md={3} className="position-relative">
                    <Image className="engraving-bg" fluid src="assets/images/content/monument3ua.png"/>
                    <p className="h4 ct-u-colorBlack ">{t("black_granit")}</p>
                </Col>
                <Col md={3} className="position-relative">
                    <Image className="engraving-bg" fluid src="assets/images/content/monument4ua.png"/>
                    <p className="h4 ct-u-colorBlack ">{t("black_granit")}</p>
                </Col>
                <Row className="p-5">
                    <Col md={3} className="position-relative">
                        <Image className="engraving-bg" fluid src="assets/images/content/monument5ua.png"/>
                        <p className="h4 ct-u-colorBlack ">{t("black_gray_granit")}</p>
                    </Col>
                    <Col md={3} className="position-relative">
                        <Image className="engraving-bg" fluid src="assets/images/content/monument6ua.png"/>
                        <p className="h4 ct-u-colorBlack ">{t("black_granit")}</p>
                    </Col>
                </Row>
            </Row>
        </>
    );
}

export default Monuments;