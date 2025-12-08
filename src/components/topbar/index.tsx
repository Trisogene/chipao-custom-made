import { Menu, X } from "lucide-react";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useLanguage } from "@/lib/i18n";

const Topbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("hero");
	const { language, setLanguage, t } = useLanguage();

	const menuItems = useMemo(
		() => [
			{ id: "hero", label: t.nav.home },
			{ id: "products", label: t.nav.qipao },
			{ id: "about", label: t.nav.about },
			{ id: "story", label: t.nav.culture },
			{ id: "service", label: t.nav.services },
			{ id: "contatti", label: t.nav.contact },
		],
		[t],
	);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView();
			setIsMenuOpen(false);
			setActiveSection(id);
		}
	};

	const handleScroll = useCallback(() => {
		const mainElement = document.querySelector("main");
		if (!mainElement) return;

		const scrollPosition = mainElement.scrollTop;
		const viewportHeight = window.innerHeight;

		const sectionIds = menuItems.map((item) => item.id);

		for (let i = sectionIds.length - 1; i >= 0; i--) {
			const section = document.getElementById(sectionIds[i]);
			if (section) {
				const sectionTop = section.offsetTop - mainElement.offsetTop;
				const sectionBottom = sectionTop + section.offsetHeight;
				const scrollMiddle = scrollPosition + viewportHeight / 3;

				if (scrollMiddle >= sectionTop && scrollMiddle < sectionBottom) {
					setActiveSection(sectionIds[i]);
					break;
				}
			}
		}
	}, [menuItems]);

	useEffect(() => {
		const mainElement = document.querySelector("main");
		if (!mainElement) return;

		handleScroll();
		mainElement.addEventListener("scroll", handleScroll);
		return () => mainElement.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);

	return (
		<header className="sticky top-0 w-full bg-white z-50 border-b border-gray-100">
			<nav className="container mx-auto px-6 py-5">
				<div className="flex items-center justify-between">
					{/* Left - Brand */}
					<div
						className="text-[13px] tracking-[0.2em] text-gray-900 font-light cursor-pointer "
						onClick={() => scrollToSection("hero")}
					>
						CHI-PAO MILANO
					</div>

					{/* Center - Navigation */}
					<div className="hidden md:flex items-center gap-8">
						{menuItems.map((item) => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className={`text-[11px] tracking-[0.15em] transition-all duration-300 font-light ${
									activeSection === item.id
										? "text-gray-900 border-b border-gray-900 pb-0.5"
										: "text-gray-500 hover:text-gray-900"
								}`}
							>
								{item.label}
							</button>
						))}
					</div>

					{/* Right - Language Switcher */}
					<div className="hidden md:flex items-center gap-1 text-[10px] tracking-[0.15em] font-light">
						<button
							onClick={() => setLanguage("it")}
							className={`px-1.5 py-0.5 transition-colors ${
								language === "it"
									? "text-gray-900 border-b border-gray-900"
									: "text-gray-400 hover:text-gray-600"
							}`}
						>
							IT
						</button>
						<span className="text-gray-300">/</span>
						<button
							onClick={() => setLanguage("en")}
							className={`px-1.5 py-0.5 transition-colors ${
								language === "en"
									? "text-gray-900 border-b border-gray-900"
									: "text-gray-400 hover:text-gray-600"
							}`}
						>
							EN
						</button>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden p-2 text-black"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? (
							<X size={20} strokeWidth={1} />
						) : (
							<Menu size={20} strokeWidth={1} />
						)}
					</button>
				</div>
			</nav>

			{/* Mobile Navigation - Overlay */}
			{isMenuOpen && (
				<div className="md:hidden fixed inset-0 top-[61px] bg-white z-50">
					<div className="px-6 py-6 space-y-1">
						{menuItems.map((item) => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className={`block w-full text-left py-3 text-[11px] tracking-[0.15em] transition-colors font-light ${
									activeSection === item.id
										? "text-gray-900 border-l-2 border-gray-900 pl-3"
										: "text-gray-500 pl-3"
								}`}
							>
								{item.label}
							</button>
						))}
						{/* Mobile Language Switcher */}
						<div className="flex items-center gap-3 pt-4 mt-4 border-t border-gray-100">
							<button
								onClick={() => setLanguage("it")}
								className={`text-[11px] tracking-[0.15em] font-light px-2 py-1 ${
									language === "it"
										? "text-gray-900 border-b border-gray-900"
										: "text-gray-400"
								}`}
							>
								Italiano
							</button>
							<button
								onClick={() => setLanguage("en")}
								className={`text-[11px] tracking-[0.15em] font-light px-2 py-1 ${
									language === "en"
										? "text-gray-900 border-b border-gray-900"
										: "text-gray-400"
								}`}
							>
								English
							</button>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

export default Topbar;
