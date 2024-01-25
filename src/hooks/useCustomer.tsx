import { useState } from "react";
import { postCustomer } from "../services/customer.service";
import { Customer } from "../models/customer.model";
import toast from "react-hot-toast";

export default function useCustomer() {
	const [customers, setCustomer] = useState<Customer[]>(
		[] as Array<Customer>
	);

	const createCustomer = async (customer: FormData) => {
		const customer2 = Object.fromEntries(customer) as unknown as Customer;
		try {
			const response = await postCustomer(customer2);
			setCustomer([...customers, response]);
			toast.success("Customers loaded");
		} catch (error) {
			toast.error(`${error}`);
		}
	};

	return { customers, setCustomer, createCustomer };
}
