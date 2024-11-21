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

import React from "react";
import Title from "./title";
import Gallery from "./gallery";
import Container from "react-bootstrap/Container";
import Tables from "./Tables";

function Obituaries() {
    return(
        <>
        <section className="container-fluid ct-u-backgroundBlack section" id="obituaries">
            <Container className="">
                <Title />
            </Container>
            <Gallery />
        </section>
        <section className="container-fluid ct-u-backgroundWhite  section" id="tables">
            <Tables />
        </section>
        </>
    )
}

export default Obituaries