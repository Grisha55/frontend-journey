/**
 * @typedef {import('./types').ImageData} ImageData
 */

/**
 * @function Image
 * @param {ImageData} data
 * @param {string} className
 * @returns {string} HTML 
 */

export const Image = (data, className) => {
  return `<img src="${data.source}" alt="${data.description}"></img>`
};