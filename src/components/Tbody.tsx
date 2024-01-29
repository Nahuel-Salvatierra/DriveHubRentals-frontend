import { DataType } from "../hooks/useFetch";
import ButtonShowModal from "./ButtonShowModalEdit";
import Td from "./Td";

export default function TBody({ fetchedData }: DataType) {
	return (
		<tbody>
			{fetchedData.map((object) => {
				return (
					<tr
						className="bg-white border text-gray-800"
						key={object.id}
					>
						{Object.values(object).map((value, index) => {
							return <Td key={index} item={value} />;
						})}
						<td className="px-2 py-4">
							<ButtonShowModal key={object.id} object={object}/>
						</td>
					</tr>
				);
			})}
		</tbody>
	);
}
