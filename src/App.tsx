import "./App.css";
import { ThemeProvider } from "./components/theme-provider/theme-provider";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<ThemeProvider defaultTheme="light">
			<Dashboard />
		</ThemeProvider>
	);
}

export default App;
