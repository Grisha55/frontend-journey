/**
 * @typedef {import('./types').Clients} Clients
 */

/**
 * @function Clients
 * @description Large UI component
 * @returns {Promise<string>} HTML or empty
 */

export const Clients = async () => {
  
  const API_URL = 'http://localhost:3000/data/clients';

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    /** @type {Clients} */
    const data = await response.json()
    console.log(data);

    return /* html */`
      <section class="clients">
        <div class="clients__wrapper">
          ${data.clients.map(
            (client) => `
              <div class="clients__img">
                <img src=${client.image.source} alt=${client.image.description}>
              </div>
              `
          ).join('')}
        </div>
      </section>
    `
  } catch (error) {
    console.error(error);
    return '';
  }
};