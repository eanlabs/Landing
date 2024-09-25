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
import { useTranslation } from "react-i18next";
import Advantages from "./advantages";

function Carts() {
    const {t} = useTranslation('service');

    return (
        <Row className="ct-u-paddingTop55 ct-u-marginBottom30">

            <ul className="fa-ul ct-u-fontSize24 ct-u-colorWhite ct-u-lineHeight36 ct-u-paddingBottom30">
                <li><span className="fa-li"><i className="fa-solid fa-check"></i></span>{t('Body.list1.l0')}</li>
                <li><span className="fa-li"><i className="fa-solid fa-check"></i></span>{t('Body.list1.l1')}</li>
                <li><span className="fa-li"><i className="fa-solid fa-check"></i></span>{t('Body.list1.l2')}</li>
                <li><span className="fa-li"><i className="fa-solid fa-check"></i></span>{t('Body.list1.l3')}</li>
                <li><span className="fa-li"><i className="fa-solid fa-check"></i></span>{t('Body.list1.l4')}</li>
            </ul>


            <p className="ct-u-fontSize24 ct-u-colorWhite ct-u-lineHeight36 ct-u-paddingBottom30">
                {t('Body.Desc1')}
            </p>

            <ul className="fa-ul ct-u-fontSize24 ct-u-colorWhite ct-u-lineHeight36 ct-u-paddingBottom30">
                <li><span className="fa-li"><i className="fa fa-th-large"
                                               style={{rotate: `45deg`}}></i></span>{t('Body.list2.l0')}</li>
                <li><span className="fa-li"><i className="fa-solid fa-th-large"
                                               style={{rotate: `45deg`}}></i></span>{t('Body.list2.l1')}</li>
                <li><span className="fa-li"><i className="fa-solid fa-th-large"
                                               style={{rotate: `45deg`}}></i></span>{t('Body.list2.l2')}</li>
                <li><span className="fa-li"><i className="fa-solid fa-th-large"
                                               style={{rotate: `45deg`}}></i></span>{t('Body.list2.l3')}</li>
            </ul>

            <p className="ct-u-fontSize24 ct-u-colorWhite ct-u-lineHeight36 ct-u-paddingBottom30">
                {t('Body.Desc2')}
            </p>

            <p className="ct-u-fontSize24 ct-u-colorWhite ct-u-lineHeight36 ">
                {t('Body.list3.title')}
            </p>
            <ul className="ct-u-fontSize24 ct-u-colorWhite ct-u-lineHeight36 ct-u-paddingLeft100 ct-u-paddingBottom30">
                <li>{t('Body.list3.l0')}</li>
                <li>{t('Body.list3.l1')}</li>
                <li>{t('Body.list3.l2')}</li>
                <li>{t('Body.list3.l3')}</li>
                <li>{t('Body.list3.l4')}</li>
                <li>{t('Body.list3.l5')}</li>
                <li>{t('Body.list3.l6')}</li>
                <li>{t('Body.list3.l7')}</li>
                <li>{t('Body.list3.l8')}</li>
                <li>{t('Body.list3.l9')}</li>
                <li>{t('Body.list3.l10')}</li>
                <li>{t('Body.list3.l11')}</li>
                <li>{t('Body.list3.l12')}</li>
                <li>{t('Body.list3.l13')}</li>
                <li>{t('Body.list3.l14')}</li>
                <li>{t('Body.list3.l15')}</li>
            </ul>



            <p className="ct-u-fontSize24 ct-u-colorWhite ct-u-lineHeight36">
                {t('Body.Desc3')}
            </p>

            <Advantages />

            {/*
            <Col md={4} sm={6} className="ct-u-paddingBottom30">
                <div className="ct-iconBoxes ct-frame">
                    <div className="ct-iconBoxes-icon">
                        <span className="ct-iconDivider ct-iconDivider--dark">
                            <i className="fa fa-fire fa-2x"></i>
                        </span>
                    </div>
                    <div className="ct-iconBoxes-title">obituaries</div>
                    <div className="ct-iconBoxes-description">
                        <p>
                            Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non
                            est.
                        </p>
                    </div>
                </div>
            </Col>
            */}
        </Row>
    );
}

export default Carts;