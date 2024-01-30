import Input from "../Input";
import InputSelect from "../Select";
import { InputsProps } from "../customer/CustomerInputs";

export default function CarInputs({ onChange, data }: InputsProps) {
	return (
		<>
			<div className="grid md:grid-cols-2 md:gap-6">
				<div className="relative z-0 w-full mb-5 group">
					<Input
						props={{
							container: "modal",
							htmlFor: "brand",
							text: "Brand",
							inputType: "text",
							defaultValue: data?.brand,
							onChange: { onChange },
						}}
					/>
				</div>
				<div className="relative z-0 w-full mb-5 group">
					<Input
						props={{
							htmlFor: "model",
							text: "Model",
							inputType: "text",
							defaultValue: data?.model,
							onChange: { onChange },
							container: "modal",
						}}
					/>
				</div>
			</div>
			<div className="grid md:grid-cols-2 md:gap-6">
				<div className="relative z-0 w-full mb-5 group">
					<Input
						props={{
							htmlFor: "year",
							text: "Year",
							inputType: "number",
							defaultValue: data?.year,
							onChange: { onChange },
							container: "modal",
						}}
					/>
				</div>
				<div className="relative z-0 w-full mb-5 group">
					<Input
						props={{
							htmlFor: "kms",
							text: "Kms",
							inputType: "number",
							defaultValue: data?.kms,
							onChange: { onChange },
							container: "modal",
						}}
					/>
				</div>
			</div>

			<div className="grid md:grid-cols-2 md:gap-6">
				<div className="relative z-0 w-full mb-5 group">
					<Input
						props={{
							htmlFor: "color",
							text: "Color",
							inputType: "text",
							defaultValue: data?.color,
							onChange: { onChange },
							container: "modal",
						}}
					/>
				</div>
				<div className="relative z-0 w-full mb-5 group">
					<Input
						props={{
							htmlFor: "passengers",
							text: "Passengers",
							inputType: "number",
							defaultValue: data?.passengers,
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
							htmlFor: "transmission",
							text: "Transmission",
							defaultValue: data?.transmission,
							onChange: { onChange },
							options: [
								{ value: "AUTOMATIC", text: "Automatic" },
								{ value: "MANUAL", text: "Manual" },
							],
						}}
					/>
				</div>
				<div className="relative z-0 w-full mb-5 group">
					<InputSelect
						props={{
							htmlFor: "ac",
							text: "AC",
							defaultValue: data?.ac,
							onChange: { onChange },
							options: [
								{ value: "true", text: "AC" },
								{ value: "false", text: "No AC" },
							],
              container: "modal",
						}}
					/>
				</div>
			</div>
		</>
	);
}
