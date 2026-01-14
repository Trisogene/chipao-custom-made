import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import backgroundWoman from "@/assets/images/background-woman.webp";
import wechatIcon from "@/assets/images/wechat.png";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

const CATALOG_URL =
	"https://drive.google.com/file/d/1FF6ExAHcK0lQxv0IwZIf-moglwahsnFY/view?usp=drivesdk";

const Hero = () => {
	const { t } = useLanguage();

	const socialLinks = [
		{
			name: "Instagram",
			href: "https://www.instagram.com/chipao.custommade/",
			icon: "/icons8-instagram-50.png",
		},
		{
			name: "WhatsApp",
			href: "https://wa.me/393895205478",
			icon: "/icons8-whatsapp-50.png",
		},
		{
			name: "WeChat",
			type: "modal",
			icon: "/icons8-wechat-50.png",
			modalContent: (
				<div className="flex flex-col items-center justify-center p-6 space-y-4">
					<img
						src={wechatIcon}
						alt="WeChat QR Code"
						width={300}
						height={300}
						className="w-full max-w-[300px] h-auto rounded-lg shadow-xl border-4 border-gray-50"
					/>
					<p className="text-gray-500 text-sm font-light tracking-wide text-center">
						Scan the QR code to connect with us on WeChat
					</p>
				</div>
			),
		},
		{
			name: "RedNote",
			href: "https://xhslink.com/m/6igUptMVNel",
			icon: "/rednote.png",
		},
	];

	const scrollToContact = () => {
		const target = document.getElementById("contatti");
		target?.scrollIntoView({ block: "start" });
	};

	return (
		<section
			id="hero"
			className="min-h-[calc(100dvh-75px)] flex items-center justify-center relative overflow-hidden bg-white px-4 py-6 md:py-8"
		>
			<div className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10 w-full max-w-5xl mx-auto">
				<FadeIn direction="down" delay={0.1}>
					<div className="relative flex items-center justify-center">
						<div className="relative z-0 h-[35vh] md:h-[40vh] flex items-center justify-center gap-2 md:gap-4">
							<img
								src={backgroundWoman}
								alt="Background"
								width={400}
								height={600}
								fetchPriority="high"
								className="absolute h-[40vh] md:h-[45vh] w-auto object-contain opacity-80 z-0"
							/>
							<p
								className="text-[120px] sm:text-[140px] md:text-[160px] lg:text-[180px] tracking-tighter leading-none z-10 text-black logo-rosseta"
								style={{ fontWeight: "200" }}
							>
								CHI-PAO
							</p>
							<div className="z-10 flex flex-col text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-normal text-gray-800 font-thin vertical-zh">
								<span>旗</span>
								<span>袍</span>
								<span>定</span>
								<span>制</span>
							</div>
						</div>
					</div>
				</FadeIn>

				<FadeIn direction="up" delay={0.3}>
					<div className="text-center space-y-2 md:space-y-3 px-4">
						<h2
							className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-wide font-normal text-gray-900"
							style={{
								fontFamily: "GeneralSans, sans-serif",
							}}
						>
							{t.hero.tagline}
						</h2>
						<div className="space-y-0.5 md:space-y-1">
							<p className="text-sm sm:text-base md:text-lg tracking-normal text-gray-700 font-light">
								{t.hero.subtitle1}
							</p>
							<p className="text-sm sm:text-base md:text-lg tracking-normal text-gray-700 font-light">
								{t.hero.subtitle2}
							</p>
							<p className="text-sm sm:text-base md:text-lg tracking-normal text-gray-700 font-light">
								{t.hero.subtitle3}
							</p>
						</div>
					</div>
				</FadeIn>

				<FadeIn direction="up" delay={0.5}>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4">
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

						<Button
							asChild
							variant="outline"
							size="lg"
							className="group w-full sm:w-auto border-2 border-gray-300 hover:border-rose-400 hover:bg-rose-50 text-gray-900 hover:text-rose-600 font-medium py-5 px-6 text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 hover:scale-[1.02]"
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

				<FadeIn direction="up" delay={0.7}>
					<div className="flex items-center justify-center gap-6 md:gap-8">
						{socialLinks.map((link) => {
							const commonClasses =
								"transition-all duration-300 hover:scale-110 flex items-center justify-center opacity-90 hover:opacity-100";

							const iconContent = (
								<div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center">
									<img
										src={link.icon as string}
										alt={link.name}
										width={36}
										height={36}
										className={`max-w-full max-h-full object-contain ${
											link.name === "RedNote"
												? "rounded-full scale-100 shadow-sm"
												: ""
										} ${link.name === "WeChat" ? "scale-110" : ""} ${
											link.name === "WhatsApp" ? "scale-105" : ""
										}`}
									/>
								</div>
							);

							if (link.type === "modal") {
								return (
									<Dialog key={link.name}>
										<DialogTrigger asChild>
											<button className={commonClasses} aria-label={link.name}>
												{iconContent}
											</button>
										</DialogTrigger>
										<DialogContent className="sm:max-w-md bg-white border-none shadow-2xl">
											<DialogHeader>
												<DialogTitle className="text-center font-light tracking-widest uppercase text-gray-900">
													{link.name}
												</DialogTitle>
											</DialogHeader>
											{link.modalContent}
										</DialogContent>
									</Dialog>
								);
							}

							return (
								<a
									key={link.name}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={link.name}
									className={commonClasses}
								>
									{iconContent}
								</a>
							);
						})}
					</div>
				</FadeIn>
			</div>
		</section>
	);
};

export default Hero;
