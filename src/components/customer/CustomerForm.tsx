import toast from "react-hot-toast";
import Input from "../Input";
import InputSelect from "../Select";
import ButtonSubmit from "../ButtonSubmit";
import useSendResources from "../../hooks/useSendResources";
import { postResources } from "../../services/api.service";
import { Customer } from "../../models/customer.model";

export default function CustomerForm() {
	const { sendResources } = useSendResources();
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		try {
			await sendResources(
				postResources,
				"customer",
				form as unknown as Customer
			);
			toast.success("Customer created");
		} catch (error) {
			toast.error(`${error}`);
		}
	};
	return (
		<div className="flex-auto px-20 pt-10 justify-center">
			<form className=" mx-auto" onSubmit={handleSubmit}>
				<div className="grid md:grid-cols-2 md:gap-6">
					<div className="relative z-0 w-full mb-5 group">
						<Input
							props={{
								htmlFor: "name",
								text: "Name",
								inputType: "text",
							}}
						/>
					</div>
					<div className="relative z-0 w-full mb-5 group">
						<Input
							props={{
								htmlFor: "lastName",
								text: "Last Name",
								inputType: "text",
							}}
						/>
					</div>
				</div>
				<div className="grid md:grid-cols-2 md:gap-6">
					<div className="relative z-0 w-full mb-5 group">
						<InputSelect
							props={{
								htmlFor: "documentType",
								text: "Document Type",
								options: [
									{
										text: "DNI",
										value: "dni",
									},
									{
										text: "Passport",
										value: "passport",
									},
								],
							}}
						/>
					</div>
					<div className="relative z-0 w-full mb-5 group">
						<Input
							props={{
								htmlFor: "documentNumber",
								text: "Document Number",
								inputType: "number",
							}}
						/>
					</div>
				</div>
				<div className="grid md:grid-cols-2 md:gap-6">
					<div className="relative z-0 w-full mb-5 group">
						<Input
							props={{
								htmlFor: "address",
								text: "Address",
								inputType: "text",
							}}
						/>
					</div>
					<div className="relative z-0 w-full mb-5 group">
						<Input
							props={{
								htmlFor: "email",
								text: "Email",
								inputType: "email",
							}}
						/>
					</div>
				</div>
				<div className="grid md:grid-cols-2 md:gap-6">
					<div className="relative z-0 w-full mb-5 group">
						<Input
							props={{
								htmlFor: "phone",
								text: "Phone",
								inputType: "number",
							}}
						/>
					</div>
					<div className="relative z-0 w-full mb-5 group">
						<Input
							props={{
								htmlFor: "birthDate",
								text: "Birth Date",
								inputType: "date",
							}}
						/>
					</div>
				</div>
				<ButtonSubmit />
			</form>
		</div>
	);
}
