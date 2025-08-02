import { generateAppleBtnIcon } from '../../generateAppleBtnIcon';
import { generateGoogleBtnIcon } from '../../generateGoogleBtnIcon';

/**
 * @typedef {import('./types').StoreData} StoreData
 */

/**
 * @function Store
 * @param {StoreData} data
 * @param {string} className
 * @returns {string} HTML
 */

export const Store = (data, className) => `
  <a class="${className}" href="${data.name}">
    ${data.name === 'apple' ? generateAppleBtnIcon() : ''}
    ${data.name === 'google' ? generateGoogleBtnIcon() : ''}
  </a>
`;