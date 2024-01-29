import { useState } from "react";
import ModalEdit from "./ModalEdit";

export default function ButtonShowModal({ object }: { object: object }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
				<button
			onClick={() => setShowModal(true)}
			data-cy={`show-modal-${object.id}`}
			type="submit"
			className="text-rose-500 text-green font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center"
		>
			Edit
		</button>
		{showModal && <ModalEdit object={object} setShowModal={setShowModal} />}
		</>

	);
}
