import aboutUs1 from "@/assets/images/about-us-1.jpg";
import aboutUs2 from "@/assets/images/about-us-2.jpg";
import { FadeIn } from "@/components/animations/FadeIn";
import { useLanguage } from "@/lib/i18n";

const AboutUs = () => {
	const { t } = useLanguage();

	return (
		<section
			id="about"
			className="min-h-screen flex flex-col items-center justify-center bg-white py-16 md:py-24 px-8"
		>
			<div className="container mx-auto">
				{/* Section Title */}
				<FadeIn direction="up">
					<div className="text-center mb-12 md:mb-16">
						<p className="text-sm sm:text-base tracking-[0.3em] text-gray-500 mb-3 uppercase">
							{t.about.sectionLabel}
						</p>
						<h2
							className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide"
							style={{
								fontFamily: "GeneralSans, sans-serif",
								fontWeight: "300",
							}}
						>
							{t.about.title}
						</h2>
					</div>
				</FadeIn>

				<div className="max-w-6xl mx-auto">
					<div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center h-full">
						{/* Images Left - 2 photos stacked */}
						<FadeIn direction="left" delay={0.2}>
							<div className="grid grid-rows-2 gap-3 h-full max-h-[70vh] md:max-h-[80vh]">
								<div className="overflow-hidden">
									<img
										src={aboutUs1}
										alt="About Us 1"
										className="w-full h-full object-cover object-[center_20%] hover:scale-105 transition-transform duration-500"
									/>
								</div>
								<div className="overflow-hidden">
									<img
										src={aboutUs2}
										alt="About Us 2"
										className="w-full h-full object-cover object-[center_60%] hover:scale-105 transition-transform duration-500"
									/>
								</div>
							</div>
						</FadeIn>

						{/* Text Right */}
						<FadeIn direction="right" delay={0.3}>
							<div className="space-y-6 md:space-y-8">
								<h3
									className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide leading-relaxed"
									style={{
										fontFamily: "GeneralSans, sans-serif",
										fontWeight: "300",
									}}
								>
									{t.about.subtitle}
								</h3>

								<div className="space-y-5 text-base md:text-lg leading-relaxed text-gray-700 font-light text-justify">
									<p>{t.about.paragraph1}</p>
									<p>{t.about.paragraph2}</p>
									<p>{t.about.paragraph3}</p>
								</div>
							</div>
						</FadeIn>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
