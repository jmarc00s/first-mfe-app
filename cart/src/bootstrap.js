import faker from "faker";

const mount = (el) => {
  const cart = `<div>You have ${faker.random.number()} items </div>`;
  el.innerHTML = cart;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector(".cart");

  if (el) mount(el);
}

export { mount };
