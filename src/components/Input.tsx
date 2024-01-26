interface InputProps {
	type: string;
	name: string;
	placeholder: string;
	required: boolean;
}

export default function Input({
	type,
	name,
	placeholder,
	required,
}: InputProps): JSX.Element {
	return (
		<div className="flex items-center">
			<label className="w-1/6" htmlFor={name}>{placeholder}</label>
			<input
				data-cy={name}
				type={type}
				name={name}
				placeholder={placeholder}
				required={required}
				className="w-full h-12 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
			/>
		</div>
	);
}
