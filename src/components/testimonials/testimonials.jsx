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
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Parallax, Virtual} from 'swiper/modules';
import  Caption, { newinn } from "./caption";

function Testimonials() {
    const length = Object.keys(newinn).length;
    const virtSlides = Array.from({ length: length }, (v, i) => i);

    return (
        <section id="#testimonials" className="ct-mediaSection ct-mediaSectionSlider ct-u-colorWhite secondSlider">
                <Swiper
                    speed={400}
                    slidesPerView={1}
                    parallax={true}
                    navigation={{
                        nextEl: '.owl-next',
                        prevEl: '.owl-prev',
                    }}
                    virtual={true}
                    modules={[Navigation, Parallax, Virtual]}
                    style={{height: 450}}
                >
                    <div
                        slot="container-start"
                        className="parallax-bg"
                        style={{
                            backgroundImage:
                                'url(assets/images/content/parallax-image.jpg)',
                        }}
                    />

                    {virtSlides.map((content, index) => (
                        <SwiperSlide key={content} virtualIndex={index}/>
                    ))}

                    <Caption />

                    <div className="owl-buttons">
                        <div className="owl-prev" />
                        <div className="owl-next" />
                    </div>
                </Swiper>
        </section>
);
}

export default Testimonials;