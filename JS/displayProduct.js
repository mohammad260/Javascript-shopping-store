// //display product
class DisplayProduct{
  displayProducts(products){
      let result = "";
      products.forEach(product => {
          result += `
          <!--Single product-->
          <article class="product">
            <div class="img-container">
              <img 
              src=${product.image}
              alt = "product"
              class = "product-img"
              />
              <button class="bag-btn" data-id = ${product.id}>
                <i class="fas fa-shopping-cart"></i>
                Add to bag
              </button>
            </div>
            <h3>${product.title}</h3>
            <h4>$${product.price}</h4>
          </article>
          <!--End of single product-->`;
      });
  
      productsDOM.innerHTML = result;
  }
}