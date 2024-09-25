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

import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Caption(props) {
    const { inner } = props;

    const swiper = useSwiper();
    const {t} = useTranslation('header');

    const [showCaption, setCaption] = useState(inner[0]);

    useEffect(() => {
        if (swiper.activeIndex !== undefined)
            setCaption(inner[swiper.activeIndex]);
        return () => {
            setCaption(inner[0]);
        }
    }, [inner]);

    swiper.on('slideChange', () => {
        setCaption(inner[swiper.activeIndex]);
    })

    return (
        <div className="caption" key={swiper.activeIndex}>
            <Container>
                <Row>
                    <Col md={{span: 8, offset: 2}}>
                        <div className="ct-box">
                            <div className="ct-box-inner text-center">
                                {showCaption}
                                {/* <a href="#" className="btn btn-default">{t('morebtn')}</a> */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Caption;