import { useState } from "react";
import Customer from "./customer/Customer";
import { putResources } from "../services/api.service";
import useSendResources from "../hooks/useSendResources";

export default function ModalEdit({ object, setShowModal }) {
	const [data, setData] = useState({ ...object });

	const { sendResources } = useSendResources();

	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		setData({
			...data,
			[event.target.name]: event.target.value,
		});
	}
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			console.log(`${Customer.name.toLowerCase()}/${object.id}`)
			await sendResources(
				putResources,
				`${Customer.name.toLowerCase()}/${object.id}`,
				data
			);
			setShowModal(false);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-auto my-6 mx-auto max-w-3xl">
					{/*content*/}
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						{/*header*/}
						<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
							<h3 className="text-3xl font-semibold">Edit</h3>
							<button
								className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
								onClick={() => setShowModal(false)}
							>
								<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
									×
								</span>
							</button>
						</div>
						<form onSubmit={handleSubmit}>
							{/*body*/}
							{Object.entries(object).map(([key, value]) => (
								<div className="relative p-4 flex" key={key}>
									<label className=" text-gray-700 text-sm font-bold mb-2">
										{key}
									</label>
									<input
										name={key}
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="username"
										type="text"
										defaultValue={value}
										onChange={onChange}
									/>
								</div>
							))}
							{/*footer*/}
							<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
								<button
									className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="button"
									onClick={() => setShowModal(false)}
								>
									Close
								</button>
								<button
									className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="submit"
								>
									Save Changes
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
		</>
	);
}
