import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Topbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("hero");

	const menuItems = [
		{ id: "hero", label: "HOME" },
		{ id: "products", label: "QIPAO" },
		{ id: "about", label: "CHI SIAMO" },
		{ id: "story", label: "CULTURA" },
		{ id: "service", label: "SERVIZI" },
		{ id: "contatti", label: "CONTATTI" },
	];

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsMenuOpen(false);
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			const sections = menuItems.map((item) => item.id);
			const scrollPosition = window.scrollY + window.innerHeight / 2;

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = document.getElementById(sections[i]);
				if (section && section.offsetTop <= scrollPosition) {
					setActiveSection(sections[i]);
					break;
				}
			}
		};

		handleScroll(); // Call on mount
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
			<nav className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					{/* Left - Brand */}
					<div className="text-xs tracking-[0.15em] text-gray-900">
						CHI-PAO MILANO
					</div>

					{/* Center - Navigation */}
					<div className="hidden md:flex items-center gap-6">
						{menuItems.map((item) => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className={`text-[12px] tracking-wider transition-colors ${
									activeSection === item.id
										? "px-4 py-1.5 border border-gray-900 rounded-md bg-gray-50"
										: "hover:text-gray-600"
								}`}
							>
								{item.label}
							</button>
						))}
					</div>

					{/* Right - Language */}
					<div className="hidden md:block text-xs tracking-wider text-gray-500">
						Italiano/English
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden p-2"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden mt-4 pb-4 space-y-2">
						{menuItems.map((item) => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className={`block w-full text-left py-2 px-4 text-xs tracking-wider transition-colors ${
									activeSection === item.id
										? "border border-gray-900 rounded-md bg-gray-50 font-medium"
										: "font-medium"
								}`}
							>
								{item.label}
							</button>
						))}
					</div>
				)}
			</nav>
		</header>
	);
};

export default Topbar;
