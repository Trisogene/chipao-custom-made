import { SocialIcon } from "react-social-icons";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import backgroundWoman from "@/assets/images/background-woman.webp";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

const CATALOG_URL =
	"https://drive.google.com/file/d/1FF6ExAHcK0lQxv0IwZIf-moglwahsnFY/view?usp=drivesdk";

const Hero = () => {
	const { t } = useLanguage();

	const socialLinks = [
		{
			name: "Instagram",
			href: "https://www.instagram.com/chipao.custommade/",
			network: "instagram",
		},
		{
			name: "WhatsApp",
			href: "https://wa.me/393895205478",
			network: "whatsapp",
		},
		{
			name: "WeChat",
			href: "weixin://dl/chat?393895205478",
			network: "wechat",
		},
		{
			name: "RedNote",
			href: "https://xhslink.com/m/6igUptMVNel",
			network: "sharethis",
		},
	];

	const scrollToContact = () => {
		const target = document.getElementById("contatti");
		target?.scrollIntoView({ block: "start", behavior: "smooth" });
	};

	return (
		<section
			id="hero"
			className="min-h-[calc(100dvh-75px)] flex items-center justify-center relative overflow-hidden bg-white px-4 py-6 md:py-8"
		>
			<div className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10 w-full max-w-5xl mx-auto">
				{/* BLOCK 1: Logo + Woman Image + Chinese Text */}
				<FadeIn direction="down" delay={0.1}>
					<div className="relative flex items-center justify-center">
						<div className="relative z-0 h-[35vh] md:h-[40vh] flex items-center justify-center gap-2 md:gap-4">
							{/* Background Woman Image */}
							<img
								src={backgroundWoman}
								alt="Background"
								className="absolute h-[40vh] md:h-[45vh] w-auto object-contain opacity-80 z-0"
							/>
							<p
								className="text-[120px] sm:text-[140px] md:text-[160px] lg:text-[180px] tracking-tighter leading-none z-10 text-black logo-rosseta"
								style={{ fontWeight: "200" }}
							>
								CHI-PAO
							</p>

							{/* Vertical Chinese characters on the right */}
							<div className="z-10 flex flex-col text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-normal text-gray-800 font-thin vertical-zh">
								<span>旗</span>
								<span>袍</span>
								<span>定</span>
								<span>制</span>
							</div>
						</div>
					</div>
				</FadeIn>

				{/* BLOCK 2: Description Text */}
				<FadeIn direction="up" delay={0.3}>
					<div className="text-center space-y-2 md:space-y-3 px-4">
						<h2
							className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-wide font-thin"
							style={{
								fontFamily: "GeneralSans, sans-serif",
								fontWeight: "200",
							}}
						>
							{t.hero.tagline}
						</h2>
						<div className="space-y-0.5 md:space-y-1">
							<p className="text-sm sm:text-base md:text-lg tracking-normal text-gray-600 font-light">
								{t.hero.subtitle1}
							</p>
							<p className="text-sm sm:text-base md:text-lg tracking-normal text-gray-600 font-light">
								{t.hero.subtitle2}
							</p>
							<p className="text-sm sm:text-base md:text-lg tracking-normal text-gray-600 font-light">
								{t.hero.subtitle3}
							</p>
						</div>
					</div>
				</FadeIn>

				{/* BLOCK 3: CTA Buttons - Centered */}
				<FadeIn direction="up" delay={0.5}>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4">
						{/* Primary CTA - Book Consultation */}
						<Button
							onClick={scrollToContact}
							size="lg"
							className="group w-full sm:w-auto bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-medium py-5 px-6 text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
						>
							<Calendar className="mr-2 h-4 w-4 shrink-0" />
							<span className="whitespace-nowrap">
								{t.hero.bookConsultation}
							</span>
							<ArrowRight className="ml-2 h-4 w-4 shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
						</Button>

						{/* Secondary CTA - Explore Catalog */}
						<Button
							asChild
							variant="outline"
							size="lg"
							className="group w-full sm:w-auto border-2 border-gray-300 hover:border-rose-400 hover:bg-rose-50 text-gray-700 hover:text-rose-600 font-medium py-5 px-6 text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 hover:scale-[1.02]"
						>
							<a href={CATALOG_URL} target="_blank" rel="noopener noreferrer">
								<BookOpen className="mr-2 h-4 w-4 shrink-0" />
								<span className="whitespace-nowrap">
									{t.hero.exploreCatalog}
								</span>
								<ArrowRight className="ml-2 h-4 w-4 shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
							</a>
						</Button>
					</div>
				</FadeIn>

				{/* BLOCK 4: Social Links - Centered */}
				<FadeIn direction="up" delay={0.7}>
					<div className="flex items-center justify-center gap-3 md:gap-5">
						{socialLinks.map((link) => {
							if (link.name === "RedNote") {
								return (
									<Button
										key={link.name}
										asChild
										variant="ghost"
										className="p-0 hover:opacity-70 transition-opacity duration-300"
									>
										<a
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											aria-label="RedNote"
										>
											<img
												src="/rednote.png"
												alt="RedNote"
												className="h-8 w-8 md:h-9 md:w-9 rounded-full p-1 hover:opacity-90 transition duration-200"
												style={{ filter: "contrast(175%) saturate(0%)" }}
											/>
										</a>
									</Button>
								);
							}
							return (
								<SocialIcon
									key={link.name}
									url={link.href}
									network={link.network}
									target="_blank"
									rel="noopener noreferrer"
									style={{ height: 36, width: 36 }}
									bgColor="transparent"
									fgColor="#374151"
									className="hover:opacity-70 transition-opacity duration-300"
								/>
							);
						})}
					</div>
				</FadeIn>
			</div>
		</section>
	);
};

export default Hero;
