/// <reference types="cypress" />

describe("Rent", () => {
	beforeEach(() => {
		cy.visit("/");
		cy.intercept("GET", "/car", { fixture: "car.fixture.json" });
		cy.intercept("GET", "/customer", { fixture: "customer.fixture.json" });
		cy.intercept("GET", "/rent", { fixture: "rent.fixture.json" });
	});

	it("Should exist form rent", () => {
		cy.get("[data-cy=rent").click();
		cy.get("[data-cy=carId").should("exist");
		cy.get("[data-cy=customerId").should("exist");
		cy.get("[data-cy=unitPrice").should("exist");
		cy.get("[data-cy=isPaid").should("exist");
		cy.get("[data-cy=paymentMethod").should("exist");
		cy.get("[data-cy=totalPrice").should("exist");
		cy.get("[data-cy=startDate").should("exist");
		cy.get("[data-cy=endDate").should("exist");
	});

	it("Should create a rent", () => {
		cy.intercept("POST", "/rent", {
			statusCode: 201,
		});
		cy.get("[data-cy=rent").click();
		cy.get("[data-cy=carId").type("1");
		cy.get("[data-cy=customerId").type("1");
		cy.get("[data-cy=unitPrice").type("100");
		cy.get("[data-cy=isPaid").type("true");
		cy.get("[data-cy=paymentMethod").type("Cash");
		cy.get("[data-cy=totalPrice").type("100");
		cy.get("[data-cy=startDate").type("2022-01-01");
		cy.get("[data-cy=endDate").type("2022-01-02");
		cy.get("[data-cy=button-submit]").click();
	});
});
