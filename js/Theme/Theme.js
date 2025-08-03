import { generateMoonIcon } from "../ui/generateMoonIcon.js";

/**
 * @function Theme
 * @param {string} className
 * @returns {string} HTML
 */

export const Theme = (className) => `
  <button class="${className}"
    type="button"
    id="theme"
    data-theme="light"
  >
    ${generateMoonIcon()}
  </button>
`;