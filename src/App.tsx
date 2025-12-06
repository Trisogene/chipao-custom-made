import "./App.css";
import { ThemeProvider } from "./components/theme-provider/theme-provider";
import { LanguageProvider } from "./lib/i18n";
import { FormProvider } from "./lib/context";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<LanguageProvider>
			<FormProvider>
				<ThemeProvider defaultTheme="light">
					<Dashboard />
				</ThemeProvider>
			</FormProvider>
		</LanguageProvider>
	);
}

export default App;
