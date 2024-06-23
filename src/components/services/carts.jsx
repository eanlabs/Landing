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
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Carts() {
    return (
        <Row className="ct-u-paddingTop55 ct-u-marginBottom30">
            <Col md={4} sm={6} className="ct-u-paddingBottom30">
                <div className="ct-iconBoxes ct-frame">
                    <div className="ct-iconBoxes-icon">
                        <span className="ct-iconDivider ct-iconDivider--dark">
                            <i className="fa fa-fire fa-2x"></i>
                        </span>
                    </div>
                    <div className="ct-iconBoxes-title">obituaries</div>
                    <div className="ct-iconBoxes-description">
                        <p>
                            Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non
                            est.
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Carts;