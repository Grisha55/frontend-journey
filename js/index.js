import { data } from './data/data.js';
import { Download } from './components/Download/Download.js';
import { Warranty } from './components/Warranty/Warranty.js';
import { Care } from './components/Care/Care.js';
import { Cashback } from './components/Cashback/Cashback.js';
import { Clients } from './components/Clients/Clients.js';
import { Header } from './components/Header/Header.js';
import { Footer } from './components/Footer/Footer.js';
import { Modal } from './components/Modal/Modal.js';
import { Menu } from './components/Menu/Menu.js';

(async () => {
  //const url = 'http://localhost:5000/api/data';
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const response = await fetch(url);
  const resData = await response.json();
  if (!resData) return;

  const $root = document.getElementById('root');
  if (!$root) return;

  $root.insertAdjacentHTML('beforeend', Download(data.download));
  $root.insertAdjacentHTML('beforeend', Warranty(data.warranty));
  $root.insertAdjacentHTML('beforeend', Care(data.care));
  $root.insertAdjacentHTML('beforeend', Cashback(data.cashback));
  $root.insertAdjacentHTML('beforeend', Header(data.header));
  $root.insertAdjacentHTML('beforeend', Footer(data.footer));
  $root.insertAdjacentHTML('beforeend', Modal(data.modal));
  // $root.insertAdjacentHTML('beforeend', Menu(data.meta));
  $root.append(Clients(data.clients));
})();