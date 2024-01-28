import toast from "react-hot-toast";
import ButtonSubmit from "../ButtonSubmit";
import Input from "../Input";
import InputSelect from "../Select";
import { postResources } from "../../services/api.service";
import useSendResources from "../../hooks/useSendResources";
import { Rent } from "../../models/rent.model";

export default function RentForm() {
	let form: Rent = {} as Rent
	const { sendResources } = useSendResources();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		form = new FormData(event.currentTarget) as unknown as Rent;

		try {
			await sendResources(postResources, "rent", form);
			toast.success("Rent created");
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
								htmlFor: "customerId",
								text: "Customer ID",
								inputType: "text",
							}}
						/>
					</div>
					<div className="relative z-0 w-full mb-5 group">
						<Input
							props={{
								htmlFor: "carId",
								text: "Car ID",
								inputType: "text",
							}}
						/>
					</div>
				</div>
				<div className="grid md:grid-cols-2 md:gap-6">
					<div className="relative z-0 w-full mb-5 group">
						<Input
							props={{
								htmlFor: "unitPrice",
								text: "Unit Price",
								inputType: "number",
							}}
						/>
					</div>
					<div className="relative z-0 w-full mb-5 group">
						<Input
							props={{
								htmlFor: "totalPrice",
								text: "Total Price",
								inputType: "number",
							}}
						/>
					</div>
				</div>
				<div className="grid md:grid-cols-2 md:gap-6">
					<div className="relative z-0 w-full mb-5 group">
						<InputSelect
							props={{
								htmlFor: "paymentMethod",
								text: "Payment Method",
								options: [
									{ text: "Cash", value: "cash" },
									{
										text: "Credit Card",
										value: "credit card",
									},
									{ text: "Debit Card", value: "debit card" },
								],
							}}
						/>
					</div>
					<div className=" z-0 w-full mb-5 group flex justify-start">
						<input
							id="isPaid"
							data-cy="isPaid"
							type="checkbox"
							value="true"
							className="w-4 h-4 justify-self-center text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
						/>
						<label
							htmlFor="isPaid"
							className="ms-2 text-sm font-medium text-gray-500"
						>
							Payed
						</label>
					</div>
				</div>
				<div className="grid md:grid-cols-2 md:gap-6">
					<div className="relative z-0 w-full mb-5 group">
						<Input
							props={{
								htmlFor: "startDate",
								text: "Start Date",
								inputType: "date",
							}}
						/>
					</div>
					<div className="relative z-0 w-full mb-5 group">
						<Input
							props={{
								htmlFor: "endDate",
								text: "End Date",
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
