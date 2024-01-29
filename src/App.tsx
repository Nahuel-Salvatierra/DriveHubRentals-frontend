import { Toaster } from "react-hot-toast";
import "./App.css";
import BackOffice from "./components/BackOffice";
import useStartApp from "./hooks/useStartApp";

function App(): React.JSX.Element {
	useStartApp();
	return (
		<div className="bg-gray-100">
				<BackOffice />
			<Toaster data-cy="toaster" />
		</div>
	);
}

export default App;
