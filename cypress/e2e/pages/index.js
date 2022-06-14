class indexPage{

    search = (element) =>{
        cy.fixture('index.json').then((locators)=>{
        cy.get(locators.searchInput).type(element)
        })
    }
}
export default new indexPage();