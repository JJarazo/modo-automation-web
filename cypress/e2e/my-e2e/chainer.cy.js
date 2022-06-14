describe('Escribir y limpiar', function(){
    it('Escribir y borrar en barra de búsqueda', function(){
        cy.visit('https://www.modo.com.ar/promos');
        cy.get('.SearchBar__Input-sc-d3rfnc-1').type('cafe').clear().type('pizza'); // concatenar funciones
    })
})