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
  const $brandNodes = document.querySelectorAll('[data-id="brand"]');
  if (!$root || !$themeButton) return;

  const currentTheme = $themeButton.dataset.theme;
  const isDarkTheme = currentTheme === "light";

  // Update theme
  $themeButton.dataset.theme = isDarkTheme ? 'dark' : 'light';
  $themeButton.innerHTML = isDarkTheme ? generateSunIcon() : generateMoonIcon();
  $root.dataset.theme = isDarkTheme ? 'dark' : 'light';

  // Update the images
  $brandNodes.forEach((brand, index) => {
    const num = index + 1;
    brand.src = isDarkTheme
      ? `/assets/brands/dark/${num}.svg`
      : `/assets/brands/light/${num}.svg`;
  });
};
