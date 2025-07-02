export const Clients = (data) => {
  if (!data) return '';

  return /* html */`
    <section class="clients" id="clients">
      <div class="clients__wrapper">
        <ul class="clients__brands">
          <li class="clients__brand">
            <img src="${data.image.source}" alt="${data.description}">
          </li>
        </ul>
      </div>
    </section>
  `;
};