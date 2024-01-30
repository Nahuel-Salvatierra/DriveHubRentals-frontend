import { useState } from "react";
import { PostDataType } from "../services/api.service";

export default function useSendResources() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

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
			setError(error as Error);
		}
		setLoading(false);
	};

	return { error, loading, sendResources };
}
