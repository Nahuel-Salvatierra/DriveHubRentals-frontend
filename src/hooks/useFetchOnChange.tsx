import { SetStateAction, useEffect, useState } from "react";
import { Customer } from "../models/customer.model";

export interface DataType {
	fetchedData: Customer[];
}

export const useFetchOnChange = (
	fetchResource: CallableFunction,
	param: string,
	timeout: number
) => {
	const [fetchedData, setData] = useState<DataType | null>(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const timeoutId = setTimeout(async () => {
			if (param) {
				setLoading(true);
				setError(null);
				setData(null);
				try {
					const resource = await fetchResource(param);
					setData(resource);
				} catch (error) {
					setError(error as SetStateAction<null>);
				}
				setLoading(false);
			} else {
				setData(null);
				setError(null);
			}
		}, timeout);
		return () => {
			clearTimeout(timeoutId);
		};
	}, [fetchResource, param, timeout]);

	return { fetchedData, error, loading };
};
