export const Warranty = (data) => {
  if (!data) return '';

  return /* html */`
    <section class="warranty" id="warranty">
      <div class="warranty__wrapper">
        <div class="warranty__text-block">
          <h2 class="warranty__title">${data.title}</h2>
          <p class="warranty__copy">${data.text}/p>
        </div>
        <div class="warranty__image-block">
          <img src="${data.image.source}" alt="${data.image.description}">
        </div>
      </div>
    </section>
  `;
};