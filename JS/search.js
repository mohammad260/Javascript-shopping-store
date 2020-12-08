//call class functions from main.js

class Search{
  searchBar(){
    search.addEventListener('keyup', (e)=>{
      let s = e.target.value.toLowerCase();
      const setProduct = products.filter((character) =>{
        return (character.title.toLowerCase().includes(s) || character.gender === s)
      })
    if(setProduct === null){
      console.log("empty");
    }
    const displayProduct = new DisplayProduct();
    const cart = new Cart();
    
    displayProduct.displayProducts(setProduct)
    cart.getBagButtons();    
    });
  }
  
  //calls filterItem function to perform item filtering
  filterItemByClick(){
    // filter mens clothing
    mens.addEventListener("click", () => {
     this.filterItem("mens");
    })
    mensTops.addEventListener("click", () => {
      this.filterItem("mens", "tops");
     })
     mensBottoms.addEventListener("click", () => {
    this.filterItem("mens", "bottoms");
    })
    mensShoes.addEventListener("click", () => {
    this.filterItem("mens", "shoes");
    })

    //filter womens clother
    womens.addEventListener("click", () => {
      this.filterItem("womens");
    })
    womensTops.addEventListener("click", () => {
      this.filterItem("womens", "tops");
    })
    womensBottoms.addEventListener("click", () => {
      this.filterItem("womens", "bottoms");
    })
    womensShoes.addEventListener("click", () => {
      this.filterItem("womens", "shoes");
    })
  }

  //filters clothing items
  filterItem(gender,type){
    if(type == null){
      const setProduct = products.filter(character => character.gender === gender);
      const displayProduct = new DisplayProduct();

      const cart = new Cart();
      displayProduct.displayProducts(setProduct)
      cart.getBagButtons();
    }
    else{
      const setProduct = products.filter(character => (character.gender === gender) && (character.type === type));
      const displayProduct = new DisplayProduct();
    
      const cart = new Cart();
      displayProduct.displayProducts(setProduct)
      cart.getBagButtons();
    }  
  }
}