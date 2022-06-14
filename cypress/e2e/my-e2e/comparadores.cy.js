describe('Comparadores', function(){
    beforeEach(function(){ // precondiciones a cada test
        cy.visit('https://www.modo.com.ar/promos'); //Ingresar a la página
    });
    it('Comparar resultado true', function(){
        expect(1==1).to.equal(true); //verifica que los valores sean iguales a true
    });
    it('Comparar valores iguales', function(){
        expect(1-1).to.not.equal(2); //verifica que los resultados sean diferentes
    })
    it('Comparar valores diferentes', function(){
        expect(1-1).to.not.equal(2); //verifica que los resultados sean diferentes
    })
})