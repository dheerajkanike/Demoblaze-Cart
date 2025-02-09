import CartPage from '../pageObjects/cartPage';
import CheckoutPage from '../pageObjects/checkoutPage';

describe('Checkout Process Tests - Demoblaze', () => {
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();

    beforeEach(() => {
        cy.viewport(1280, 720);
    });

    it('should navigate to checkout and complete the order', () => {
        cartPage.visit();
        checkoutPage.placeOrder('Rishabh', 'INDIA', 'Uttar Pradesh', '1234567890123456', '12', '2025');
        checkoutPage.verifyPurchaseSuccess();
    });
});

