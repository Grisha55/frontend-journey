import { Warranty } from '/js/components/Warranty.js';
const $warranty = document.querySelector('#warranty');
$warranty.insertAdjacentHTML('beforeend', Warranty());

import { Download } from '/js/components/Download.js';
const $download = document.querySelector('#download');
$download.insertAdjacentHTML('beforeend', Download());

import { Care } from '/js/components/Care.js';
const $care = document.querySelector('#care');
$care.insertAdjacentHTML('beforeend', Care());

console.log($warranty);
console.log($download);
console.log($care);