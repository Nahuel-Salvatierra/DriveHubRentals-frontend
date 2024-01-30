import Button from "./Button";
import Car from "./car/Car";
import Customer from "./customer/Customer";
import Rent from "./rent/Rent";
import useBackOffice from "../hooks/useBackOffice";

export default function BackOffice() {
	const { selectedOption, setSelectedOption, renderOffice } = useBackOffice()

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
			<div id="back-office">{renderOffice()}</div>
		</>
	);
}
