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
import Container from 'react-bootstrap/Container';
import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";

function ContactUs() {
    return(
        <section className="ct-contactSection ct-u-backgroundBlack ct-u-paddingTop90 ct-u-paddingBottom95 section" id="contact">
            <Container>
                <ContactInfo />
                <ContactForm />
            </Container>
        </section>
    )

}

export default ContactUs