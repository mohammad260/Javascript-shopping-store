const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "migpbww9isdd",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "WEs0jLOx64PhehKND7W0JIA3dbwRzkJZljDuIT3sVBg"
});

// getting the products
class Products{
  async getProducts(){
      try {
        let contentful = await client.getEntries({
            content_type: "shoppingCart"
        });

        //get data from contentful
        // let products = []
          products = contentful.items;

        //get local json data
        // let result = await fetch("products.json");
        // let data = await result.json();
        // let products = data.items;

        products = products.map(item => {
            const {title,price, gender, type} = item.fields;
            const {id} = item.sys
            const image = item.fields.image.fields.file.url;
            return {title,price,id,image, gender, type}
        })

          return products;
      } catch (error) {
          console.log(error)
      }
  }
}