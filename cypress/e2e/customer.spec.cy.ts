/// <reference types="cypress" />
import { INPUTS_CUSTOMER } from "./../../src/utils/inputs.customer";

describe("Customer", () => {
	beforeEach(() => {
		cy.intercept("GET", "/customer", { fixture: "customer.json" }).as(
			"getCustomer"
		);
	});

	it("Should form be visible and exist", () => {
		cy.visit("/");
		INPUTS_CUSTOMER.map((customer) => {
			cy.get(`input[name=${customer.name}]`)
				.should("be.visible")
				.should("exist");
		});

		cy.get("[data-cy=Save]").should("be.visible").should("exist");
	});

	it("Should create a customer", () => {
		cy.intercept("POST", "/customer", {
			statusCode: 201,
		});
		cy.visit("/");
		INPUTS_CUSTOMER.map((customer) => {
			if (customer.type === "number")
				cy.get(`[data-cy=${customer.name}]`).type("12341235");
			if (customer.type === "date")
				cy.get(`[data-cy=${customer.name}]`).type("2022-01-01");
			if (customer.type === "text")
				cy.get(`[data-cy=${customer.name}]`).type(customer.name);
			if (customer.type === "email")
				cy.get(`[data-cy=${customer.name}]`).type("mail@gmail.com");
		});
		cy.get("[data-cy=Save]").click();
		cy.contains('Customers loaded').should('be.visible');
	});
});
