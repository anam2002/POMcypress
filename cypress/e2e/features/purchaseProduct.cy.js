import cartPlaceOrderPage from "../pages/cart/cartPlaceOrderPage"
import homeMenuPage from "../pages/Home/homeMenuPage"

describe("purchse Productos", () => {
    it("purchase first product", () => {
    cy.visit("https://demoblaze.com/index.html")
    const home = new homeMenuPage ()
    home.selectCart()

    const cart = new cartPlaceOrderPage ()
    cart.selectplaceOrder()
    
    cy.get("#name").type("Silvia")
    cy.get("#country").type("Mexico")
    cy.get("#city").type("Acuña")
    cy.get("#card").type("0123456789")
    cy.get("#month").type("09")
    cy.get("#year").type("30")
    cy.get("button[onclick='purchaseOrder()']").click()
    cy.contains('Thank you for your purchase!').should('be.visible')
  
    })


})