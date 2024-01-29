import { useState } from "react";

export default function Td({ item }: { item: string | number }) {

	const [value, setValue] = useState(item);
	
	function onChange(event : React.ChangeEvent<HTMLInputElement>) {
		setValue(event.target.value)
	}

	return <td className="px-2 py-2"><input onChange={onChange} value={value}/></td>;
}
