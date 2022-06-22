import faker from "faker";

const cart = `<div>You have ${faker.random.number()} items </div>`;

document.querySelector(".cart").innerHTML = cart;
