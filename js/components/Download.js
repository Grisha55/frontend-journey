export const Download = (data) => {
  if (!data) return '';

  return /* html */`
    <section class="download" id="download">
      <div class="download__wrapper">
        <div class="download__text-block">
          <h1 class="download__title">${data.title}</h1>
          <p class="data">${data.text}</p>
          <div class="download__links">
            <a class="download__link" href="${data.image.source}">
              <img src="${data.image.source}" alt="${data.image.description}">
            </a>
            <a class="download__link" href="${data.image.source}">
              <img src="${data.image.source}" alt="${data.image.description}">
            </a>
          </div>
        </div>
        <div class="download__image-block">
          <img src="${data.image.source}" alt="${data.image.description}">
        </div>
      </div>
    </section>
  `;
};