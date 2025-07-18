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
import "./helpers/postForm.js";

const $root = document.getElementById("root");

(async function init() {
  if (!$root) {
    console.error("Root element not found");
    return;
  }

  try {
    // Рендер компонентов
    const components = [
      Download(),
      Warranty(),
      Care(),
      Cashback(),
      Header(),
      Footer(),
      Modal(),
      Menu(),
      Clients(),
    ];

    // Последовательный рендер
    for (const component of components) {
      $root.insertAdjacentHTML("beforeend", await component);
    }

    /* Регистрация событий */
    const $form = document.getElementById("order");
    $form?.addEventListener("submit", () => {});

    /**
     * @param {Event} event
     */
    function handleChange(event) {
      const target = /** @type {HTMLInputElement} */ (event.target);
      if (!target?.id || target.id !== "policy-checkbox") return;

      const icon = /** @type {HTMLImageElement | null} */ (
        document.getElementById("policy-icon")
      );
      if (!icon) return;

      icon.src = target.checked
        ? "/assets/icons/check.svg"
        : "/assets/icons/unchecked.svg";
    }

    // Вешаем обработчик после полной загрузки
    document.addEventListener("change", handleChange);
  } catch (error) {
    console.error("Initialization failed:", error);
  }
})();
