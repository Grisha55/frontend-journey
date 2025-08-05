import { generateSunIcon } from "./ui/generateSunIcon.js";
import { generateMoonIcon } from "./ui/generateMoonIcon.js";

/**
 * @function onThemeClick
 * @description In anonymous handler
 * @param {Event} event
 * @returns {void}
*/

export const onThemeClick = (event) => {
  const $root = document.getElementById('root');
  const $themeButton = /** @type {HTMLElement | null} */ (event.currentTarget);
  /** @type {NodeListOf<HTMLImageElement>} */
  const $stores = document.querySelectorAll('[data-id="store"]');
  const logoElement = document.getElementById('developerLogo'); 
  if (!$root || !$themeButton) return;

  const currentTheme = $themeButton.dataset.theme;
  const isDarkTheme = currentTheme === "light";

  // Update theme
  $themeButton.dataset.theme = isDarkTheme ? 'dark' : 'light';
  $themeButton.innerHTML = isDarkTheme ? generateSunIcon() : generateMoonIcon();
  $root.dataset.theme = isDarkTheme ? 'dark' : 'light';

  // Update the images
  $stores.forEach((store, index) => {
    const num = index + 1;
    store.src = isDarkTheme
      ? `/assets/stores/dark/${num}.svg`
      : `/assets/stores/light/${num}.svg`;
  });

  // Update developer logo
  if (logoElement instanceof HTMLImageElement) {
    const $developerLogo = logoElement;
    $developerLogo.src = isDarkTheme 
      ? '/assets/icons/logo_dark.svg'
      : '/assets/icons/logo_light.svg';
  } else {
    console.error('Element is not image or non founded');
  }
};
