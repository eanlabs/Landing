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
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";

function Title() {
    const {t} = useTranslation('service');

    return (
        <Row>
            <Col md={12} className="text-center ct-u-paddingTop70">
                <h2 className="ct-fw-700 ct-u-colorBlack section" id="services">{t('Title')}</h2>
                {/*
                <span className="ct-iconDivider ct-iconDivider--dark ct-iconDivider--withOpacity">
                    <i className="fa fa-leaf fa-2x"></i>
                </span>
                */}
            </Col>
            <Col md={3}>
                <div className="parallelogram parallelogram-bg1 mx-auto"></div>
                <p className="ct-u-fontSize24 ct-u-lineHeight30 ct-u-colorBlack icon-texts ">
                    {t("iconTxt1")}
                </p>
            </Col>
            <Col md={3}>
                <div className="parallelogram parallelogram-bg2 mx-auto"></div>
                <p className="ct-u-fontSize24 ct-u-lineHeight30 ct-u-colorBlack icon-texts ">
                    {t("iconTxt2")}
                </p>
            </Col>
            <Col md={3}>
                <div className="parallelogram parallelogram-bg3 mx-auto"></div>
                <p className="ct-u-fontSize24 ct-u-lineHeight30 ct-u-colorBlack icon-texts ">
                    {t("iconTxt3")}
                </p>
            </Col>
            <Col md={3}>
                <div className="parallelogram parallelogram-bg4 mx-auto"></div>
                <p className="ct-u-fontSize24 ct-u-lineHeight30 ct-u-colorBlack icon-texts ">
                    {t("iconTxt4")}
                </p>
            </Col>

            <p className="ct-u-fontSize24 ct-u-lineHeight30 ct-u-colorBlack text-center ct-fw-600">
                {t("iconFinishTxt")}
            </p>
        </Row>
    );
}

export default Title;