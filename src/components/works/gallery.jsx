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
import {useTranslation} from "react-i18next";
import ToTop from "../ToTop/ToTop";

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
    const {t} = useTranslation('works');

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
        <>
            <Row className="ct-u-backgroundWhite p-5">
                <h3 className="ct-fw-700 text-center ct-u-colorBlack">{t('report_title')}</h3>
                <Col md={4} className="pb-5">
                    <Image className="" fluid src="assets/images/content/16.Our_work1.jpg"/>
                </Col>
                <Col md={4} className="pb-5">
                    <Image className="" fluid src="assets/images/content/16.Our_work2.jpg"/>
                </Col>
                <Col md={4} className="pb-5">
                    <Image className="" fluid src="assets/images/content/16.Our_work3.jpg"/>
                </Col>
                <Col md={4} className="pb-5">
                    <Image className="" fluid src="assets/images/content/16.Our_work4.jpg"/>
                </Col>
                <Col md={4} className="pb-5">
                    <Image className="" fluid src="assets/images/content/16.Our_work5.jpg"/>
                </Col>
                <Col md={4} className="pb-5">
                    <Image className="" fluid src="assets/images/content/16.Our_work6.jpg"/>
                </Col>
            </Row>

            <div className="our_work-bg"></div>
            {/*
            <Container>
                <Row >
                    {slides_list.map((slide, i) => (
                        <Slider key={i} slide={slide} />
                    ))}
                </Row>
            </Container>
            */}
            <ToTop />
        </>
    );
}

export default Gallery;