import { data } from "./data/data.js";
import { Download } from "./components/Download/Download.js";
import { Warranty } from "./components/Warranty/Warranty.js";
import { Care } from "./components/Care/Care.js";
import { Cashback } from "./components/Cashback/Cashback.js";
import { Clients } from "./components/Clients/Clients.js";
import { Header } from "./components/Header/Header.js";
import { Footer } from "./components/Footer/Footer.js";
import { Modal } from "./components/Modal/Modal.js";
import { Menu } from "./components/Menu/Menu.js";
import './helpers/postForm.js';

const $root = document.getElementById("root");

(async () => {
  if ($root) {
    /* Построение UI */
    $root.insertAdjacentHTML("beforeend", await Download());
    $root.insertAdjacentHTML("beforeend", await Warranty());
    $root.insertAdjacentHTML("beforeend", await Care());
    $root.insertAdjacentHTML("beforeend", await Cashback());
    $root.insertAdjacentHTML("beforeend", await Header());
    $root.insertAdjacentHTML("beforeend", await Footer());
    $root.insertAdjacentHTML("beforeend", await Modal(data.modal));
    //$root.insertAdjacentHTML('beforeend', Menu(data.meta));
    $root.insertAdjacentHTML("beforeend", await Clients());

    /* Регистрация событий */
    const $form = document.getElementById('order');

    $form?.addEventListener('submit', () => {});
  }
})();
