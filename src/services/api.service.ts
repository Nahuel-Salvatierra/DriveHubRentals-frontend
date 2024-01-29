import { AxiosResponse } from "axios";
import axios from "./axios.config";
import { Customer } from "../models/customer.model";
import { Car } from "../models/car.model";
import { Rent } from "../models/rent.model";
import { DataType } from "../hooks/useFetch";

export interface PostDataType {
	postData: Customer | Car | Rent;
}

export const getResources = async (path: string): Promise<unknown> => {
	const { data } = await axios.get(`${path}`);
	return data;
};

export const postResources = async (
	path: string,
	resource: PostDataType["postData"]
): Promise<unknown> => {
	const { data } = await axios.post(`${path}`, resource);
	return data;
};

export const putResources = async (path: string, update:DataType["fetchedData"]) => {
	console.log(update)
	const { data } = await axios.put(`${path}`, update);
	return data;
};
