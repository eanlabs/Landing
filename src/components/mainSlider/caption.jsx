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

import React, {useState} from 'react';
import { useSwiper } from 'swiper/react';
import {Fade, Zoom} from "react-awesome-reveal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const zoom = (duration, text) => {
    return (
        <Zoom duration={duration}>
            <header className="h1 text-uppercase ct-u-colorWhite ct-fw-700 ">
                We Will help
            </header>
        </Zoom>
    )
}

const fade = (duration, direction = '', isHeader = false, text) => {
    return (
        <Fade duration={duration} direction={direction}>
            {isHeader ?
                <header className="h1 text-uppercase ct-u-colorWhite ct-fw-700 animated" >
                    Funeral Services
                </header>
                :
                <h5 className="ct-u-fontType2 ct-fs-i ct-u-colorMotive ct-u-marginTopMinus10 ct-u-paddingBottom15 ">
                    professional & affordable funeral services
                </h5>
            }
        </Fade>
    )
}


function Caption() {
    const swiper = useSwiper();

    const inner = {
        0: [zoom(700), fade(900)],
        1: [fade(700, 'down', true), fade(900, 'up')]
    }
    const [showCaption, setCaption] = useState(inner[0])
    swiper.on('slideChange', () => {
        setCaption(inner[swiper.activeIndex]);
    })

    return (
        <div className="caption">
            <Container>
                <Row>
                    <Col md={{span: 8, offset: 2}}>
                        <div className="ct-box">
                            <div className="ct-box-inner text-center">
                                {showCaption}
                            <a href="#" className="btn btn-default">Learn more</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Caption;