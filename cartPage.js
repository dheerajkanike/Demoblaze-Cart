class CartPage {
    visit() {
        cy.visit('/cart.html');  // Navigate to cart page
    }

    getProductRows() {
        return cy.get('#tbodyid tr');  // Select cart items
    }

    validateProductInCart(productName) {
        this.getProductRows().should('contain', productName);
    }

    removeProduct(index) {
        this.getProductRows().eq(index).find('a').contains('Delete').click();
        cy.wait(2000);  // Wait for item removal
    }

    validateTotalPrice(expectedPrice) {
        cy.get('#totalp').should('contain', expectedPrice);
    }
}
export default CartPage;
