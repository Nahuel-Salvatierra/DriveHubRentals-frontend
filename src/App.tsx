import { Toaster } from "react-hot-toast";
import "./App.css";
import BackOffice from "./components/BackOffice";
import useStartApp from "./hooks/useStartApp";
import BackOfficeProvider from "./contexts/BackOfficeProvider";

function App(): React.JSX.Element {
	useStartApp();
	return (
		<div className="bg-gray-100">
			<BackOfficeProvider>
				<BackOffice />
			</BackOfficeProvider>
			<Toaster data-cy="toaster" />
		</div>
	);
}

export default App;
