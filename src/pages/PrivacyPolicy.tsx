import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Cookie, Database, Mail, Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const privacyTranslations = {
	en: {
		backToHome: "Back to Home",
		title: "Privacy Policy",
		lastUpdated: "Last updated: December 2024",
		intro: {
			title: "Your Privacy Matters",
			text: "At Chipao Custom Made, we are committed to protecting your personal information and your right to privacy. This Privacy Policy describes how we collect, use, and share information when you visit our website or use our services.",
		},
		dataCollection: {
			title: "Information We Collect",
			items: [
				"Contact information (name, email, phone number) when you fill out our contact form",
				"Communication preferences and inquiry details",
				"Technical data such as browser type, device information, and IP address",
				"Usage data about how you interact with our website",
			],
		},
		cookies: {
			title: "Cookies & Tracking",
			text: "We use cookies to enhance your browsing experience. These include:",
			types: [
				{
					name: "Essential Cookies",
					desc: "Necessary for the website to function properly",
				},
				{
					name: "Analytics Cookies",
					desc: "Help us understand how visitors interact with our site",
				},
				{
					name: "Preference Cookies",
					desc: "Remember your language and display preferences",
				},
			],
		},
		usage: {
			title: "How We Use Your Information",
			items: [
				"To respond to your inquiries and provide our services",
				"To schedule appointments and manage bookings",
				"To send relevant updates about your orders (with your consent)",
				"To improve our website and user experience",
			],
		},
		sharing: {
			title: "Information Sharing",
			text: "We do not sell your personal information. We may share data with trusted service providers who assist in operating our website and conducting our business, subject to confidentiality agreements.",
		},
		rights: {
			title: "Your Rights",
			text: "Under GDPR and applicable laws, you have the right to:",
			items: [
				"Access your personal data",
				"Correct inaccurate data",
				"Request deletion of your data",
				"Object to processing of your data",
				"Data portability",
			],
		},
		contact: {
			title: "Contact Us",
			text: "For any privacy-related questions or to exercise your rights, please contact us:",
			email: "chipao.custommade@gmail.com",
		},
	},
	it: {
		backToHome: "Torna alla Home",
		title: "Privacy Policy",
		lastUpdated: "Ultimo aggiornamento: Dicembre 2024",
		intro: {
			title: "La Tua Privacy è Importante",
			text: "In Chipao Custom Made, ci impegniamo a proteggere le tue informazioni personali e il tuo diritto alla privacy. Questa Privacy Policy descrive come raccogliamo, utilizziamo e condividiamo le informazioni quando visiti il nostro sito web o utilizzi i nostri servizi.",
		},
		dataCollection: {
			title: "Informazioni che Raccogliamo",
			items: [
				"Informazioni di contatto (nome, email, telefono) quando compili il nostro modulo di contatto",
				"Preferenze di comunicazione e dettagli delle richieste",
				"Dati tecnici come tipo di browser, informazioni sul dispositivo e indirizzo IP",
				"Dati di utilizzo su come interagisci con il nostro sito",
			],
		},
		cookies: {
			title: "Cookie e Tracciamento",
			text: "Utilizziamo i cookie per migliorare la tua esperienza di navigazione. Questi includono:",
			types: [
				{
					name: "Cookie Essenziali",
					desc: "Necessari per il corretto funzionamento del sito",
				},
				{
					name: "Cookie Analitici",
					desc: "Ci aiutano a capire come i visitatori interagiscono con il sito",
				},
				{
					name: "Cookie di Preferenza",
					desc: "Ricordano le tue preferenze di lingua e visualizzazione",
				},
			],
		},
		usage: {
			title: "Come Utilizziamo le Tue Informazioni",
			items: [
				"Per rispondere alle tue richieste e fornire i nostri servizi",
				"Per programmare appuntamenti e gestire prenotazioni",
				"Per inviare aggiornamenti rilevanti sui tuoi ordini (con il tuo consenso)",
				"Per migliorare il nostro sito e l'esperienza utente",
			],
		},
		sharing: {
			title: "Condivisione delle Informazioni",
			text: "Non vendiamo le tue informazioni personali. Possiamo condividere i dati con fornitori di servizi di fiducia che ci assistono nella gestione del sito e delle nostre attività, soggetti ad accordi di riservatezza.",
		},
		rights: {
			title: "I Tuoi Diritti",
			text: "Ai sensi del GDPR e delle leggi applicabili, hai il diritto di:",
			items: [
				"Accedere ai tuoi dati personali",
				"Correggere dati inesatti",
				"Richiedere la cancellazione dei tuoi dati",
				"Opporti al trattamento dei tuoi dati",
				"Portabilità dei dati",
			],
		},
		contact: {
			title: "Contattaci",
			text: "Per qualsiasi domanda sulla privacy o per esercitare i tuoi diritti, contattaci:",
			email: "chipao.custommade@gmail.com",
		},
	},
};

const PrivacyPolicy = () => {
	const { language, getLocalizedPath } = useLanguage();
	const t = privacyTranslations[language];

	return (
		<div className="min-h-dvh bg-gradient-to-b from-gray-50 to-white">
			{/* Header */}
			<header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
				<div className="container mx-auto px-6 py-4">
					<Link
						to={getLocalizedPath("/")}
						className="inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
					>
						<ArrowLeft size={16} />
						{t.backToHome}
					</Link>
				</div>
			</header>

			{/* Content */}
			<main className="container mx-auto max-w-4xl px-6 py-12">
				{/* Hero Section */}
				<div className="mb-12 text-center">
					<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-amber-500 text-white shadow-lg">
						<Shield size={32} />
					</div>
					<h1 className="mb-3 text-4xl font-light tracking-tight text-gray-900">
						{t.title}
					</h1>
					<p className="text-sm text-gray-500">{t.lastUpdated}</p>
				</div>

				{/* Sections */}
				<div className="space-y-12">
					{/* Intro */}
					<section className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
						<h2 className="mb-4 text-xl font-medium text-gray-900">
							{t.intro.title}
						</h2>
						<p className="leading-relaxed text-gray-600">{t.intro.text}</p>
					</section>

					{/* Data Collection */}
					<section className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
						<div className="mb-4 flex items-center gap-3">
							<Database className="text-rose-500" size={24} />
							<h2 className="text-xl font-medium text-gray-900">
								{t.dataCollection.title}
							</h2>
						</div>
						<ul className="space-y-3">
							{t.dataCollection.items.map((item, index) => (
								<li
									key={index}
									className="flex items-start gap-3 text-gray-600"
								>
									<span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-400" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</section>

					{/* Cookies */}
					<section className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
						<div className="mb-4 flex items-center gap-3">
							<Cookie className="text-amber-500" size={24} />
							<h2 className="text-xl font-medium text-gray-900">
								{t.cookies.title}
							</h2>
						</div>
						<p className="mb-6 text-gray-600">{t.cookies.text}</p>
						<div className="grid gap-4 sm:grid-cols-3">
							{t.cookies.types.map((type, index) => (
								<div
									key={index}
									className="rounded-xl bg-gray-50 p-4 transition-colors hover:bg-gray-100"
								>
									<h3 className="mb-2 font-medium text-gray-900">
										{type.name}
									</h3>
									<p className="text-sm text-gray-600">{type.desc}</p>
								</div>
							))}
						</div>
					</section>

					{/* Usage */}
					<section className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
						<div className="mb-4 flex items-center gap-3">
							<Globe className="text-blue-500" size={24} />
							<h2 className="text-xl font-medium text-gray-900">
								{t.usage.title}
							</h2>
						</div>
						<ul className="space-y-3">
							{t.usage.items.map((item, index) => (
								<li
									key={index}
									className="flex items-start gap-3 text-gray-600"
								>
									<span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</section>

					{/* Sharing */}
					<section className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
						<h2 className="mb-4 text-xl font-medium text-gray-900">
							{t.sharing.title}
						</h2>
						<p className="leading-relaxed text-gray-600">{t.sharing.text}</p>
					</section>

					{/* Rights */}
					<section className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
						<h2 className="mb-4 text-xl font-medium text-gray-900">
							{t.rights.title}
						</h2>
						<p className="mb-4 text-gray-600">{t.rights.text}</p>
						<ul className="space-y-3">
							{t.rights.items.map((item, index) => (
								<li
									key={index}
									className="flex items-start gap-3 text-gray-600"
								>
									<span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</section>

					{/* Contact */}
					<section className="rounded-2xl border border-gray-100 bg-gradient-to-br from-rose-50 to-amber-50 p-8 shadow-sm">
						<div className="mb-4 flex items-center gap-3">
							<Mail className="text-rose-500" size={24} />
							<h2 className="text-xl font-medium text-gray-900">
								{t.contact.title}
							</h2>
						</div>
						<p className="mb-4 text-gray-600">{t.contact.text}</p>
						<a
							href={`mailto:${t.contact.email}`}
							className="inline-flex items-center gap-2 font-medium text-rose-600 transition-colors hover:text-rose-700"
						>
							{t.contact.email}
						</a>
					</section>
				</div>
			</main>

			{/* Footer */}
			<footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-500">
				© {new Date().getFullYear()} Chipao Custom Made. All rights reserved.
			</footer>
		</div>
	);
};

export default PrivacyPolicy;
