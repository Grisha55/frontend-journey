import { Warranty } from '/js/components/Warranty.js';
const $warranty = document.querySelector('#warranty');
$warranty.insertAdjacentHTML('beforeend', Warranty());

import { Download } from '/js/components/Download.js';
const $download = document.querySelector('#download');
$download.insertAdjacentHTML('beforeend', Download());

import { Care } from '/js/components/Care.js';
const $care = document.querySelector('#care');
$care.insertAdjacentHTML('beforeend', Care());

import { Cashback } from '/js/components/Cashback.js';
const $cashback = document.querySelector('#cashback');
$cashback.insertAdjacentHTML('beforeend', Cashback());

console.log($warranty);
console.log($download);
console.log($care);
console.log($cashback);