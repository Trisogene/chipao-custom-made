import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n";

const Footer = () => {
	const { t, getLocalizedPath } = useLanguage();

	const handleResetCookies = () => {
		localStorage.removeItem("chipao-cookie-consent");
		window.location.reload();
	};

	return (
		<footer className="bg-gray-100 border-t border-gray-200 py-6 px-6">
			<div className="container mx-auto max-w-6xl">
				<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-700">
					{/* Copyright */}
					<p>
						© {new Date().getFullYear()} Chipao Custom Made.{" "}
						{t.globalFooter.copyright}
					</p>

					{/* Links */}
					<div className="flex items-center gap-4 sm:gap-6">
						<Link
							to={getLocalizedPath("/privacy")}
							className="hover:text-gray-900 transition-colors"
						>
							{t.globalFooter.privacyPolicy}
						</Link>
						<span className="text-gray-400">|</span>
						<button
							type="button"
							onClick={handleResetCookies}
							className="hover:text-gray-900 transition-colors"
						>
							{t.globalFooter.cookieSettings}
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
