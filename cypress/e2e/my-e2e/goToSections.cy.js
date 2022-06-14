describe('Ir a las diferentes secciones', function(){
    beforeEach(function(){ // precondiciones a cada test
        cy.visit('https://www.modo.com.ar/promos'); //Ingresar a la página
    });
    it('Ir a la sección Activas', function(){
        cy.get('[class="PromoFilter__Button-sc-101zveg-5 bySJcH"]').first().click();
    });
    it('Ir a la sección Finalizadas', function(){
        cy.get('[class="PromoFilter__Button-sc-101zveg-5 bySJcH"]').eq(2).click();
    })
})