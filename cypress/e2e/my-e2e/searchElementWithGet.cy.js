describe('formas de encontrar elementos', function(){
    it('buscar en el buscador', function(){
        cy.visit('https://www.modo.com.ar/promos');
        cy.get('.promos__TitleGrandHero-sc-1q6cy5u-3.bnlIrQ').contains('PROMOCIONES'); // por clase utilizamos ".nombreDeClase" (los espacios se deben reemplazar por "." también)
        cy.get('#benefits').contains('¿Por qué usar MODO?'); // por ID utilizamos "#nombreDeClase"
        cy.get('[name="searchInput"]').type('Cafe'); // por cualquier propiedad (ej: name) encerramos la propiedad entre corchetes
        cy.get('[name="searchInput"]').clear(); // clear borra lo que está dentro del elemento
    })
})