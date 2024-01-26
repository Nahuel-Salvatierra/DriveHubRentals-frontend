import { useFetchOnChange } from "../../hooks/useFetchOnChange";
import { getResources } from "../../services/api.service";
import Table from "../Table";
import Th from "../Th";

export default function RentTable() {
	const { fetchedData } = useFetchOnChange(getResources, "rent");

	return (
		<Table data={fetchedData}>
			<tr>
				<Th text="id" />
				<Th text="carId" />
				<Th text="customerId" />
				<Th text="unitPrice" />
				<Th text="totalPrice" />
				<Th text="paymentMethod" />
				<Th text="paymentStatus" />
				<Th text="startDate" />
				<Th text="endDate" />
				<Th text="created at" />
				<Th text="updated at" />
        <Th text="status" />
				<Th text="actions" />
			</tr>
		</Table>
	);
}
