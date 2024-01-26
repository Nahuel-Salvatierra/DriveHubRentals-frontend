import toast from "react-hot-toast";
import { INPUTS_CAR } from "../../utils/inputs.car";
import Button from "../Button";
import Input from "../Input";

export default function CarForm() {
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			toast.success("Car created");
		} catch (error) {
			toast.error(`${error}`);
		}
	};
	return (
		<div className="flex-auto px-20 pt-10 justify-center">
			<form onSubmit={handleSubmit}>
				{INPUTS_CAR.map((input) => (
					<Input
						key={input.name}
						type={input.type}
						name={input.name}
						required={input.required}
						placeholder={input.placeholder}
					/>
				))}
				<Button type="submit" name="Save" onClick={() => {}}></Button>
			</form>
		</div>
	);
}
