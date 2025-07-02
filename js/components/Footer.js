export const Footer = (data) => {
  if (!data) return '';

  return /* html */`
    <footer class="footer" id="footer">
      <div class="footer__wrapper">
        <div class="footer__columns">
          <div class="column">
            <h3 class="column__title">${data.title}</h3>
            <ul class="column__list">
              <li class="column__item">
                <a href="https://example.com">Help center</a>
              </li>
            </ul>
          </div>
        <div class="footer__info">
          <p class="footer__copy">${data.text}</p>
          <a class="footer__dev" href="https://example.com">
            <img src="${data.image.source}" alt="${data.image.description}">
          </a>
        </div>
      </div>
    </footer>
  `;
};