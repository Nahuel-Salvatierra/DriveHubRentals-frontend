import { ChangeEvent } from "react";
import { Customer } from "../../models/customer.model";
import Input from "../Input";
import InputSelect from "../Select";
import { dateMapper } from "../../utils/dateMapper";

interface CustomerInputsProps {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	data?: Customer;
}

export default function CustomerInputs({
	onChange,
	data,
}: CustomerInputsProps) {
	return (
		<>
			<div className="grid md:grid-cols-2 md:gap-6">
				<div className="relative z-0 w-full mb-5 group">
					<Input
						props={{
							htmlFor: "name",
							text: "Name",
							inputType: "text",
							defaultValue: data?.name,
							onChange: { onChange },
							container: "modal",
						}}
					/>
				</div>
				<div className="relative z-0 w-full mb-5 group">
					<Input
						props={{
							htmlFor: "lastName",
							text: "Last Name",
							inputType: "text",
							defaultValue: data?.lastName,
							onChange: { onChange },
							container: "modal",
						}}
					/>
				</div>
			</div>
			<div className="grid md:grid-cols-2 md:gap-6">
				<div className="relative z-0 w-full mb-5 group">
					<InputSelect
						props={{
							container: "modal",
							defaultValue: data?.documentType,
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
							container: "modal",
							htmlFor: "documentNumber",
							text: "Document Number",
							inputType: "number",
							defaultValue: data?.documentNumber,
							onChange: { onChange },
						}}
					/>
				</div>
			</div>
			<div className="grid md:grid-cols-2 md:gap-6">
				<div className="relative z-0 w-full mb-5 group">
					<Input
						props={{
							container: "modal",
							onChange: { onChange },
							defaultValue: data?.address,
							htmlFor: "address",
							text: "Address",
							inputType: "text",
						}}
					/>
				</div>
				<div className="relative z-0 w-full mb-5 group">
					<Input
						props={{
							container: "modal",
							onChange: { onChange },
							htmlFor: "email",
							text: "Email",
							inputType: "email",
							defaultValue: data?.email,
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
							defaultValue: data?.phone,
							container: "modal",
							onChange: { onChange },
						}}
					/>
				</div>
				<div className="relative z-0 w-full mb-5 group">
					<Input
						props={{
							htmlFor: "birthDate",
							text: "Birth Date",
							inputType: "date",
							defaultValue: `${dateMapper(data?.birthDate)}`,
							container: "modal",
							onChange: { onChange },
						}}
					/>
				</div>
			</div>
		</>
	);
}
