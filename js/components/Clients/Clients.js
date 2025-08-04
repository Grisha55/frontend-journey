/**
 * @typedef {import('./types').Clients} Clients
 */

/**
 * @function Clients
 * @description Large UI component
 * @returns {Promise<string>} HTML or empty
 */

export const Clients = async () => {
  const API_URL = "http://localhost:3000/data/clients";

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    /** @type {Clients} */
    const data = await response.json();

    return /* html */ `
      <section class="clients">
        <div class="clients__wrapper">
          ${data.clients.map((client, index) => `
            <div class="clients__img">
              <img src="${client.image.lightSource}"
                   alt="${client.image.description}"
                   data-id="store"
                   data-index="${index}"
                   data-light-src="${client.image.lightSource}"
                   data-dark-src="${client.image.darkSource}">
            </div>
          `).join("")}
        </div>
      </section>
    `;
  } catch (error) {
    console.error(error);
    return '';
  }
};
