import { SocialIcon } from "react-social-icons";
import backgroundWoman from "@/assets/images/background-woman.webp";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

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

	return (
		<section
			id="hero"
			className="flex items-center justify-center relative overflow-hidden bg-white px-6 p-8 pt-0"
			style={{ height: "calc(100vh - 75px)" }}
		>
			<div className="flex flex-col items-center justify-center gap-8 md:gap-12 xl:gap-16 max-w-6xl">
				{/* BLOCK 1: Logo + Woman Image + Chinese Text */}
				<FadeIn direction="down" delay={0.1}>
					<div className="relative flex items-center justify-center">
						{/* CHI-PAO Logo on top of image */}
						<div className="relative z-0 h-[40dvh] flex items-center gap-4">
							{/* Background Woman Image */}
							<img
								src={backgroundWoman}
								alt="Background"
								className="absolute h-[50vh] w-auto object-contain opacity-80 z-0"
							/>
							<p
								className="text-[170px] md:text-[185px] lg:text-[200px] tracking-tighter leading-none z-10 text-black logo-rosseta"
								style={{ fontWeight: "200" }}
							>
								CHI-PAO
							</p>

							{/* Vertical Chinese characters on the right */}
							<div className="z-10 flex flex-col text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-normal text-gray-800 font-thin vertical-zh">
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
					<div className="text-center space-y-2 md:space-y-4">
						<h2
							className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide font-thin"
							style={{
								fontFamily: "GeneralSans, sans-serif",
								fontWeight: "200",
							}}
						>
							{t.hero.tagline}
						</h2>
						<div className="space-y-1 md:space-y-2">
							<p className="text-base sm:text-md md:text-lg lg:text-xl tracking-normal text-gray-700 font-light">
								{t.hero.subtitle1}
							</p>
							<p className="text-base sm:text-md md:text-lg lg:text-xl tracking-normal text-gray-700 font-light">
								{t.hero.subtitle2}
							</p>
							<p className="text-base sm:text-md md:text-lg lg:text-xl tracking-normal text-gray-700 font-light">
								{t.hero.subtitle3}
							</p>
						</div>
					</div>
				</FadeIn>

				{/* BLOCK 4: Social Links */}
				<FadeIn direction="up" delay={0.7}>
					<div className="flex flex-col gap-3">
						<div className="flex items-center gap-4 md:gap-6">
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
													key={link.name}
													className="h-9 w-9 rounded-full  p-1 hover:opacity-90 transition duration-200"
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
										style={{ height: 40, width: 40 }}
										bgColor="transparent"
										fgColor="#374151"
										className="hover:opacity-70 transition-opacity duration-300"
									/>
								);
							})}
						</div>
						<Button
							type="submit"
							onClick={() => {
								const target = document.getElementById("contatti");
								target?.scrollIntoView({ block: "start" });
							}}
							className="bg-gray-900 hover:bg-gray-800 text-white font-light py-4 px-16 text-base tracking-[0.15em] uppercase transition-colors"
						>
							{t.hero.contactUs}
						</Button>
					</div>
				</FadeIn>
			</div>
		</section>
	);
};

export default Hero;
