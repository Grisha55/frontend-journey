import { data } from './data/data';
import { Download } from './components/Download/Download.js';

const $root = document.getElementById('root');

if ($root) {
  $root.insertAdjacentHTML('beforeend', Download(data.download));
}
