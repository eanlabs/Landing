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

function Title() {
    const {t} = useTranslation('improve');

    return (
        <Row className="ct-u-backgroundBlack">
            <Col md={5} className="" >
                <Image className="" fluid src="assets/images/content/improve.jpg" />
            </Col>
            <Col md={7} className="">
                <h3 className="ct-fw-700 ct-u-colorWhite">{t('titles.title')}</h3>
                <p className=" ct-u-fontSize24 ct-fw-700 ct-u-colorWhite">{t('titles.block1.desc')}</p>
                <ul className="ct-u-fontSize24 ct-u-colorWhite">
                    <li>{t('titles.block1.list.l0')}</li>
                    <li>{t('titles.block1.list.l1')}</li>
                    <li>{t('titles.block1.list.l2')}</li>
                    <li>{t('titles.block1.list.l3')}</li>
                </ul>

                <p className=" ct-u-fontSize24 ct-fw-700 ct-u-colorWhite">{t('titles.block2.desc')}</p>
                <ul className="ct-u-fontSize24 ct-u-colorWhite">
                    <li>{t('titles.block2.list.l0')}</li>
                    <li>{t('titles.block2.list.l1')}</li>
                    <li>{t('titles.block2.list.l2')}</li>
                    <li>{t('titles.block2.list.l3')}</li>
                    <li>{t('titles.block2.list.l4')}</li>
                </ul>
            </Col>
        </Row>
    );
}

export default Title;