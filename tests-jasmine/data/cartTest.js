import { addToCart, cart, loadFromStorage } from "../../data/cart.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";


describe('test suite: addToCart', ()=>{
    it('adds an existing product to the cart',()=>{

        spyOn(localStorage, 'setItem');

         spyOn(localStorage, 'getItem').and.callFake(()=>{
            return JSON.stringify([{

                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: 1
            }]);

        });
        console.log(localStorage.getItem('cart'));
        loadFromStorage();

                addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].quantity).toEqual(2);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    });

    it('adds a new product to the cart',()=>{
        spyOn(localStorage, 'setItem');

        spyOn(localStorage, 'getItem').and.callFake(()=>{
            return JSON.stringify([]);

        });
        console.log(localStorage.getItem('cart'));
        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);

    });
});

// a flaky test is a test that produces different outcomes without the code being changed.