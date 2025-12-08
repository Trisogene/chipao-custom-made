import {
	createContext,
	useContext,
	useState,
	useCallback,
	type ReactNode,
} from "react";

interface FormPrefillData {
	service?: string;
	product?: string;
	message?: string;
}

interface FormContextType {
	prefillData: FormPrefillData;
	setPrefillData: (data: FormPrefillData) => void;
	clearPrefillData: () => void;
	scrollToContactAndPrefill: (data: FormPrefillData) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
	const [prefillData, setPrefillDataState] = useState<FormPrefillData>({});

	const setPrefillData = useCallback((data: FormPrefillData) => {
		setPrefillDataState(data);
	}, []);

	const clearPrefillData = useCallback(() => {
		setPrefillDataState({});
	}, []);

	const scrollToContactAndPrefill = useCallback((data: FormPrefillData) => {
		setPrefillDataState(data);

		// Scroll to contact section
		const contactSection = document.getElementById("contatti");
		if (contactSection) {
			contactSection.scrollIntoView();

			// Focus on email or message field after scroll
			setTimeout(() => {
				const emailField = document.getElementById("email") as HTMLInputElement;
				const messageField = document.getElementById(
					"message",
				) as HTMLTextAreaElement;

				if (emailField && !emailField.value) {
					emailField.focus();
				} else if (messageField) {
					messageField.focus();
				}
			}, 800);
		}
	}, []);

	return (
		<FormContext.Provider
			value={{
				prefillData,
				setPrefillData,
				clearPrefillData,
				scrollToContactAndPrefill,
			}}
		>
			{children}
		</FormContext.Provider>
	);
};

export const useFormPrefill = () => {
	const context = useContext(FormContext);
	if (!context) {
		throw new Error("useFormPrefill must be used within a FormProvider");
	}
	return context;
};
