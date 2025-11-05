import aboutUs1 from "@/assets/images/about-us-1.jpg";
import aboutUs2 from "@/assets/images/about-us-2.jpg";

const AboutUs = () => {
	return (
		<section
			id="about"
			className="min-h-screen flex flex-col items-center justify-center bg-white p-8 border-b border-gray-200"
		>
			<div className="container mx-auto">
				{/* Section Title */}
				<div className="text-center mb-8">
					<h2
						className="text-3xl sm:text-4xl md:text-5xl font-thin tracking-wide mb-4"
						style={{
							fontFamily: "GeneralSans",
							fontWeight: "200",
						}}
					>
						ABOUT US
					</h2>
					<p className="text-sm sm:text-base tracking-widest text-gray-600 max-w-2xl mx-auto">
						OUR STORY
					</p>
				</div>

				<div className="max-w-7xl mx-auto">
					<div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center h-full">
						{/* Images Left - 2 photos stacked */}
						<div className="grid grid-rows-2 gap-4 md:gap-6 h-full max-h-[70vh] md:max-h-[80vh]">
							<div className="overflow-hidden rounded-md">
								<img
									src={aboutUs1}
									alt="About Us 1"
									className="w-full h-full object-cover object-[center_20%]"
								/>
							</div>
							<div className="overflow-hidden rounded-md">
								<img
									src={aboutUs2}
									alt="About Us 2"
									className="w-full h-full object-cover object-[center_60%]"
								/>
							</div>
						</div>

						{/* Text Right */}
						<div className="space-y-6 md:space-y-8">
							<h2
								className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin tracking-wide"
								style={{
									fontFamily: "GeneralSans",
									fontWeight: "200",
								}}
							>
								This Story Starts In Milan. Where Else Could It Begin?
							</h2>

							<div className="space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 font-light">
								<p>
									One is a pattern maker from the Far East, who came to Italy to
									learn from master tailors and fell in love with their
									dedication to craftsmanship. For nearly a decade, she has been
									creating garments with the same devotion — timeless, precise,
									made to be cherished.
								</p>

								<p>
									The other is a second-generation Chinese woman, born and
									raised in Italy. After years in Shanghai reconnecting with her
									heritage, she returned home with a dream: to bring the beauty
									of Chinese tradition into modern life — starting with her own
									wedding.
								</p>

								<p>
									Together, we create tailor-made qipao that celebrate your
									story — whether you're discovering Chinese culture,
									reconnecting with it, or making it your own.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
