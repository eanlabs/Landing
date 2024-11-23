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
import Container from "react-bootstrap/Container";
import {Table} from "react-bootstrap";
import {useTranslation} from "react-i18next";

function Tables() {
    const {t} = useTranslation('price');

    return (
        <Container>
            <Row className="ct-u-backgroundWhite ct-u-paddingAll60">
                <Table responsive bordered hover variant="light" className="ct-fw-700">
                    <thead className="text-center  ct-u-fontSize14 text-capitalize">
                        <tr>
                            <th>{t('Table.head0')}</th>
                            <th style={{width: "10%"}}>{t('Table.head1')}</th>
                            <th>{t('Table.head2')}</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{t('Table.work0')}</td>
                        <td className="text-center">{t('Table.1week')}</td>
                        <td>{t('Table.price0')}</td>
                    </tr>
                    <tr>
                        <td>{t('Table.work1')}</td>
                        <td rowSpan={5} className="align-middle text-center">{t('Table.2week')}</td>
                        <td>{t('Table.price1')}</td>
                    </tr>
                    <tr>
                        <td>{t('Table.work2')}</td>
                        <td>{t('Table.price2')}</td>
                    </tr>
                    <tr>
                        <td>{t('Table.work3')}</td>
                        <td>{t('Table.price3')}</td>
                    </tr>
                    <tr>
                        <td>{t('Table.work4')}</td>
                        <td>{t('Table.price4')}</td>
                    </tr>
                    <tr>
                        <td>{t('Table.work5')}</td>
                        <td>{t('Table.price5')}</td>
                    </tr>
                    <tr>
                        <td>{t('Table.work6')}</td>
                        <td rowSpan={5} className="align-middle text-center">{t('Table.5mounth')}</td>
                        <td>{t('Table.price6')}</td>
                    </tr>
                    <tr>
                        <td>{t('Table.work7')}</td>
                        <td>{t('Table.price7')}</td>
                    </tr>
                    <tr>
                        <td>{t('Table.work8')}</td>
                        <td>{t('Table.price8')}</td>
                    </tr>
                    <tr>
                        <td>{t('Table.work9')}</td>
                        <td>{t('Table.price9')}</td>
                    </tr>
                    <tr>
                        <td>{t('Table.work10')}</td>
                        <td>{t('Table.price10')}</td>
                    </tr>

                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}

export default Tables;