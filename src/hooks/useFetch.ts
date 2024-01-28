import { SetStateAction, useEffect, useState } from "react";
import { Customer } from "../models/customer.model";
import { Car } from "../models/car.model";
import { Rent } from "../models/rent.model";

export interface DataType {
	fetchedData: Customer[] | Car[] | Rent[]
}

export const useFetch = (
	fetchResource: CallableFunction,
	param: string
) => {
	const [fetchedData, setData] = useState<DataType["fetchedData"] | null>(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const fetchData = async () => {
		setLoading(true);
		setError(null);
		setData(null);
		try {
			const resource = await fetchResource(param);
			setData(resource);
		} catch (error) {
			setError(error as SetStateAction<null>);
		}
	};

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fetchResource, param]);
	return { fetchedData, error, loading };
};
