class Cart{
  getBagButtons(){
      const buttons = [...document.querySelectorAll(".bag-btn")];
      buttonsDOM = buttons;
      buttons.forEach(button =>{
          let id = button.dataset.id;
          let inCart = cart.find(item => item.id === id);
          if(inCart){
              button.innerText = "In Cart";
              button.disabled = true
          }
          button.addEventListener('click', (event)=>{
              event.target.innerText = "In cart";
              event.target.disabled = true;                

              //get product from products
              let cartItem = {...Storage.getProducts(id),amount:1};
              
              //add product to the cart
              cart = [...cart,cartItem];

              //save cart in local storage
              Storage.saveCart(cart);

              //set cart values
              this.setCartValues(cart);

              //display cart item
              this.addCartItem(cartItem);
              
              //show the cart
              this.showCart();

          });
      })
  }

  //calculate cart total
  setCartValues(cart){
      let tempTotal = 0;
      let itemsTotal = 0;
      cart.map(item =>{
          tempTotal += item.price * item.amount;
          itemsTotal += item.amount
      })
      cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
      cartItems.innerText = itemsTotal;
  }
  addCartItem(item){
      const div = document.createElement('div');
      div.classList.add('cart-item');
      div.innerHTML = 
          `<img src=${item.image} alt="product">
          <div>
          <h4>${item.title}</h4>
          <h5>$${item.price}</h5>
          <span class="remove-item" data-id=${item.id}>remove</span>
          </div>
          <div>
          <i class="fa fa-chevron-up" data-id=${item.id}></i>
          <p id="item-amount" class="item-amount">${item.amount}</p>
          <i class="fa fa-chevron-down" data-id=${item.id}></i>
          </div>`
      cartContent.appendChild(div);
  }
  showCart(){
      cartOverlay.classList.add("transparentBcg");
      cartDOM.classList.add("showCart");
  }
  setupApp(){
      cart = Storage.getCart();
      this.setCartValues(cart);
      this.populateCart(cart);
      cartBtn.addEventListener('click',this.showCart);
      closeCartBtn.addEventListener('click',this.hideCart);

  }
  populateCart(cart){
      cart.forEach(item => this.addCartItem(item));

  }
  hideCart(){
      cartOverlay.classList.remove("transparentBcg");
      cartDOM.classList.remove("showCart");
  }

  cartLogic(){
      //clear cart button
      clearCartBtn.addEventListener("click", () =>{
          this.clearCart();
      })
      //cart functionality
      cartContent.addEventListener('click',event=>{
          if(event.target.classList.contains('remove-item')){
              let removeItem = event.target;
              let id = removeItem.dataset.id;
              cartContent.removeChild(removeItem.parentElement.parentElement);
              this.removeItem(id);
          }
          else if(event.target.classList.contains("fa-chevron-up")){
              let addAmount = event.target;
              let id = addAmount.dataset.id;
              let tempItem = cart.find(item => item.id === id);    
              tempItem.amount = tempItem.amount + 1;
              Storage.saveCart(cart);
              this.setCartValues(cart);
              addAmount.nextElementSibling.innerText = tempItem.amount;
          }
          else if(event.target.classList.contains("fa-chevron-down")){
              let lowerAmount = event.target;
              let id = lowerAmount.dataset.id;
              let tempItem = cart.find(item => item.id === id);    
              tempItem.amount = tempItem.amount - 1;
              if(tempItem.amount > 0){
                  Storage.saveCart(cart);
                  this.setCartValues(cart);
                  lowerAmount.previousElementSibling.innerText = tempItem.amount;
              }
              else{
                  cartContent.removeChild(lowerAmount.parentElement.parentElement);
                  this.removeItem(id);
              }
          }
      })
  }
  clearCart(){
      let cartItems = cart.map(item => item.id);
      cartItems.forEach(id => this.removeItem(id));
      //var cartContent = document.getElementById("cart-content").value;
      while(cartContent.children.length>0){
          cartContent.removeChild(cartContent.children[0]);
      }
      this.hideCart();
  }
  removeItem(id){
      cart = cart.filter(item => item.id !== id);
      this.setCartValues(cart);
      Storage.saveCart(cart);
      let button = this.getSingleButton(id);
      button.disabled = false;
      button.innerHTML = `<i class="fa fa-shopping-cart"></i>add to cart`;
  }
  getSingleButton(id){
      return buttonsDOM.find(button => button.dataset.id === id);
  }
}