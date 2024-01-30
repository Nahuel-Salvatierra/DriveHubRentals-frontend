interface InputProps {
	props: {
		container?: string;
		htmlFor: string;
		text: string;
		inputType: string;
		defaultValue?: string | number;
		onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	};
}

export default function Input({ props }: InputProps) {
	return (
		<>
			<input
				defaultValue={props.defaultValue}
				type={props.inputType}
				name={props.htmlFor}
				id={props.htmlFor}
				data-cy={
					props?.container
						? `${props?.container}-${props.htmlFor}`
						: `${props.htmlFor}`
				}
				className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=""
				required
			/>
			<label
				htmlFor={props.htmlFor}
				className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
			>
				{props.text}
			</label>
		</>
	);
}
