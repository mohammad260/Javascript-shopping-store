// //local storage
class Storage{
  static saveProducts(products){
      localStorage.setItem("products",JSON.stringify(products));
  }
  //get product from localStorage
  static getProducts(id){
      let products = JSON.parse(localStorage.getItem('products'));
      return products.find(product => product.id === id);
  }
  //save cart to local storage
  static saveCart(cart){
      localStorage.setItem('cart',JSON.stringify(cart));
  }
  static getCart(){
      return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
  }
}