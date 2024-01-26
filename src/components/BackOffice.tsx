import Button from "./Button";
import Customer from "./customer/Customer";
import { useState } from "react";

export default function BackOffice() {

  const [selectedOption, setSelectedOption] = useState("customers")
  const renderComponent = () => {
    switch (selectedOption) {
      case "customers":
        return <Customer />;
      case "cars":
        return <Customer />;
      case "cents":
        return <Customer />;
      default:
        return <Customer/>;
    }
  }
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      const name = event.currentTarget.name;
      setSelectedOption(name.toLocaleLowerCase());
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
