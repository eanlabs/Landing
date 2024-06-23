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
import Image from 'react-bootstrap/Image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Caption from "./caption";


function MainSlider() {
    return (
        <section className="ct-mainSlider ct-js-owl section" id="home" >
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                speed={400}
                style={{ height: 800 }}
            >
                <SwiperSlide key={0}>
                    <Image src='assets/images/content/slide1.jpg'/>
                </SwiperSlide>
                <SwiperSlide key={1}>
                    <Image src='assets/images/content/slide2.jpg'/>
                </SwiperSlide>

                <Caption />
            </Swiper>
        </section>
    );
}

export default MainSlider;