import { getCartQuantity } from '../../data/cart.js'

export function renderCheckoutHeader(){

    const headerDisplay = document.querySelector('.js-checkout-header-middle');
    
    headerDisplay.innerHTML = `Checkout (<a class="return-to-home-link"
    href="amazon.html"></a>)`
    
    const cartQuantity = getCartQuantity();
    const checkoutLink = document.querySelector('.return-to-home-link');
        
    if (cartQuantity === 0) {
        checkoutLink.innerHTML = '';
    } else {
        checkoutLink.innerHTML = cartQuantity;
    }
    
}