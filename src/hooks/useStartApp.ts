import { useEffect } from "react";
import { getResources } from "../services/api.service";
import toast from "react-hot-toast";

export default function useStartApp() {
	useEffect(() => {
			getResources("customer")
			.then(() => {
			})
			.catch((error) => toast.error(`${error}`));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
}
