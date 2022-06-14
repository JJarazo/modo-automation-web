import indexPage from '../pages/index'
describe('Promos web', function(){
    before(function(){ // ejecución previa al inicio de los casos
        cy.log('Inicio de ejecución Promos Web')
    })
    beforeEach(function(){ // precondiciones a cada test
        cy.visit('https://www.modo.com.ar/promos'); //Ingresar a la página
    })
    afterEach(function(){ // post condiciones a cada caso
        cy.log('Caso finalizado')
    })

    it('Busqueda de promos', function(){
        /*cy.get('.SearchBar__Input-sc-d3rfnc-1').type('cafe'); // Seleccionar un elemento y tipear algo en él*/
        indexPage.search('Cafe');
        cy.get('.PromoCardsBySlot__Container-sc-vtl6ls-1 > :nth-child(1)').contains('Cafe'); // Buscar elemento con el texto "Cafe"
        cy.get('.PromoCardsBySlot__Container-sc-vtl6ls-1 > :nth-child(1)').click(); //Realizar click en el elemento
    })
    after(function(){ // ejecución post a todos los test
        cy.log('Fin de la ejecución Promos Web') // mostrar mensaje por consola
    })
})