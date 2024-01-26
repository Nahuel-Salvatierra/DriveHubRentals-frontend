import { useFetchOnChange } from "../../hooks/useFetchOnChange";
import { getResources } from "../../services/api.service";
import Table from "../Table";
import Th from "../Th";

export default function CarTable() {
	const { fetchedData } = useFetchOnChange(getResources, "car");

	return (
		<Table data={fetchedData}>
			<tr>
				<Th text="id" />
				<Th text="brand" />
				<Th text="model" />
				<Th text="year" />
				<Th text="kms" />
				<Th text="color" />
				<Th text="ac" />
				<Th text="passengers" />
				<Th text="transmission" />
				<Th text="created at" />
				<Th text="updated at" />
				<Th text="actions" />
			</tr>
		</Table>
	);
}
