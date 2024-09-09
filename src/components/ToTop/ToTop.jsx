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

import React, { useEffect, useState } from 'react';

function ToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const handleScroll = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    return (
        showButton ?
            (<a onClick={handleScroll} className="ct-scrollUpButton ct-scrollUpButton--Top ct-js-btnScrollUp">
                <span className="ct-sectioButton--square">
                       <i className="fa fa-angle-double-up"></i>
                   </span>
            </a>)
            : null
    );
}

export default ToTop;