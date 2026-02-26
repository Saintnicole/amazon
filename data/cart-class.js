class Cart{
    // classes contain properties and methods
    cartItems; //this is a property
    #localStorageKey; // the hashtag encapsulates the key to prevent unintended storage location modification which will cause the data to start storing in a different location

    constructor(localStorageKey){
        // constructors are a good place to put your set up code
        //a property without #is public;it can be accessed from anywhere
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
    }

    #loadFromStorage(){
      this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
      if(!this.cartItems){
      this.cartItems =[
      {
           productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
           quantity: 2,
           deliveryOptionId: '1'
      },
      {
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 1,
          deliveryOptionId: '2'
      }
      ]; 
      // THIS WAS A DEFAULT CART ITEM THAT WE USED TO TEST; HOWEVER THE CODE BELOW HELPS ME TO GET THE CART FROM LOCAL STORAGE BASED ON MY ALREADY SELECTED ITEMS
  }};
    saveToStorage() {
          // local storage can only save strings so we are converting the cart into a string
          localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
  };
    addToCart(productId) {
         let matchingItem;
  
            this.cartItems.forEach((cartItem) => {
              if (productId=== cartItem.productId) {
                matchingItem = cartItem;
              }
            });
  
            if (matchingItem) {
              matchingItem.quantity += 1;
            }
            else{
              this.cartItems.push({
                productId: productId,
                quantity: 1,
                deliveryOptionId: '1'
              });
            }
            this.saveToStorage();
      };
    removeFromCart(productId){
          const newCart = [];
          
          this.cartItems.forEach((cartItem) =>{
              if(cartItem.productId !== productId){
                  newCart.push(cartItem);
              }
          });
          this.cartItems = newCart;
          this.saveToStorage();
      };
    updateDeliveryOption(productId, deliveryOptionId){
          let matchingItem;
  
            this.cartItems.forEach((cartItem) => {
              if (productId=== cartItem.productId) {
                matchingItem = cartItem;
              }
            });
  
            matchingItem.deliveryOptionId = deliveryOptionId;
          
            this.saveToStorage();
      };
    updateDeliveryOption(productId, deliveryOptionId){
          let matchingItem;
  
            this.cartItems.forEach((cartItem) => {
              if (productId=== cartItem.productId) {
                matchingItem = cartItem;
              }
            });
  
            matchingItem.deliveryOptionId = deliveryOptionId;
          
            this.saveToStorage();
      };
    getCartQuantity() {
      let quantity = 0;
  
      this.cartItems.forEach(cartItem => {
          quantity += cartItem.quantity;
      });
  
      return quantity;  
      };
    updateQuantity(productId, newQuantity){
           this.cartItems.forEach((cartItem) => {
              if (productId === cartItem.productId) {
                cartItem.quantity = Number(newQuantity);
  
              }  
          });
          localStorage.setItem('cart', JSON.stringify(cart));
      };

}

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');


console.log(cart);
console.log(businessCart);

console.log(businessCart instanceof Cart);
