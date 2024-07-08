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
import emailjs from '@emailjs/browser';

function ContactForm() {
    const [validated, setValidated] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (e.currentTarget.checkValidity() === false) {
            //e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true);

        const tplParams = {
            user_name: e.target.user_name.value,
            user_phone: e.target.user_phone.value,
            user_email: e.target.user_email.value,
            message1: e.target.message1.value,
            message2: e.target.message2.value
        }

        emailjs.send('service_tn9c719', 'template_tj8zxps', tplParams, {
            publicKey: '1sBo7tEQqyMaX_xRw'
        }).then(
            (response) => {
                setSuccess(true);
                console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
                setError(true)
                console.log('FAILED...', error);
            },
        );
    };

    return(
        <Row>
            <Col md={{span: 6, offset: 3}} className="text-center ct-u-paddingTop80">
                <Form noValidate validated={validated} onSubmit={handleSubmit} data-bs-theme="dark">
                    <Row>
                        <Col md={12}>
                            <Form.Group controlId="formGroupName" className="form-group">
                                <Form.Control required placeholder="Your name" name="user_name" className="ct-fs-i"/>
                                <Form.Control.Feedback type="invalid" tooltip>
                                    Please fill out this field
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group controlId="formGroupPhone" className="form-group">
                                <Form.Control required type="phone" placeholder="Phone no." name="user_phone"
                                              className="ct-fs-i"/>
                                <Form.Control.Feedback type="invalid" tooltip>
                                    Please fill out this field
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group controlId="formGroupEmail" className="form-group">
                                <Form.Control required type="email" placeholder="Email address" name="user_email"
                                              className="ct-fs-i"/>
                                <Form.Control.Feedback type="invalid" tooltip>
                                    Please fill out this field
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group controlId="formGroupMassage" className="form-group">
                                <Form.Control required placeholder="What can we do for you?" name="message1"
                                              className="ct-fs-i"/>
                                <Form.Control.Feedback type="invalid" tooltip>
                                    Please fill out this field
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group controlId="formGroupMassageContinue" className="form-group">
                                <Form.Control name="message2" className="ct-fs-i"/>
                            </Form.Group>
                        </Col>
                        <Col md={12} className="text-center">
                            <Button bsPrefix="btn" variant="default" type="submit">Send Message</Button>
                        </Col>
                    </Row>
                </Form>

                {success && (
                <div className="successMessage alert alert-success ct-frame ct-u-marginTop30">
                    <Button type="button" bsPrefix="close" aria-hidden={true} onClick={() => {setSuccess(false)}}>x</Button>
                    Thank You!
                </div>)
                }

                {error && (
                <div className="errorMessage alert alert-danger ct-frame ct-u-marginTop30">
                    <Button type="button" bsPrefix="close" aria-hidden={true} onClick={() => {setError(false)}}>x</Button>
                    Ups! An error occured. Please try again later.
                </div>)
                }

            </Col>
        </Row>
    )
}

export default ContactForm