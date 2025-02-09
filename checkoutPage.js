class CheckoutPage {
    visit() {
        cy.visit('/cart.html');  // Navigate to cart
    }

    placeOrder(name, country, city, creditCard, month, year) {
        cy.contains('Place Order').click();
        cy.get('#name').type(name);
        cy.get('#country').type(country);
        cy.get('#city').type(city);
        cy.get('#card').type(creditCard);
        cy.get('#month').type(month);
        cy.get('#year').type(year);
        cy.contains('Purchase').click();
    }

    verifyPurchaseSuccess() {
        cy.contains('Thank you for your purchase!').should('be.visible');
    }
}
export default CheckoutPage;
