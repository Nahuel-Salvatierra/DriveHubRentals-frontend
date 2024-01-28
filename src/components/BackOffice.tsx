import Button from "./Button";
import Car from "./car/Car";
import Customer from "./customer/Customer";
import { useState } from "react";
import Rent from "./rent/Rent";

export default function BackOffice() {
	const [selectedOption, setSelectedOption] = useState("customer");
	const renderComponent = () => {
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
	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const name = event.currentTarget.name;
		setSelectedOption(name);
	};
	return (
		<>
			<div className="sm:flex px-20  pt-10 justify-center gap-2 ">
				<Button type="button" name="customer" onClick={onClick} />
				<Button type="button" name="car" onClick={onClick} />
				<Button type="button" name="rent" onClick={onClick} />
			</div>
			<div id="back-office">{renderComponent()}</div>
		</>
	);
}
