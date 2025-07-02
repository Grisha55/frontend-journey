export const Care = (data) => {
  if (!data) return '';

  return /* html */`
    <section class="care" id="care">
      <div class="care__wrapper">
        <div class="care__text-block">
          <h2 class="care__title">${data.title}</h2>
          <p class="care__copy">${data.text}</p>
        </div>
        <div class="care__image-block">
          <img src="${data.image.source}" alt="${data.image.description}">
        </div>
      </div>
    </section>
  `;
};