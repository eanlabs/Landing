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

import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ContactForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return(
        <Row>
            <Col md={{ span: 6, offset: 3 }} className="text-center ct-u-paddingTop80">
                <Form noValidate validated={validated} onSubmit={handleSubmit} data-bs-theme="dark">
                    <Row>
                        <Col md={12}>
                            <Form.Group  controlId="formGroupName" className="form-group">
                                <Form.Control required placeholder="Your name" className="ct-fs-i"/>
                                <Form.Control.Feedback type="invalid" tooltip>
                                    Please fill out this field
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group controlId="formGroupPhone" className="form-group">
                                <Form.Control required type="phone" placeholder="Phone no." className="ct-fs-i"/>
                                <Form.Control.Feedback type="invalid" tooltip>
                                    Please fill out this field
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group  controlId="formGroupEmail" className="form-group">
                                <Form.Control required type="email" placeholder="Email address" className="ct-fs-i"/>
                                <Form.Control.Feedback type="invalid" tooltip>
                                    Please fill out this field
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group controlId="formGroupMassage" className="form-group">
                                <Form.Control required placeholder="What can we do for you?" className="ct-fs-i"/>
                                <Form.Control.Feedback type="invalid" tooltip>
                                    Please fill out this field
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group  controlId="formGroupMassageContinue" className="form-group">
                                <Form.Control className="ct-fs-i"/>
                            </Form.Group>
                        </Col>
                        <Col md={12} className="text-center">
                            <Button bsPrefix="btn" variant="default" type="submit">Send Message</Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

export default ContactForm