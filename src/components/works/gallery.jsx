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
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from "react-bootstrap/Image";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules';

const Slider = (props) => {
    const { slide } = props;
   return (
       <Col md={4} lg={4} className="ct-u-paddingBoth30">
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                navigation={true}
                speed={400}
            >
                <SwiperSlide>
                    <Image src={`assets/images/content/work/after/${slide}`} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`assets/images/content/work/before/${slide}`} />
                </SwiperSlide>
            </Swiper>
       </Col>
   );
};


function Gallery() {
    const slides_list =[
        'Artboard1.jpg',
        'Artboard2.jpg',
        'Artboard3.jpg',
        'Artboard4.jpg',
        'Artboard5.jpg',
        'Artboard6.jpg',
        'Artboard7.jpg',
        'Artboard8.jpg',
        'Artboard9.jpg'
    ];

    return (
        <Container>
            <Row >
                {slides_list.map((slide, i) => (
                    <Slider key={i} slide={slide} />
                ))}
            </Row>
        </Container>
    );
}

export default Gallery;