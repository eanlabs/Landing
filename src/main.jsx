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
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from "react-helmet-async";
import App from './App.jsx';
import './i18n';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import '@fortawesome/fontawesome-free/css/regular.min.css';
import 'swiper/css/bundle';
import './assets/css/styles.css';
import './assets/css/motive.css';
import './assets/css/custom.css';
import './assets/css/fa-rtl.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
  </React.StrictMode>,
)
