export const Header = (data) => {
  if (!data) return '';

  return /* html */`
    <header class="header" id="header">
      <div class="header__wrapper">
        <button class="header__logo" type="button" id="logo">
          <img src="${data.image.source}" alt="${data.image.description}">
        </button>
        <nav class="header__nav">
          <ul class="menu" id="menu">
          <li class="menu__item">
            <a href="#download">Download</a>
          </li>
         </ul>
        </nav>
        
        <div class="header__actions">
          <label class="header__lang">
            <img src="${data.image.source}" alt="${data.image.description}">
            <select id="lang">
              <option value="en">EN</option>
              <option value="ru">RU</option>
            </select>
          </label>
           <button class="header__theme" type="button" id="theme">
            <img src="${data.image.source}" alt="${data.image.description}">
           </button>
          <button class="burger" type="button" id="burger">
            <span></span>
          </button>
        </div>
      </div>
    </header>
  `;
};