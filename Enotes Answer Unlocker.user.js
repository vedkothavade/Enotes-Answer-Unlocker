// ==UserScript==
// @name         Enotes Answer Unlocker
// @version      1.0
// @description  Unlock Enotes Answers without paying
// @author       nightshade
// @match        https://www.enotes.com/
// @include      *://*enotes.com/*
// @grant        none
// ==/UserScript==

document.querySelectorAll('.is-paywalled').forEach(elem => {
   elem.classList.remove('is-paywalled');
});