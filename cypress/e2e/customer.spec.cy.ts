/// <reference types="cypress" />

describe("Customer", () => {
	beforeEach(() => {
		cy.visit("/");
		cy.intercept("GET", "/car", { fixture: "car.fixture.json" });
		cy.intercept("GET", "/customer", { fixture: "customer.fixture.json" });
		cy.intercept("GET", "/rent", { fixture: "rent.fixture.json" });
	});

	it("Should exist form customer", () => {
		cy.get("[data-cy=customer").click();
		cy.get("[data-cy=name").should("exist");
		cy.get("[data-cy=lastName").should("exist");
		cy.get("[data-cy=phone").should("exist");
		cy.get("[data-cy=address").should("exist");
		cy.get("[data-cy=birthDate").should("exist");
		cy.get("[data-cy=email").should("exist");
		cy.get("[data-cy=documentType").should("exist");
		cy.get("[data-cy=documentNumber").should("exist");
	});

	it("Should create customer", () => {
		cy.intercept("POST", "/customer", {
			statusCode: 201,
		});
		cy.get("[data-cy=customer]").click();
		cy.get("[data-cy=name]").type("John");
		cy.get("[data-cy=lastName]").type("Doe");
		cy.get("[data-cy=documentType]").select("Passport");
		cy.get("[data-cy=documentNumber]").type("12345678");
		cy.get("[data-cy=address]").type("123 Main St");
		cy.get("[data-cy=email]").type("a@a.com");
		cy.get("[data-cy=phone]").type("123456789");
		cy.get("[data-cy=birthDate]").type("2000-01-01");
		cy.get("[data-cy=button-submit]").click();
		cy.contains("Customer created").should("exist");
	});

	it("Should update customer", () => {
		cy.get("[data-cy=customer]").click();
		cy.get("[data-cy=show-modal-1").click();
		cy.get("[data-cy=modal-name]").clear().type("John");
		cy.get("[data-cy=modal-lastName]").clear().type("Doe");
		cy.get("[data-cy=modal-documentType]").select("Passport");
		cy.get("[data-cy=modal-documentNumber]").clear().type("12345678");
		cy.get("[data-cy=modal-address]").clear().type("123 Main St");
		cy.get("[data-cy=modal-email]").clear().type("a@a.com");
		cy.get("[data-cy=modal-phone]").clear().type("123456789");
		cy.get("[data-cy=modal-birthDate]").type("2000-01-01");
		cy.get("[data-cy=submit-modal-1]").click();
		cy.contains("Customer updated").should("exist");
	});
});
