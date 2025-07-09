describe('Login Form', () => {
  it('shows error for invalid email', () => {
    cy.visit('http://localhost:3000'); // Adjust URL as needed
    cy.get('[data-page="login"]').click();
    cy.get('input[type="email"]').type('invalidemail');
    cy.get('input[type="password"]').type('password123');
    cy.get('form').submit();
    cy.contains('Invalid email').should('be.visible');
  });
});