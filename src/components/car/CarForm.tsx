import toast from "react-hot-toast";
import Input from "../Input";
import InputSelect from "../Select";
import ButtonSubmit from "../ButtonSubmit";

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
			<form className=" mx-auto" onSubmit={handleSubmit}>
				<div className="grid md:grid-cols-2 md:gap-6">
					<div className="relative z-0 w-full mb-5 group">
						<Input
							props={{
								htmlFor: "brand",
								text: "Brand",
								inputType: "text",
							}}
						/>
					</div>
					<div className="relative z-0 w-full mb-5 group">
						<Input
							props={{
								htmlFor: "model",
								text: "Model",
								inputType: "text",
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
							}}
						/>
					</div>
					<div className="relative z-0 w-full mb-5 group">
						<Input
							props={{
								htmlFor: "kms",
								text: "KMS",
								inputType: "number",
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
							}}
						/>
					</div>
					<div className="relative z-0 w-full mb-5 group">
						<InputSelect
							props={{
								htmlFor: "ac",
								text: "Air Conditioning",
								options: [
									{ value: "true", text: "AC" },
									{ value: "false", text: "No AC" },
								],
							}}
						/>
					</div>
				</div>
				<div className="grid md:grid-cols-2 md:gap-6">
					<div className="relative z-0 w-full mb-5 group">
						<Input
							props={{
								htmlFor: "passengers",
								text: "Passengers",
								inputType: "number",
							}}
						/>
					</div>
					<div className="relative z-0 w-full mb-5 group">
						<InputSelect
							props={{
								htmlFor: "transmission",
								text: "Transmission",
								options: [
									{ value: "manual", text: "Manual" },
									{ value: "automatic", text: "Automatic" },
								],
							}}
						/>
					</div>
				</div>
				<ButtonSubmit />
			</form>
		</div>
	);
}
