import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { useLanguage } from "@/lib/i18n";

const Testimonials = () => {
	const { t } = useLanguage();
	const [currentIndex, setCurrentIndex] = useState(0);
	const reviews = t.testimonials.reviews;

	// Auto-scroll testimonials every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % reviews.length);
		}, 5000);

		return () => clearInterval(interval);
	}, [reviews.length]);

	return (
		<section
			id="testimonianze"
			className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
		>
			<div className="max-w-6xl mx-auto px-4">
				{/* Section Header */}
				<FadeIn direction="up" delay={0.1}>
					<div className="text-center mb-12 md:mb-16">
						<p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
							{t.testimonials.sectionLabel}
						</p>
						<h2
							className="text-2xl md:text-3xl lg:text-4xl tracking-wide text-gray-900 mb-4"
							style={{ fontFamily: "GeneralSans, sans-serif" }}
						>
							{t.testimonials.title}
						</h2>
						<p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto font-light">
							{t.testimonials.subtitle}
						</p>
					</div>
				</FadeIn>

				{/* Testimonials Carousel */}
				<FadeIn direction="up" delay={0.3}>
					<div className="relative">
						{/* Main Card */}
						<div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 max-w-3xl mx-auto">
							{/* Quote Icon */}
							<div className="absolute -top-6 left-8 md:left-12 w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
								<Quote className="w-5 h-5 text-white" />
							</div>

							{/* Content with slide animation */}
							<div className="relative overflow-hidden">
								<div
									className="transition-all duration-700 ease-in-out"
									key={currentIndex}
									style={{
										animation: "fadeSlideIn 0.7s ease-out forwards",
									}}
								>
									{/* Stars */}
									<div className="flex gap-1 mb-6 justify-center">
										{Array.from({ length: reviews[currentIndex].rating }).map(
											(_, i) => (
												<Star
													key={i}
													className="w-5 h-5 fill-amber-400 text-amber-400"
												/>
											),
										)}
									</div>

									{/* Quote */}
									<blockquote className="text-lg md:text-xl lg:text-2xl text-gray-800 text-center font-light leading-relaxed mb-8">
										"{reviews[currentIndex].text}"
									</blockquote>

									{/* Author */}
									<div className="text-center">
										<p className="font-medium text-gray-900 text-lg">
											{reviews[currentIndex].name}
										</p>
										<p className="text-sm text-gray-500">
											{reviews[currentIndex].location}
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Dots Navigation */}
						<div className="flex justify-center gap-2 mt-8">
							{reviews.map((_: (typeof reviews)[number], index: number) => (
								<button
									key={index}
									onClick={() => setCurrentIndex(index)}
									className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
										index === currentIndex
											? "bg-gray-900 w-8"
											: "bg-gray-300 hover:bg-gray-400"
									}`}
									aria-label={`Go to testimonial ${index + 1}`}
								/>
							))}
						</div>
					</div>
				</FadeIn>

				{/* Infinite Scroll Strip */}
				<FadeIn direction="up" delay={0.5}>
					<div className="mt-16 relative">
						<div className="flex overflow-hidden">
							<div className="flex animate-scroll">
								{[...reviews, ...reviews].map((review, index) => (
									<div
										key={index}
										className="flex-shrink-0 w-72 md:w-80 mx-3 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
									>
										<div className="flex gap-0.5 mb-3">
											{Array.from({ length: review.rating }).map((_, i) => (
												<Star
													key={i}
													className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
												/>
											))}
										</div>
										<p className="text-sm text-gray-700 line-clamp-3 mb-4 font-light">
											"{review.text}"
										</p>
										<div className="flex items-center gap-2">
											<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
												<span className="text-xs font-medium text-gray-600">
													{review.name.charAt(0)}
												</span>
											</div>
											<div>
												<p className="text-xs font-medium text-gray-900">
													{review.name}
												</p>
												<p className="text-[10px] text-gray-500">
													{review.location}
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Gradient Overlays */}
						<div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
						<div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
					</div>
				</FadeIn>
			</div>

			{/* CSS for animations */}
			<style>{`
				@keyframes fadeSlideIn {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				@keyframes scroll {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}

				.animate-scroll {
					animation: scroll 30s linear infinite;
				}

				.animate-scroll:hover {
					animation-play-state: paused;
				}

				.line-clamp-3 {
					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}
			`}</style>
		</section>
	);
};

export default Testimonials;
