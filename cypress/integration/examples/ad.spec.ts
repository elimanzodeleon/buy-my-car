describe('Work flow', () => {
  it('user can post ad through modal', () => {
    cy.visit('/');

    cy.get('[data-testid=main-nav-toggle]').click();
    cy.get('[data-testid=agree-tos]').click();
    cy.get('[data-testid=agree-tos-next]').click();
    cy.get('[data-testid=car-type] > input').then(($els: any) => {
      cy.get($els[0]).type('Audi');
      cy.get($els[1]).type('RS3');
      cy.get($els[2]).type('2022');
    });
    cy.get('[data-testid=car-description]').type(
      'From front to back, the bold new design of the Audi RS 3 immediately engages you with its intense angles and curves. Its striking side air inlets and front flared wheel arches encourage staring, highlighting the performance within.'
    );

    const date = new Date();
    const year = date.getFullYear();
    const month =
      date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    cy.get('[data-testid=date-today]').type(`${year}-${month}-${day}`);
    cy.get('[data-testid=select-new]').select('new');
    // unable to get slider test to work
    cy.get('[data-testid=ad-details-next]').click();

    const filePath = './images/audi.jpg';
    cy.get('[data-testid=image-select]').attachFile(filePath);
    cy.get('[data-testid=image-select-next]').click();

    cy.get('[data-testid=publish-ad]').click();

    cy.contains('2022 Audi RS3').should('be.visible');
  });
});
