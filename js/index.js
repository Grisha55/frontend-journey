import { Warranty } from '/js/components/Warranty.js';
const $warranty = document.querySelector('#warranty');
$warranty.insertAdjacentHTML('beforeend', Warranty());

import { Download } from '/js/components/Download.js';
const $download = document.querySelector('#download');
$download.insertAdjacentHTML('beforeend', Download());

console.log($warranty);
console.log($download);