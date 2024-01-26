import { AxiosResponse } from "axios";
import axios from "./axios.config";
import { Customer } from "../models/customer.model";

export const postCustomer = async (customer: Customer): Promise<Customer> => {
	const { data }: AxiosResponse<Customer> = await axios.post(
		"/customer",
		customer
	);
	return data;
};

export const getResources = async (path:string): Promise<unknown> => {
	const { data } = await axios.get(`${path}`);
	return data;
}

export const postResources = async (path:string, resource: unknown): Promise<unknown> => {
	const { data } = await axios.post(`${path}`, resource);
	return data;
}
