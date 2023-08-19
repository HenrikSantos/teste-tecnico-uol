
describe('Create Customer and edit', () => {
  const name = 'Cypress Test' + Math.floor(Math.random() * 10000000009);
  const email = `${Math.floor(Math.random() * 10000000009).toString().padStart(11, '0')}@CypressTest.com`;
  const cpf = Math.floor(Math.random() * 10000000009).toString().padStart(11, '0');
  const telephone = Math.floor(Math.random() * 10000000009).toString().padStart(11, '0');

  beforeEach(() => {
    cy.visit('http://localhost:3000/new-customer');
  });

  it('fills out the form and submits successfully', () => {
    cy.get('[name="name"]').type(name);
    cy.get('[name="email"]').type(email);
    cy.get('[name="cpf"]').type(cpf);
    cy.get('[name="telephone"]').type(telephone);
    cy.get('[name="status"]').select('Ativo');

    cy.get('#submitBtn').click();

    cy.get('#backBtn').click();

    cy.get(`#editBtn${cpf}`).click();

    const editedCpf = Math.floor(Math.random() * 10000000009).toString().padStart(11, '0');
    cy.get('[name="cpf"]').clear();
    cy.get('[name="cpf"]').type(editedCpf);

    cy.get('#submitBtn').click();

    cy.get('#backBtn').click();

    cy.get(`#editBtn${editedCpf}`)
  });
});
