import {
	createContext,
	useContext,
	useState,
	useCallback,
	type ReactNode,
} from "react";
import { translations, type Language, type Translations } from "./translations";

interface LanguageContextType {
	language: Language;
	t: Translations;
	setLanguage: (lang: Language) => void;
	toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const [language, setLanguageState] = useState<Language>("en");

	const setLanguage = useCallback((lang: Language) => {
		setLanguageState(lang);
	}, []);

	const toggleLanguage = useCallback(() => {
		setLanguageState((prev) => (prev === "en" ? "it" : "en"));
	}, []);

	const t = translations[language];

	return (
		<LanguageContext.Provider
			value={{ language, t, setLanguage, toggleLanguage }}
		>
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
