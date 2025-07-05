import { data } from './data/data';
import { Download } from './components/Download/Download.js';
import { Warranty } from './components/Warranty/Warranty.js';
import { Care } from './components/Care/Care.js';
import { Cashback } from './components/Cashback/Cashback.js';

const $root = document.getElementById('root');

if ($root) {
  $root.insertAdjacentHTML('beforeend', Download(data.download));
  $root.insertAdjacentHTML('beforeend', Warranty(data.warranty));
  $root.insertAdjacentHTML('beforeend', Care(data.care));
  $root.insertAdjacentHTML('beforeend', Cashback(data.cashback));
}
