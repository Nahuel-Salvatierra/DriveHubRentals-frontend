import { DataType } from "../hooks/useFetchOnChange";
import Td from "./Td";

export default function Table({ fetchedData }: DataType) {
	return (
		<tbody>
			{fetchedData.map((object) => {
				return (
					<tr
						className="bg-white border-b text-gray-800"
						key={object.id}
					>
						{Object.values(object).map((value, index) => {
							return <Td key={index} item={value} />;
						})}
					</tr>
				);
			})}
		</tbody>
	);
}
