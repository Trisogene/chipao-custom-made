import story1 from "@/assets/images/story-1.jpg";
import story2 from "@/assets/images/story-2.jpg";
import story3 from "@/assets/images/story-3.jpg";
import story4 from "@/assets/images/story-4.jpg";
import pattern1 from "@/assets/images/pattern_1.jpg";
import neck1 from "@/assets/images/neck_1.jpg";
import neck2 from "@/assets/images/neck_2.jpg";
import neck3 from "@/assets/images/neck_3.jpg";
import skirt1 from "@/assets/images/skirt_1.jpg";
import skirt2 from "@/assets/images/skirt_2.jpg";
import {
	FadeIn,
	StaggerContainer,
	StaggerItem,
} from "@/components/animations/FadeIn";
import { useLanguage } from "@/lib/i18n";

const Story = () => {
	const { t } = useLanguage();

	return (
		<section
			id="story"
			className="flex flex-col items-center justify-center py-16 md:py-24 px-8 bg-white"
		>
			{/* Section Title */}
			<FadeIn direction="up">
				<div className="text-center mb-12 md:mb-16">
					<p className="text-sm sm:text-base tracking-[0.3em] text-gray-500 mb-3 uppercase">
						{t.story.sectionLabel}
					</p>
					<h2
						className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide"
						style={{
							fontFamily: "GeneralSans, sans-serif",
							fontWeight: "300",
						}}
					>
						{t.story.title}
					</h2>
				</div>
			</FadeIn>

			<div className="w-full max-w-6xl">
				{/* First Section - Embroidery */}
				<div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-24">
					{/* Text Left */}
					<FadeIn direction="left" delay={0.2}>
						<div className="space-y-6 md:space-y-8 order-2 md:order-1">
							<div className="space-y-5">
								<p className="text-base md:text-lg leading-relaxed text-gray-700 font-light text-justify">
									{t.story.paragraph1}
								</p>
								<p className="text-base md:text-lg leading-relaxed text-gray-700 font-light text-justify">
									{t.story.paragraph2}
								</p>
								<p className="text-base md:text-lg leading-relaxed text-gray-700 font-light text-justify">
									{t.story.paragraph3}
								</p>
							</div>
						</div>
					</FadeIn>

					{/* Images Right - Grid 2x2 */}
					<StaggerContainer className="grid grid-cols-2 gap-2 sm:gap-3 order-1 md:order-2">
						<StaggerItem>
							<div className="aspect-square overflow-hidden">
								<img
									src={story1}
									alt="Embroidery detail 1"
									className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
								/>
							</div>
						</StaggerItem>
						<StaggerItem>
							<div className="aspect-square overflow-hidden">
								<img
									src={story2}
									alt="Embroidery detail 2"
									className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
								/>
							</div>
						</StaggerItem>
						<StaggerItem>
							<div className="aspect-square overflow-hidden">
								<img
									src={story3}
									alt="Embroidery detail 3"
									className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
								/>
							</div>
						</StaggerItem>
						<StaggerItem>
							<div className="aspect-square overflow-hidden">
								<img
									src={story4}
									alt="Embroidery detail 4"
									className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
								/>
							</div>
						</StaggerItem>
					</StaggerContainer>
				</div>

				{/* Second Section - Knot Buttons */}
				<div className="mb-24">
					<FadeIn direction="up">
						<h3
							className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide mb-10 md:mb-12"
							style={{
								fontFamily: "GeneralSans, sans-serif",
								fontWeight: "300",
							}}
						>
							{t.story.knotButtons.title}
						</h3>
					</FadeIn>

					<div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
						{/* Text Left */}
						<FadeIn direction="left" delay={0.2}>
							<div className="space-y-5">
								<p className="text-base md:text-lg leading-relaxed text-gray-700 font-light text-justify">
									{t.story.knotButtons.paragraph1}
								</p>
								<p className="text-base md:text-lg leading-relaxed text-gray-700 font-light text-justify">
									{t.story.knotButtons.paragraph2}
								</p>
							</div>
						</FadeIn>

						{/* Images Right */}
						<FadeIn direction="right" delay={0.3}>
							<div className="space-y-4">
								{/* Top large image */}
								<div className="aspect-[4/3] overflow-hidden">
									<img
										src={pattern1}
										alt="Knot button pattern"
										className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
									/>
								</div>
								{/* Bottom row - 3 images */}
								<div className="grid grid-cols-3 gap-3">
									<div className="aspect-[3/4] overflow-hidden">
										<img
											src={neck1}
											alt="Knot button detail 1"
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
									<div className="aspect-[3/4] overflow-hidden">
										<img
											src={neck2}
											alt="Knot button detail 2"
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
									<div className="aspect-[3/4] overflow-hidden">
										<img
											src={neck3}
											alt="Knot button detail 3"
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
								</div>
							</div>
						</FadeIn>
					</div>
				</div>

				{/* Third Section - Bound Seam & Side Vent */}
				<div>
					<FadeIn direction="up">
						<h3
							className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide mb-10 md:mb-12"
							style={{
								fontFamily: "GeneralSans, sans-serif",
								fontWeight: "300",
							}}
						>
							{t.story.boundSeam.title}
						</h3>
					</FadeIn>

					<div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
						{/* Text Left */}
						<FadeIn direction="left" delay={0.2}>
							<div className="space-y-5">
								<p className="text-base md:text-lg leading-relaxed text-gray-700 font-light text-justify">
									{t.story.boundSeam.paragraph1}
								</p>
								<p className="text-base md:text-lg leading-relaxed text-gray-700 font-light text-justify">
									{t.story.boundSeam.paragraph2}
								</p>
							</div>
						</FadeIn>

						{/* Images Right - 2 images side by side */}
						<FadeIn direction="right" delay={0.3}>
							<div className="grid grid-cols-2 gap-4">
								<div className="aspect-[3/4] overflow-hidden">
									<img
										src={skirt1}
										alt="Side vent detail 1"
										className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
									/>
								</div>
								<div className="aspect-[3/4] overflow-hidden">
									<img
										src={skirt2}
										alt="Side vent detail 2"
										className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
									/>
								</div>
							</div>
						</FadeIn>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Story;
