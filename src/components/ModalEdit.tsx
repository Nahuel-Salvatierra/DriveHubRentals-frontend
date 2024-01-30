import { useState } from "react";
import { putResources } from "../services/api.service";
import useSendResources from "../hooks/useSendResources";
import useBackOffice from "../hooks/useBackOffice";
import toast from "react-hot-toast";
import Loading from "./Loading";
import CustomerInputs from "./customer/CustomerInputs";

export default function ModalEdit({ entity, setShowModal }) {
	const [data, setData] = useState({ ...entity });
	const { error, loading, sendResources } = useSendResources();
	const { selectedOption } = useBackOffice();

	const renderForm = () => {
		switch (selectedOption) {
			case "customer":
				return <CustomerInputs data={data} onChange={onChange} />;
			default:
				return null;
		}
	}

	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		setData({
			...data,
			[event.target.name]: event.target.value,
		});
	}
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		await sendResources(putResources, `${selectedOption}/${data.id}`, data);
		error
			? toast.error(`${error.message}`)
			: toast.success(`${selectedOption.toLowerCase()} updated`);
		setShowModal(false);
	};
	return (
		<>
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-[90%] my-6 mx-auto  max-w-3xl">
					{/*content*/}
					<div className="border-0 rounded-lg p-5 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
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
							{renderForm()}
							<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
								<button
									className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="button"
									onClick={() => setShowModal(false)}
								>
									Close
								</button>
								<button
									data-cy={`submit-modal-${data.id}`}
									className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="submit"
								>
									{loading ? <Loading /> : "Save"}
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
