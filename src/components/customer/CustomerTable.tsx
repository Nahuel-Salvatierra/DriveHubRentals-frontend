import useCustomer from "../../hooks/useCustomer";

export default function CustomerTable() {
	const { customers } = useCustomer();

	return (
		<div className="px-20  overflow-x-auto relative pt-10">
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-900 uppercase bg-gray-50">
					<tr className="">
						<th scope="col" className="px-6 py-3">
							Name
						</th>
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
				<tbody>
					{customers.map((customer) => {
						return (
							<tr className="bg-white border-b text-gray-800" key={customer.id}>
								<td className="px-6 py-4">{customer.name}</td>
								<td className="px-6 py-4">{customer.lastName}</td>
								<td className="px-6 py-4">{customer.documentType}</td>
								<td className="px-6 py-4">{customer.documentNumber}</td>
								<td className="px-6 py-4">{customer.birthDate}</td>
								<td className="px-6 py-4">{customer.address}</td>
								<td className="px-6 py-4">{customer.phone}</td>
								<td className="px-6 py-4">{customer.email}</td>
								<td className="px-6 py-4">{customer.createdAt}</td>
								<td className="px-6 py-4">{customer.updatedAt}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
