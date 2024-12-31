

describe('template spec', () => {

    before('login',()=>{
    cy.visit('');

    })

    it('homepage', () => {

        cy.get('#header_logo').should('be.visible');
       // cy.get('#header_logo').should('have.attr', 'src', 'https://alphaags.iplatformsolutions.com//application/images/ags-header-logo.jpg',);
        
        //cy.get('img[src="GeriatricsCareOnline.org Complex Care. Access to Resources Simplified. header_logo"]').should('contain', 'GeriatricsCareOnline.org Complex Care. Access to Resources Simplified. header_logo');

        //cy.get('#header_logo>img').should('contain.text', 'GeriatricsCareOnline.org Complex Care. Access to Resources Simplified.');

  // cy.get('#header_logo').should(contains(Text,'GeriatricsCareOnline.org Complex Care. Access to Resources Simplified. header_logo'))
//cy.get('.btn btn-info home-register-btn').click();
cy.get('.home-register-btn').click(); 

  })
})