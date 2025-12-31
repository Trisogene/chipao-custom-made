import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { useLanguage } from "@/lib/i18n";

const cookieTranslations = {
	en: {
		title: "We value your privacy",
		description:
			"We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking 'Accept All', you consent to our use of cookies.",
		acceptAll: "Accept All",
		acceptEssential: "Essential Only",
		learnMore: "Learn More",
		privacyPolicy: "Privacy Policy",
	},
	it: {
		title: "La tua privacy è importante",
		description:
			"Utilizziamo i cookie per migliorare la tua esperienza di navigazione, fornire contenuti personalizzati e analizzare il nostro traffico. Cliccando 'Accetta Tutti', acconsenti all'uso dei cookie.",
		acceptAll: "Accetta Tutti",
		acceptEssential: "Solo Essenziali",
		learnMore: "Scopri di Più",
		privacyPolicy: "Privacy Policy",
	},
};

const COOKIE_CONSENT_KEY = "chipao-cookie-consent";

type ConsentType = "all" | "essential" | null;

export function CookieBanner() {
	const { language, getLocalizedPath } = useLanguage();
	const t = cookieTranslations[language];
	const [isVisible, setIsVisible] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		// Check if user has already given consent
		const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
		if (!consent) {
			// Delay showing the banner for a smoother UX
			const timer = setTimeout(() => {
				setIsVisible(true);
				setTimeout(() => setIsAnimating(true), 50);
			}, 1000);
			return () => clearTimeout(timer);
		}
	}, []);

	const handleConsent = (type: ConsentType) => {
		localStorage.setItem(COOKIE_CONSENT_KEY, type || "essential");
		setIsAnimating(false);
		setTimeout(() => setIsVisible(false), 300);

		// Here you could trigger analytics or other cookie-dependent services
		if (type === "all") {
			// Enable all cookies/tracking
			console.log("All cookies accepted");
		} else {
			// Only essential cookies
			console.log("Essential cookies only");
		}
	};

	if (!isVisible) return null;

	return (
		<div
			className={`fixed inset-x-0 bottom-0 z-50 p-4 transition-all duration-300 ease-out ${
				isAnimating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
			}`}
		>
			<div className="mx-auto max-w-4xl">
				<div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/95 p-6 shadow-2xl backdrop-blur-xl">
					{/* Decorative gradient accent */}
					<div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-rose-500 via-amber-500 to-rose-500" />

					<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
						{/* Content */}
						<div className="flex-1 space-y-2">
							<h3 className="text-lg font-semibold text-foreground">
								🍪 {t.title}
							</h3>
							<p className="text-sm leading-relaxed text-muted-foreground">
								{t.description}
							</p>
						</div>

						{/* Actions */}
						<div className="flex flex-col gap-2 sm:flex-row sm:items-center">
							<Button
								variant="ghost"
								size="sm"
								onClick={() => handleConsent("essential")}
								className="text-muted-foreground hover:text-foreground"
							>
								{t.acceptEssential}
							</Button>
							<Button
								size="sm"
								onClick={() => handleConsent("all")}
								className="bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-lg transition-all hover:from-rose-700 hover:to-amber-700 hover:shadow-xl"
							>
								{t.acceptAll}
							</Button>
						</div>
					</div>

					{/* Privacy policy link */}
					<div className="mt-4 border-t border-border/50 pt-3">
						<Link
							to={getLocalizedPath("/privacy")}
							className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
						>
							<svg
								className="h-3 w-3"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
								/>
							</svg>
							{t.privacyPolicy}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CookieBanner;
