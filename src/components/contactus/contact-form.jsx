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
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

function ContactForm() {
    const {t, i18n} = useTranslation('contacts');
    const [validated, setValidated] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const lang = i18n.language;
    let il = false;
    if (lang === 'he')
        il = !il;

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
        <Col md={4} className="text-center contact-form pt-5">
            {il ?
                <span>
                    <p className="h5 ct-u-colorWhite ct-fw-700">
                        {t("appName")} {t("inIL")}
                    </p>
                    <p className="h5 ct-u-colorWhite ct-fw-700">
                        {t("phone")}
                    </p>
                </span>
                :
                <span>
                    <p className="h5 ct-u-colorWhite ct-fw-700">
                        {t("appName")} {t("inUA")}
                    </p>
                    <p className="h5 ct-u-colorWhite ct-fw-700">
                        {t("phoneua")}
                    </p>
                </span>
            }
            <p className="h5 text-center ct-u-paddingBottom15 ct-u-colorWhite ct-fw-700">{t("mail")}</p>
            <Form noValidate validated={validated} onSubmit={handleSubmit} data-bs-theme="dark">
                <Row>
                    <Col md={12}>
                        <Form.Group controlId="formGroupName" className="form-group">
                            <Form.Control required placeholder={t('form.name')} name="user_name" className=""/>
                            <Form.Control.Feedback type="invalid" tooltip>
                                {t('form.tooltip')}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group controlId="formGroupPhone" className="form-group">
                            <Form.Control required type="phone" placeholder={t('form.phone')} name="user_phone"
                                          className=""/>
                            <Form.Control.Feedback type="invalid" tooltip>
                                {t('form.tooltip')}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group controlId="formGroupEmail" className="form-group">
                            <Form.Control required type="email" placeholder={t('form.mail')} name="user_email"
                                          className=""/>
                            <Form.Control.Feedback type="invalid" tooltip>
                                {t('form.tooltip')}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group controlId="formGroupMassage" className="form-group">
                            <Form.Control required placeholder={t('form.todo')} name="message1"
                                          className=""/>
                            <Form.Control.Feedback type="invalid" tooltip>
                                {t('form.tooltip')}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group controlId="formGroupMassageContinue" className="form-group">
                            <Form.Control name="message2" className=""/>
                        </Form.Group>
                    </Col>
                    <Col md={12} className="text-center">
                        <Button className="rounded-pill" bsPrefix="btn" variant="light" type="submit">{t('form.send')}</Button>
                    </Col>
                </Row>
            </Form>

            {success && (
                <div className="successMessage alert alert-success ct-frame ct-u-marginTop30">
                    <Button type="button" bsPrefix="close" aria-hidden={true} onClick={() => {
                        setSuccess(false)
                    }}>x</Button>
                    {t('form.success')}
                </div>)
            }

            {error && (
                <div className="errorMessage alert alert-danger ct-frame ct-u-marginTop30">
                    <Button type="button" bsPrefix="close" aria-hidden={true} onClick={() => {
                        setError(false)
                    }}>x</Button>
                    {t('form.error')}
                </div>)
            }
        </Col>
    )
}

export default ContactForm