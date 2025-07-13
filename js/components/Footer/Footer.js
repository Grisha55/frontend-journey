/**
 * @typedef {import('./types').Footer} Footer
 */

/**
 * @function Footer
 * @description Large UI component
 * @returns {Promise<string>} HTML or empty
 */
export const Footer = async () => {

  const API_URL = 'http://localhost:3000/data/footer';

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    /** @type {Footer} */
    const data = await response.json();
    console.log(data);

    return /* html */`
      <footer class="footer" id="footer">
        <div class="footer__wrapper">
          <div class="footer__columns">
            ${data.columns.map(column => `
              <div class="column">
                <h3 class="column__title">${column.title}</h3>
                <ul class="column__list">
                  ${
                    column.type === 'social' && column.socialIcons
                      ? column.socialIcons.map(icon => `
                          <li class="column__item">
                            <a href="${icon.url}">
                              <img src="${icon.iconSrc}" alt="${icon.iconAlt}">
                            </a>
                          </li>
                        `).join('')
                      : column.type === 'contact' && column.email
                        ? `
                          <li class="column__item">
                            <a href="mailto:${column.email}">${column.email}</a>
                          </li>
                        `
                        : column.type === 'default' && column.links
                          ? column.links.map(link => `
                              <li class="column__item">
                                <a href="${link.url}">${link.text}</a>
                              </li>
                            `).join('')
                          : ''
                  }
                </ul>
              </div>
            `).join('')}
          </div>

          <div class="footer__info">
            <a class="footer__logo" href="${data.logo.url}">
              <img src="${data.logo.src}" alt="${data.logo.alt}">
            </a>

            ${data.infoTexts.map(text => `
              <p class="footer__copy">${text}</p>
            `).join('')}

            <a class="footer__dev" href="${data.developerLogo.url}">
              <img src="${data.developerLogo.src}" alt="${data.developerLogo.alt}">
            </a>
          </div>
        </div>
      </footer>
    `;
  } catch (error) {
    console.error(error);
    return '';
  }
};
