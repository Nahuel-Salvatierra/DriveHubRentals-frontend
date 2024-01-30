import { createContext, useState } from "react";
import Customer from "../components/customer/Customer";
import Car from "../components/car/Car";
import Rent from "../components/rent/Rent";
import CustomerInputs from "../components/customer/CustomerInputs";

export const BackOfficeContext = createContext("");

export default function BackOfficeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [selectedOption, setSelectedOption] = useState("customer");

	const renderOffice = () => {
		switch (selectedOption) {
			case "customer":
				return <Customer />;
			case "car":
				return <Car />;
			case "rent":
				return <Rent />;
			default:
				return <Customer />;
		}
	};

	return (
		<>
			<BackOfficeContext.Provider
				value={{ selectedOption, setSelectedOption, renderOffice }}
			>
				{children}
			</BackOfficeContext.Provider>
		</>
	);
}
