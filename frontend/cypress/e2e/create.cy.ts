describe('Visit /new-customer', () => {
  it('button "Novo cliente" change url', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#novoCliente').click();
    cy.url().should('include', '/new-customer');
  })
})

describe('New Customer Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/new-customer'); // Replace with the actual path
  });

  it('fills out the form and submits successfully', () => {
    const name = 'Cypress Test' + Math.floor(Math.random() * 10000000009);
    const email = `${Math.floor(Math.random() * 10000000009).toString().padStart(11, '0')}@CypressTest.com`;
    const cpf = Math.floor(Math.random() * 10000000009).toString().padStart(11, '0');
    const telephone = Math.floor(Math.random() * 10000000009).toString().padStart(11, '0');
    cy.get('[name="name"]').type(name);
    cy.get('[name="email"]').type(email);
    cy.get('[name="cpf"]').type(cpf);
    cy.get('[name="telephone"]').type(telephone);
    cy.get('[name="status"]').select('Ativo');

    cy.get('#submitBtn').click();

    cy.on('window:alert',(txt)=>{
      expect(txt).to.contains('Usuário criado com sucesso!');
    })

    cy.get('#backBtn').click();

    cy.get(`#${cpf}`);
  });
  
  it('handles form submission error', () => {
    cy.get('[name="name"]').type('Error Test');
    cy.get('[name="email"]').type(`${Math.floor(Math.random() * 10000000009).toString().padStart(11, '0')}@example.com`);
    cy.get('[name="cpf"]').type(Math.floor(Math.random() * 10000000009).toString().padStart(11, '0'));
    cy.get('[name="telephone"]').type(Math.floor(Math.random() * 10000000009).toString().padStart(11, '0'));

    cy.get('#submitBtn').click();

    cy.on('window:alert',(txt)=>{
      expect(txt).to.contains('Ocorreu um erro ao criar um novo cliente, certifique-se que os dados estão corretos e que o servidor esteja rodando');
    })
  });
});
