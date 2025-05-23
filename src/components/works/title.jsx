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
import { useTranslation } from 'react-i18next';
import Image from "react-bootstrap/Image";

function Title() {
    const {t} = useTranslation('works');

    return (
        <Row className="ct-u-backgroundBlack">
            <Col md={6} className="" >
                <Image className="" fluid src="assets/images/content/our_works.jpg" />
            </Col>
            <Col md={6} className="">
                <h3 className="ct-fw-700 ct-u-colorWhite">{t('our_works_title')}</h3>
                <p className=" ct-u-fontSize24 ct-fw-700 ct-u-colorWhite">{t('our_works_descr_p0')}</p>
                <p className=" ct-u-fontSize24 ct-fw-700 ct-u-colorWhite">{t('our_works_descr_p1')}</p>
                <p className=" ct-u-fontSize24 ct-fw-700 ct-u-colorWhite">{t('our_works_descr_p2')}</p>
                <p className=" ct-u-fontSize24 ct-fw-700 ct-u-colorWhite">{t('our_works_descr_p3')}</p>
            </Col>
        </Row>
    );
}

export default Title;