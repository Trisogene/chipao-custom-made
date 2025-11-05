import backgroundWoman from "@/assets/images/background-woman.jpg";

const Hero = () => {
	return (
		<section
			id="hero"
			className="flex items-center justify-center relative overflow-hidden bg-white px-6 p-8 pt-0 border-b border-gray-200"
			style={{ height: "calc(100vh - 75px)" }}
		>
			<div className="flex flex-col items-center justify-center gap-8 md:gap-12 xl:gap-16 max-w-6xl">
				{/* BLOCK 1: Logo + Woman Image + Chinese Text */}
				<div className="relative flex items-center justify-center">
					{/* CHI-PAO Logo on top of image */}
					<div className="relative z-0 h-[40dvh] flex items-center gap-4">
						{/* Background Woman Image */}
						<img
							src={backgroundWoman}
							alt="Background"
							className="absolute h-[50vh]  w-auto object-contain opacity-80 z-0"
						/>
						<p
							className="text-7xl md:text-8xl lg:text-9xl  tracking-tighter leading-none z-10"
							style={{
								fontFamily: "GeneralSans, sans-serif",
								fontWeight: "200",
							}}
						>
							CHI-PAO
						</p>

						{/* Vertical Chinese characters on the right */}
						<div className=" z-10 flex flex-col text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-normal text-gray-800 font-thin">
							<span>旗</span>
							<span>袍</span>
							<span>定</span>
							<span>制</span>
						</div>
					</div>
				</div>

				{/* BLOCK 2: Description Text */}
				<div className="text-center space-y-4 md:space-y-6">
					<h2
						className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-wide font-thin"
						style={{ fontFamily: "GeneralSans, sans-serif", fontWeight: "200" }}
					>
						CUSTOM-MADE QIPAO IN MILANO
					</h2>
					<div className="space-y-2 md:space-y-3">
						<p className="text-sm sm:text-base md:text-lg lg:text-xl tracking-normal text-gray-700 font-light">
							Available in Europe Chinese-style wedding dress
						</p>
						<p className="text-sm sm:text-base md:text-lg lg:text-xl tracking-normal text-gray-700 font-light">
							Ready to make | RTW | Rent
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
