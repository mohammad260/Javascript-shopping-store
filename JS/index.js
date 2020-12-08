//variables
const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

let products = []
//cart
let cart = [];
//buttons
let buttonsDOM = [];

document.addEventListener("DOMContentLoaded", ()=> {
const displayProduct = new DisplayProduct();
const cart = new Cart();
const products = new Products();
const search = new Search();

//setup app
cart.setupApp();

// //get all products
products.getProducts().then(products => {displayProduct.displayProducts(products)
    Storage.saveProducts(products);
}).then(()=>{
    cart.getBagButtons();
    cart.cartLogic();
    search.searchBar();
    search.filterItemByClick();
});
});