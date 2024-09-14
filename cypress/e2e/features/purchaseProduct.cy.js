import cartPlaceOrderPage from "../pages/cart/cartPlaceOrderPage"
import homeMenuPage from "../pages/Home/homeMenuPage"

describe("purchse Productos", () => {
    it("purchase first product", () => {
    cy.visit("https://demoblaze.com/index.html")
    const home = new homeMenuPage ()
    home.selectCart()

    const cart = new cartPlaceOrderPage ()
    cart.selectplaceOrder()
    
    cy.get("#name").type("Silvia Rodriguez")
    cy.get("#country").type("Mexico")
    cy.get("#city").type("Acuña")
    cy.get("#card").type("0123456789")
    cy.get("#month").type("09")
    cy.get("#year").type("30")
    cy.get("button[onclick='purchaseOrder()']").click()
    cy.get('body > div:nth-child(20) > h2:nth-child(6)').should('be.visible').should('have.attr', 'body > div:nth-child(20) > h2:nth-child(6)', 'Thank you for your purchase!')
  
    })


})