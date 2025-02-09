import CartPage from '../pageObjects/cartPage';
import ProductPage from '../pageObjects/productPage';

describe('Cart Page Tests - Demoblaze', () => {
    const cartPage = new CartPage();
    const productPage = new ProductPage();

    beforeEach(() => {
        cy.viewport(1280, 720);
    });

    it('should add a product to the cart', () => {
        productPage.visit();
        productPage.addProductToCart('Samsung galaxy s6');
        cy.wait(2000);

        cartPage.visit();
        cartPage.validateProductInCart('Samsung galaxy s6');
    });

    it('should remove a product from the cart', () => {
        cartPage.visit();
        cartPage.removeProduct(0);
        cartPage.getProductRows().should('have.length', 0);
    });

    it('should validate total price calculation', () => {
        productPage.visit();
        productPage.addProductToCart('Nokia lumia 1520');
        cy.wait(2000);

        cartPage.visit();
        cartPage.validateTotalPrice(820);
    });
});
