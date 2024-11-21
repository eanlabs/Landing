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

import React, { Suspense } from "react";
import Seo from "./components/seo/seo";
import Loader from './components/loader/loader';
import Header from './components/header';
import MainSlider from './components/mainSlider/mainSlider';
//import IconBox from './components/iconBox/iconbox';
import Works from "./components/works";
import About from './components/about/about';
import Services from './components/services';
//import Testimonials from './components/testimonials/testimonials';
import Obituaries from './components/obituaries';
import ContactUs from './components/contactus';
//import Footer from './components/footer/footer';
import Improvement from "./components/Improve";

function App() {
    return (
        <Suspense fallback={<Loader />}>
            <>
                <Seo />
                <Loader />
                <div id="ct-js-wrapper" className="ct-pageWrapper">
                    <Header />
                    <MainSlider />
                    {/*
                    <IconBox />
                    <Footer />
                    */}
                    <About />
                    <Services />
                    <ContactUs />
                    <Obituaries />
                    <Improvement />
                    <Works />
                </div>
            </>
        </Suspense>
    )
}

export default App
