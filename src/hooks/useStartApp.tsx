import { useEffect } from "react";
import { getCustomers } from "../services/customer.service";
import useCustomer from "./useCustomer";
import toast from "react-hot-toast";

export default function useStartApp() {
	const { setCustomer } = useCustomer();
	useEffect(() => {
		getCustomers()
			.then((customers) => {
				setCustomer(customers);
			})
			.catch((error) => toast.error(`${error}`));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
}
