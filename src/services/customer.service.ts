import { AxiosResponse } from "axios";
import axios from "../services/axios.config";
import { Customer } from "../models/customer.model";

export const postCustomer = async (customer: Customer): Promise<Customer> => {
	const { data }: AxiosResponse<Customer> = await axios.post(
		"/customer",
		customer
	);
	return data;
};

export const getCustomers = async (): Promise<Customer[]> => {
	const { data }: AxiosResponse<Customer[]> = await axios.get("/customer");
	return data;
};

export const getCustomer = async (id: number): Promise<Customer> => {
	const { data }: AxiosResponse<Customer> = await axios.get(
		`/customer/${id}`
	);
	return data;
};
