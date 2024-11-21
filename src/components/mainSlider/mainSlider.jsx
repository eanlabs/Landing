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
import {Fade, Zoom} from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';
import Caption from "./caption";


const zoom = (duration, text, key) => {
    return (
        <Zoom duration={duration} key={key}>
            <header className="h1 text-uppercase ct-u-colorWhite ct-fw-700 ">
                {text}
            </header>
        </Zoom>
    )
}

const fade = (duration, direction = '', isHeader = false, text, key) => {
    return (
        <Fade duration={duration} direction={direction} key={key}>
            {isHeader ?
                <header className="h1 text-uppercase ct-u-colorWhite ct-fw-700 animated" >
                    {text}
                </header>
                :
                <h5 className="ct-u-fontType2 ct-fs-i ct-u-colorMotive ct-u-marginTopMinus10 ct-u-paddingBottom15 ">
                    {text}
                </h5>
            }
        </Fade>
    )
}


function MainSlider() {
    const isMobile = window.innerWidth < 767
    const {t, i18n} = useTranslation('header');

    const inner = {
        0: [zoom(700, t('slider.head0'), 0), fade(900, 'up', false, t('slider.text'), 1)],
        1: [fade(700, 'down', true, t('slider.head1'), 0), fade(900, 'up', false, t('slider.text'), 1)]
    }

    let dir = "ltr"
    if(i18n.language === 'he')
      dir = "rtl"



    return (
        <section className="ct-mainSlider ct-js-owl section" id="home" >
            <Swiper
                //modules={[Pagination]}
                slidesPerView={1}
                //pagination={{ clickable: true }}
                speed={400}
                //style={{ height: 800 }}
                dir={dir}
                key={i18n.language}
            >
                <SwiperSlide >
                    <Image className="w-100" src='assets/images/content/slide1.png'/>
                </SwiperSlide>
                {/*
                <SwiperSlide >
                    <Image src='assets/images/content/slide2.jpg'/>
                </SwiperSlide>
                */}


                    <Caption inner={inner} />
            </Swiper>
        </section>
    );
}

export default MainSlider;