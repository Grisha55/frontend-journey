export const Cashback = (data) => {
  if (!data) return '';

  return /* html */`
    <section class="cashback" id="cashback">
      <div class="cashback__wrapper">
        <div class="cashback__text-block">
          <h2 class="cashback__title">${data.title}</h2>
          <p class="cashback__copy">${data.text}</p>
        </div>
      </div>
    </section>
  `;
};