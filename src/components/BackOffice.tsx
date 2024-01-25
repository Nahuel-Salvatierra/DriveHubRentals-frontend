import Button from "./ui/Button";
import Customer from "./customer/Customer";
import { useState } from "react";

export default function BackOffice() {

  const [selectedOption, setSelectedOption] = useState("Customers")
  const renderComponent = () => {
    switch (selectedOption) {
      case "Customers":
        return <Customer />;
      case "Cars":
        return <Customer />;
      case "Rents":
        return <Customer />;
      default:
        return <Customer/>;
    }
  }
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      const name = event.currentTarget.name;
      setSelectedOption(name);
    };
	return (
		<>
			<div className="container flex px-20 pt-10 justify-center">
				<Button type="button" name="Customers" onClick={onClick} />
				<Button type="button" name="Cars" onClick={onClick} />
				<Button type="button" name="Rents" onClick={onClick} />
			</div>
			<div id="back-office">{renderComponent()}</div>
		</>
	);
}
