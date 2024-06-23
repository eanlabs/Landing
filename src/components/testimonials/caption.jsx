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

import React, { useState } from 'react';
import { useSwiper } from 'swiper/react';
import { Fade } from "react-awesome-reveal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const fadeLeft = (duration,  direction = '', text) => {
    return (
        <Fade duration={duration} direction={direction}>
            <header className="h2 ct-u-colorWhite ct-fs-i ct-u-fontType2 ">
                {text}
            </header>
        </Fade>
    )
}

const fadeLeftCite = (duration, direction='', text) => {
    return (
        <Fade duration={duration} direction={direction}>
            <cite className="ct-fs-i ct-fw-700 ct-u-colorWhite ct-u-marginTopMinus10">
                {text}
            </cite>
        </Fade>
    )
}

const fadeRight = (duration, direction='', text) => {
    return (
        <Fade duration={duration} direction={direction}>
            <p className="ct-u-paddingBoth50 ct-u-fontType2 ct-fs-i">
                {text}
            </p>
        </Fade>
    )
}

const t1 = 'Nam congue, pede vitae\n' +
    '                dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non\n' +
    '                est. Etiam\n' +
    '                sit amet lectus quis est congue mollis. Phasellus congue lacus eget\n' +
    '                neque\n' +
    '                commodo consequat.';

const t2 = 'Lorem ipsum\n' +
    '                                            dolor sit amet,\n' +
    '                                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
    '                                            labore et\n' +
    '                                            dolore magna aliqua. Ut enim ad minim veniam, aliquip ex ea commodo\n' +
    '                                            consequat.';

const t3 ='True help';
const t4 = "Conrad, Illinois";
const t5 = 'Professional service';
const t6 = 'John, Washington';

export const newinn = {
    0: [fadeLeft(1500, 'down', t3), fadeLeftCite(1500, 'down', t4), fadeRight(1500, 'up', t1)],
    1: [fadeLeft(600, 'up', t5), fadeLeftCite(600, 'up', t6), fadeRight(600, 'down', t2)]
}


function Caption() {
    const swiper = useSwiper();

    const [showCaptionLeft, setCaptionLeft] = useState(newinn[0][0]);
    const [showCaptionLeftCite, setCaptionLeftCite] = useState(newinn[0][1]);
    const [showCaptionRight, setCaptionRight] = useState(newinn[0][2]);

    swiper.on('slideChange', () => {
        setCaptionLeft(newinn[swiper.activeIndex][0]);
        setCaptionLeftCite(newinn[swiper.activeIndex][1]);
        setCaptionRight(newinn[swiper.activeIndex][2]);
    })

    return (
        <div className="caption">
            <blockquote className="ct-blockquoteBox">
                <Row>
                    <Col md={6} lg={6}>
                        <div className="ct-box ct-box--giveTriangle ct-u-marginTop60">
                            <div className="ct-box-inner text-center">
                                <i className="fa fa-quote-left fa-2x ct-u-colorMotive ct-u-paddingTop40 ct-u-paddingBottom5"></i>
                                {showCaptionLeft}
                                {showCaptionLeftCite}
                            </div>
                        </div>
                    </Col>

                    <Col md={6} lg={6} className="ct-blockquote ct-u-backgroundBlack ct-u-paddingBoth100">
                        {showCaptionRight}
                    </Col>
                </Row>
            </blockquote>
        </div>
    );
}

export default Caption;