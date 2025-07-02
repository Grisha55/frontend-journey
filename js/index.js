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

import { Clients } from '/js/components/Clients.js';
const $clients = document.querySelector('#clients');
$clients.insertAdjacentHTML('beforeend', Clients());

import { Footer } from '/js/components/Footer.js';
const $footer = document.querySelector('#footer');
$footer.insertAdjacentHTML('beforeend', Footer());

import { Header } from '/js/components/Header.js';
const $header = document.querySelector('#header');
$header.insertAdjacentHTML('beforeend', Header());

import { Modal } from '/js/components/Modal.js';
const $modal = document.querySelector('#modal');
$modal.insertAdjacentHTML('beforeend', Modal());

console.log($warranty);
console.log($download);
console.log($care);
console.log($cashback);
console.log($clients);
console.log($footer);
console.log($header);
console.log($modal);