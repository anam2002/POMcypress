describe('usando fixtures', () => {
    beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    it('pull data from fixtures', function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get('div[class="form-group"] input[name="name"]').type(this. data.name)
    })
    
})