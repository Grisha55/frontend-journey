/**
 * @typedef {import('./types').Footer} Footer
 */

/**
 * @function Footer
 * @param {Footer} data
 * @returns {string}
 */
export const Footer = (data) => {
  if (!data) return "";

  const { logo, columns, infoTexts, developerLogo } = data;

  return /* html */`
    <footer class="footer" id="footer">
      <div class="footer__wrapper">
        <div class="footer__columns">
          ${columns.map(column => `
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
          <a class="footer__logo" href="${logo.url}">
            <img src="${logo.src}" alt="${logo.alt}">
          </a>

          ${infoTexts.map(text => `
            <p class="footer__copy">${text}</p>
          `).join('')}

          <a class="footer__dev" href="${developerLogo.url}">
            <img src="${developerLogo.src}" alt="${developerLogo.alt}">
          </a>
        </div>
      </div>
    </footer>
  `;
};