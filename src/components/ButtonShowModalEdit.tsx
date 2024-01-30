import { useState } from "react";
import ModalEdit from "./ModalEdit";

export default function ButtonShowModal({ entity }: { entity: object }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
				<button
			onClick={() => setShowModal(true)}
			data-cy={`show-modal-${entity.id}`}
			type="submit"
			className="text-lime-700 text-green font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center"
		>
			Edit
		</button>
		{showModal && <ModalEdit entity={entity} setShowModal={setShowModal} />}
		</>

	);
}
