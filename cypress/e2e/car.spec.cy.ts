/// <reference types="cypress" />

describe("Car", () => {
	beforeEach(() => {
		cy.visit("/");
		cy.intercept("GET", "/car", { fixture: "car.fixture.json" });
		cy.intercept("GET", "/customer", { fixture: "customer.fixture.json" });
		cy.intercept("GET", "/rent", { fixture: "rent.fixture.json" });
	});

	it("Should exist form car", () => {
		cy.get("[data-cy=car").click();
		cy.get("[data-cy=car").should("exist");
		cy.get("[data-cy=brand]").should("exist");
		cy.get("[data-cy=model]").should("exist");
		cy.get("[data-cy=year]").should("exist");
		cy.get("[data-cy=kms]").should("exist");
		cy.get("[data-cy=color").should("exist");
		cy.get("[data-cy=ac]").should("exist");
		cy.get("[data-cy=passengers").should("exist");
		cy.get("[data-cy=transmission").should("exist");
	});

	it("Should create a car", () => {
		cy.intercept("POST", "/car", {
			statusCode: 201,
		});
		
		cy.get("[data-cy=car").click();
		cy.get("[data-cy=brand]").type("Ford");
		cy.get("[data-cy=model]").type("Mustang");
		cy.get("[data-cy=year]").type("2022");
		cy.get("[data-cy=kms]").type("123232");
		cy.get("[data-cy=color").type("#ff1234");
		cy.get("[data-cy=ac]").select("No AC");
		cy.get("[data-cy=passengers").type("5");
		cy.get("[data-cy=transmission").select("Automatic");
		cy.get("[data-cy=button-submit").click();
		cy.contains("Car created").should("exist");
	});

	it("Should updated a car", () => {
		cy.get("[data-cy=car").click();
		cy.get("[data-cy=show-modal-1").click()
		cy.get("[data-cy=modal-brand]").clear().type("Ford");
		cy.get("[data-cy=modal-model]").clear().type("Mustang");
		cy.get("[data-cy=modal-year]").clear().type("2022");
		cy.get("[data-cy=modal-kms]").clear().type("123232");
		cy.get("[data-cy=modal-color").clear().type("#ff1234");
		cy.get("[data-cy=modal-ac]").select("No AC");
		cy.get("[data-cy=modal-passengers").clear().type("5");
		cy.get("[data-cy=modal-transmission").clear().type("Automatic");
		cy.get("[data-cy=submit-modal-1").click();
		cy.get("[data-cy=loading").should("exist");
	})
});
