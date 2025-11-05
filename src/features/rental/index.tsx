const Rental = () => {
	return (
		<section
			id="rental"
			className="p-8 relative overflow-hidden border-y border-gray-200"
		>
			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-4xl mx-auto">
					{/* Section Divider */}
					<div className="flex items-center justify-center mb-16">
						<div className="h-px bg-linear-to-r from-transparent via-red-600 to-transparent w-full max-w-xs"></div>
						<div className="mx-4 text-red-600 text-2xl">❖</div>
						<div className="h-px bg-linear-to-r from-transparent via-red-600 to-transparent w-full max-w-xs"></div>
					</div>

					{/* Content - Centered */}
					<div className="text-center space-y-6 md:space-y-8">
						<div>
							<h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-2">
								RENTAL SERVICE
							</h2>
							<p className="text-xs sm:text-sm tracking-widest text-gray-600">
								FEEL THE ELEGANCE OF A CUSTOM PIECE — WITH THE FLEXIBILITY OF
								RENTAL.
							</p>
						</div>

						<div className="space-y-3 md:space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 max-w-3xl mx-auto">
							<p>
								<strong>STEP 1:</strong> Request Lookbook to view available
								styles and sizes.
							</p>
							<p>
								<strong>STEP 2:</strong> Book a fitting appointment at our
								studio.
							</p>
							<p>
								<strong>STEP 3:</strong> Pay a refundable deposit and take the
								qipao with you.
							</p>

							<div className="pt-4 border-t border-gray-300 mt-8">
								<p className="font-semibold">Rental period: 2-3 days</p>
								<p className="text-red-600 font-semibold">
									Please return the qipao in original condition (avoid makeup
									stains).
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Rental;
