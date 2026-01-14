import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider/theme-provider";
import { LanguageProvider } from "./lib/i18n";
import { FormProvider } from "./lib/context";
import { CookieBanner } from "./components/ui/cookie-banner";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

function LoadingFallback() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-white">
			<div className="w-8 h-8 border-4 border-gray-100 border-t-gray-900 rounded-full animate-spin" />
		</div>
	);
}

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
			<Suspense fallback={<LoadingFallback />}>
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
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
