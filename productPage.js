class ProductPage {
    visit() {
        cy.visit('/');  // Navigate to homepage
    }

    addProductToCart(productName) {
        cy.contains(productName).click();  // Click on product
        cy.wait(1000);  // Wait for page load
        cy.contains('Add to cart').click();  // Click Add to Cart
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('Product added');  // Validate alert message
        });
    }
}
export default ProductPage;
