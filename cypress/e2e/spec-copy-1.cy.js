describe('HRM page', () => {
  it('should successfully log in a user’, () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });

  it('should verify the dasboard page’, () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });

});
