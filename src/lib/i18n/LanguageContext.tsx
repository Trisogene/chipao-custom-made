import {
	createContext,
	useContext,
	useCallback,
	useMemo,
	useEffect,
	type ReactNode,
} from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { translations, type Language, type Translations } from "./translations";

interface LanguageContextType {
	language: Language;
	t: Translations;
	setLanguage: (lang: Language) => void;
	toggleLanguage: () => void;
	getLocalizedPath: (path?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

const isValidLanguage = (lang: string | undefined): lang is Language => {
	return lang === "en" || lang === "it";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const { lang } = useParams<{ lang: string }>();
	const navigate = useNavigate();
	const location = useLocation();

	// Determine the current language from URL, default to 'it'
	const language: Language = isValidLanguage(lang) ? lang : "it";

	// Update the HTML lang attribute dynamically for SEO and Accessibility
	useEffect(() => {
		document.documentElement.lang = language;
	}, [language]);

	const setLanguage = useCallback(
		(newLang: Language) => {
			// Get the current path without the language prefix
			const pathParts = location.pathname.split("/").filter(Boolean);
			// Remove the language prefix if present
			if (isValidLanguage(pathParts[0])) {
				pathParts.shift();
			}
			const restOfPath = pathParts.join("/");
			const newPath = `/${newLang}${restOfPath ? `/${restOfPath}` : ""}`;
			navigate(newPath);
		},
		[navigate, location.pathname],
	);

	const toggleLanguage = useCallback(() => {
		setLanguage(language === "en" ? "it" : "en");
	}, [language, setLanguage]);

	const getLocalizedPath = useCallback(
		(path = "") => {
			// Ensure path doesn't start with language prefix
			const cleanPath = path.replace(/^\/(en|it)/, "");
			return `/${language}${cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`}`;
		},
		[language],
	);

	const t = translations[language];

	const value = useMemo(
		() => ({
			language,
			t,
			setLanguage,
			toggleLanguage,
			getLocalizedPath,
		}),
		[language, t, setLanguage, toggleLanguage, getLocalizedPath],
	);

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};
