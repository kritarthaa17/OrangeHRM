class PIM {

    clickPIM() {
        return cy.get('.oxd-main-menu-item--name').contains('PIM').click()
    }

}

export default PIM