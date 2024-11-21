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
import Title from "./title";
import Carts from "./carts";

function Services() {
    return (
        <section className="ct-mediaSection"
            //data-color="#fff" data-height="100%"
            //data-type="parallax"
            //data-background="assets/images/content/media-section-photo1.jpg"
            //data-background-mobile="assets/images/content/media-section-photo1.jpg"
            //data-stellar-background-ratio="0.3"
            //style={{
            //    backgroundImage: `url("assets/images/content/media-section-photo1.jpg")`,
            //    minHeight:840
            //}}
        >
            <div className="ct-mediaSection-inner">
                <Container>
                    <Title />
                </Container>
                <Carts />
            </div>
        </section>
);
}

export default Services;
