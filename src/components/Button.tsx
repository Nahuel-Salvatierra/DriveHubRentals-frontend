import React from "react";
interface ButtonProps {
	type: "submit" | "reset" | "button" | undefined;
	name: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function Button({ type, name, onClick }: ButtonProps) {
	return (
		<>
			<button
				data-cy={name}
				name={name}
				type={type}
				onClick={onClick}
				className="w-full h-12 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-green-300 hover:bg-green-400"
			>
				{name}
			</button>
		</>
	);
}
