import { useFetch } from "../../hooks/useFetch";
import { getResources } from "../../services/api.service";
import Table from "../Table";
import Th from "../Th";

export default function CustomerTable() {
	const { fetchedData } = useFetch(getResources, "customer");

	return (
		<Table data={fetchedData}>
			<tr>
				<Th text="id" />
				<Th text="name" />
				<Th text="last name" />
				<Th text="document type" />
				<Th text="document number" />
				<Th text="birth date" />
				<Th text="address" />
				<Th text="phone" />
				<Th text="email" />
				<Th text="created at" />
				<Th text="updated at" />
				<Th text="actions" />
			</tr>
		</Table>
	);
}
