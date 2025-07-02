import { Warranty } from '/js/components/Warranty.js';

const $warranty = document.querySelector('#warranty');


$warranty.insertAdjacentHTML('beforeend', Warranty());

console.log($warranty);