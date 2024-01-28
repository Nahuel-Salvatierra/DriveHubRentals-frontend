import { useEffect } from "react";
import { getResources } from "../services/api.service";
import useCustomer from "./useCustomer";
import toast from "react-hot-toast";
import { Customer } from "../models/customer.model";

export default function useStartApp() {
	const { setCustomer } = useCustomer();
	useEffect(() => {
			getResources("customer")
			.then((customers) => {
				setCustomer(customers as Customer[]);
			})
			.catch((error) => toast.error(`${error}`));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
}
