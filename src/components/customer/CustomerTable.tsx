import { useFetchOnChange } from "../../hooks/useFetchOnChange";
import { getResources } from "../../services/api.service";
import Table from "../Tbody";

export default function CustomerTable() {
	const { fetchedData } = useFetchOnChange(getResources, "customer", 500);

	return (
		<div className="px-20  overflow-x-auto relative pt-10 sm:rounded-lg">
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-900 uppercase bg-gray-50">
					<tr>
						<th scope="col" className="px-6 py-3">ID</th>
						<th scope="col" className="px-6 py-3">Name</th>
						<th scope="col" className="px-6 py-3">Lastname</th>
						<th scope="col" className="px-6 py-3">Document Type</th>
						<th scope="col" className="px-6 py-3">Document Number</th>
						<th scope="col" className="px-6 py-3">Birth Date</th>
						<th scope="col" className="px-6 py-3">Address</th>
						<th scope="col" className="px-6 py-3">Phone</th>
						<th scope="col" className="px-6 py-3">Email</th>
						<th scope="col" className="px-6 py-3">Created At</th>
						<th scope="col" className="px-6 py-3">Updated At</th>
					</tr>
				</thead>
					{fetchedData && <Table fetchedData={fetchedData}/>}
			</table>
		</div>
	);
}
