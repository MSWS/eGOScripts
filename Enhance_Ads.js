// ==UserScript==
// @name         EGO Ad Resize
// @namespace    https://github.com/MSWS/eGOMonkey
// @updateURL    https://raw.githubusercontent.com/MSWS/eGOMonkey/master/Enhance_Ads.js
// @version      STABLE-1.0.1
// @description  Removes whitespace left over from ads on the EdgeGamers website. This is to be used in combination with an adblocker (such as U-Block Origin).
// @author       blank_dvth, Skle, MSWS
// @match        https://www.edgegamers.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=edgegamers.com
// @grant        none
// ==/UserScript==

"use strict";

(function () {
    // Remove banners
    const banners = [...document.querySelectorAll("div[style$=\"height:90px;\"]")];
    banners.forEach(banner => {
        banner.remove();
    });

    // Remove sidebar
    const mainBody = document.querySelector("div .p-body-main--withSidebar");
    if (mainBody)
        mainBody.classList.replace("p-body-main--withSidebar", "p-body-main");
    const sideBar = document.querySelector(".p-body-sidebar");
    if (sideBar)
        sideBar.remove();
    const sideBarCol = document.querySelector(".p-body-sidebarCol");
    if (sideBarCol)
        sideBarCol.remove();
})();
