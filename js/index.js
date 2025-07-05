import { data } from './data/data';
import { Download } from './components/Download/Download.js';
import { Warranty } from './components/Warranty/Warranty.js';

const $root = document.getElementById('root');

if ($root) {
  $root.insertAdjacentHTML('beforeend', Download(data.download));
  $root.insertAdjacentHTML('beforeend', Warranty(data.warranty));
}
