import { AxiosResponse } from "axios";
import axios from "./axios.config";
import { Customer } from "../models/customer.model";
import { Car } from "../models/car.model";
import { Rent } from "../models/rent.model";

export interface PostDataType {
	postData: Customer | Car | Rent;
}

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

export const postResources = async (path:string, resource: PostDataType["postData"]): Promise<unknown> => {
	const { data } = await axios.post(`${path}`, resource);
	return data;
}
