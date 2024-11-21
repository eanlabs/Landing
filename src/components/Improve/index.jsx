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
import Title from "./title";
import Stones from "./stones";
import Filling from "./filling";
import Decor from "./decor";
import Engraving from "./engraving";
import Monuments from "./monuments";

function Improvement() {
    return (
        <section className="ct-decorSection  section" id="improvement">
            <Title />
            <Stones />
            <Filling />
            <Decor />
            <Engraving />
            <Monuments />
        </section>
    );
}

export default Improvement;