import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider/theme-provider";
import { LanguageProvider } from "./lib/i18n";
import { FormProvider } from "./lib/context";
import Dashboard from "./pages/Dashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { CookieBanner } from "./components/ui/cookie-banner";

function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<LanguageProvider>
			<FormProvider>
				<ThemeProvider defaultTheme="light">
					{children}
					<CookieBanner />
				</ThemeProvider>
			</FormProvider>
		</LanguageProvider>
	);
}

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Language-prefixed routes */}
				<Route
					path="/:lang"
					element={
						<AppLayout>
							<Dashboard />
						</AppLayout>
					}
				/>
				<Route
					path="/:lang/privacy"
					element={
						<AppLayout>
							<PrivacyPolicy />
						</AppLayout>
					}
				/>
				{/* Default redirect to Italian */}
				<Route path="/" element={<Navigate to="/it" replace />} />
				{/* Catch-all redirect */}
				<Route path="*" element={<Navigate to="/it" replace />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
