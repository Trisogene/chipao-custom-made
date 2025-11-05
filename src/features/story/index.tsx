import story1 from "@/assets/images/story-1.jpg";
import story2 from "@/assets/images/story-2.jpg";
import story3 from "@/assets/images/story-3.jpg";
import story4 from "@/assets/images/story-4.jpg";

const Story = () => {
	return (
		<section
			id="story"
			className="flex flex-col items-center justify-center p-8 bg-gray-50 border-y border-gray-200"
		>
			{/* Section Title */}
			<div className="text-center mb-8">
				<h2
					className="text-3xl sm:text-4xl md:text-5xl font-thin tracking-wide mb-4"
					style={{
						fontFamily: "GeneralSans",
						fontWeight: "200",
					}}
				>
					OUR CRAFTMANSHIP
				</h2>
				<p className="text-sm sm:text-base tracking-widest text-gray-600 max-w-2xl mx-auto">
					THE ART OF EMBROIDERY
				</p>
			</div>

			<div className="w-full max-w-7xl">
				<div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
					{/* Text Left */}
					<div className="space-y-4 md:space-y-6">
						<h2
							className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin"
							style={{
								fontFamily: "GeneralSans",
								fontWeight: "200",
							}}
						>
							EMBROIDERY & CRAFTMENSHIP
						</h2>

						<p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 font-light">
							The four major regional styles of Chinese embroidery are Suzhou
							embroidery, Hunan embroidery, Guangdong embroidery and Sichuan
							embroidery. All of them are nominated as Chinese Intangible
							Cultural Heritage. The artist embroiders the canvas with vibrant
							colors, bringing the painting to life.
						</p>
					</div>

					{/* Images Right - Grid 2x2 */}
					<div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
						<div className="aspect-square">
							<img
								src={story1}
								alt="Embroidery detail 1"
								className="w-full h-full object-cover rounded-md"
							/>
						</div>
						<div className="aspect-square">
							<img
								src={story2}
								alt="Embroidery detail 2"
								className="w-full h-full object-cover rounded-md"
							/>
						</div>
						<div className="aspect-square">
							<img
								src={story3}
								alt="Embroidery detail 3"
								className="w-full h-full object-cover rounded-md"
							/>
						</div>
						<div className="aspect-square">
							<img
								src={story4}
								alt="Embroidery detail 4"
								className="w-full h-full object-cover rounded-md"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Story;
