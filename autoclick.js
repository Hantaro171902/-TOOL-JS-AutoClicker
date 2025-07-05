// TODO: Auto Slide Clicker
// Description: Automatically clicks the "Next" button on a slide show every 3 seconds
// Author : Hantaro171902
// Date: 2025-07-05
// Version: 1.0.0
// License: MIT

// ==UserScript==
// @name         Auto Slide Clicker
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Automatically clicks the "Next" button on a slide show every 3 seconds
// @author       Hantaro171902
// @match        *://*/*
// @grant        none
(function() {
    'use strict';

    console.log('✅ Auto Slide Clicker Loaded');

    const interval = setInterval(() => {
        try {
            const nextBtn = document.querySelector('#btnNext');
            if (nextBtn && !nextBtn.disabled && nextBtn.offsetParent !== null) {
                console.log('➡️ Clicking #btnNext');
                nextBtn.click();
            } else {
                console.log('⏳ Next button not ready');
            }
        } catch (err) {
            console.error('❌ Error in slide clicker:', err);
        }
    }, 3000); // every 3 seconds
})();