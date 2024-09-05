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
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

function Seo() {
    const {t, i18n} = useTranslation('seo');
    const lang = i18n.language;
    console.log(lang);
    let dir = "ltr";
    let boClass = '';
    if (lang === 'he') {
        dir = 'rtl';
        boClass = 'rtl';
    }


    return (
        <Helmet>
            <html lang={lang} dir={dir} />
            <title>{t('title')}</title>
            <meta name="description" content={t('description')} />
            <meta name="keywords" content={t('keywords')} />
            <body className={boClass} />
        </Helmet>
    );
}

export default Seo;