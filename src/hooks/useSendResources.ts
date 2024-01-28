import { useState } from "react";
import { PostDataType } from "../services/api.service";

export default function useSendResources() {
	// fetchResource: CallableFunction,
	// param: string,
	// data: PostDataType["postData"]
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<unknown | null>(null);

	const sendResources = async (
		fetchResource: CallableFunction,
		param: string,
		data: PostDataType["postData"]
	) => {
		setLoading(true);
		setError(null);
		try {
			await fetchResource(param, data);
		} catch (error) {
			setError(error);
		}
		setLoading(false);
	};

	return { error, loading, sendResources };
}
