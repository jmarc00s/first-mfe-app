import { mount } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartIndex";

const productsEl = document.querySelector(".products");
const cartEl = document.querySelector(".cart");

mount(productsEl);
mountCart(cartEl);
