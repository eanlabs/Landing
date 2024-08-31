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

function Advantages() {
    const {t} = useTranslation('service');

    return (
        <>
            <Row>
                <Col md={12} className="text-center ct-u-paddingTop70">
                    <h3 className="text-uppercase ct-fw-700 ct-u-colorWhite section"
                        id="services">{t('advantages.title')}</h3>
                    <span className="ct-iconDivider ct-iconDivider--dark ct-iconDivider--withOpacity">
                        <i className="fa fa-leaf fa-2x"></i>
                    </span>
                </Col>
            </Row>

            <Row>
                <ul className="ct-u-fontSize24 ct-u-colorWhite ct-u-lineHeight36 ct-u-paddingLeft100 ct-u-paddingBottom30">
                    <li>{t('advantages.list1.l0')}</li>
                    <li>{t('advantages.list1.l1')}</li>
                    <li>{t('advantages.list1.l2')}</li>
                    <li>{t('advantages.list1.l3')}</li>
                    <li>{t('advantages.list1.l4')}</li>
                </ul>


                <p className="ct-u-fontSize24 ct-u-colorWhite ct-u-lineHeight36 ct-u-paddingBottom50">
                    {t('advantages.list1.descr')}
                </p>

                <p className="ct-u-fontSize24 ct-u-colorWhite ct-u-lineHeight36">
                    {t('advantages.list2.descr')}
                </p>

                <ol className="ct-u-fontSize24 ct-u-colorWhite ct-u-lineHeight36 ct-u-paddingLeft100 ct-u-paddingBottom30">
                    <li>{t('advantages.list2.l0')}</li>
                    <li>{t('advantages.list2.l1')}</li>
                    <li>{t('advantages.list2.l2')}</li>
                    <li>{t('advantages.list2.l3')}</li>
                    <li>{t('advantages.list2.l4')}</li>
                    <li>{t('advantages.list2.l5')}</li>
                    <li>{t('advantages.list2.l6')}</li>
                    <li>{t('advantages.list2.l7')}</li>
                </ol>

            </Row>
        </>
    );
}

export default Advantages;