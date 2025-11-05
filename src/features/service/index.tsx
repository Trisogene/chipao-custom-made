import backgroundWoman from "@/assets/images/background-woman.jpg";

const Service = () => {
	return (
		<section
			id="service"
			className="p-8 relative overflow-hidden border-b border-gray-200 bg-linear-to-b from-white to-gray-50"
		>
			{/* Anchor for rental section */}
			<div id="rental" className="absolute top-0"></div>

			{/* Background Image */}
			<div className="absolute inset-0 z-0">
				<img
					src={backgroundWoman}
					alt="Background"
					className="w-full h-full object-cover opacity-10 grayscale"
				/>
			</div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-7xl mx-auto">
					{/* Section Header */}
					<div className="text-center mb-12">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4">
							OUR SERVICES
						</h2>
						<p className="text-sm sm:text-base tracking-widest text-gray-600 max-w-2xl mx-auto">
							CHOOSE THE SERVICE THAT BEST FITS YOUR NEEDS
						</p>
					</div>

					{/* Services Grid */}
					<div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
						{/* Customization Service */}
						<div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200 hover:shadow-xl transition-shadow">
							<div className="mb-6">
								<div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-xs font-semibold tracking-wider mb-3">
									CUSTOM MADE
								</div>
								<h3 className="text-2xl sm:text-3xl font-medium mb-2">
									Customization Process
								</h3>
								<p className="text-sm text-gray-600 italic">
									We value the collaborative process of creating together
								</p>
							</div>

							<div className="space-y-3 lg:min-h-[360px]">
								<div className="flex gap-3">
									<div className="shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm">
										1
									</div>
									<div>
										<p className="text-sm sm:text-base text-gray-700">
											<strong className="text-gray-900">
												Schedule Appointment
											</strong>
											<br />
											Book your visit at our studio
										</p>
									</div>
								</div>

								<div className="flex gap-3">
									<div className="shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm">
										2
									</div>
									<div>
										<p className="text-sm sm:text-base text-gray-700">
											<strong className="text-gray-900">First Visit</strong>
											<br />
											Measurements, fabric selection, and style discussion
										</p>
									</div>
								</div>

								<div className="flex gap-3">
									<div className="shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm">
										3
									</div>
									<div>
										<p className="text-sm sm:text-base text-gray-700">
											<strong className="text-gray-900">Design Phase</strong>
											<br />
											One-on-one communication for exclusive design
										</p>
									</div>
								</div>

								<div className="flex gap-3">
									<div className="shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm">
										4
									</div>
									<div>
										<p className="text-sm sm:text-base text-gray-700">
											<strong className="text-gray-900">Pattern Making</strong>
											<br />
											Sample production ensuring personalized fit
										</p>
									</div>
								</div>

								<div className="flex gap-3">
									<div className="shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm">
										5
									</div>
									<div>
										<p className="text-sm sm:text-base text-gray-700">
											<strong className="text-gray-900">Fitting</strong>
											<br />
											Try on and review the sample
										</p>
									</div>
								</div>

								<div className="flex gap-3">
									<div className="shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm">
										6
									</div>
									<div>
										<p className="text-sm sm:text-base text-gray-700">
											<strong className="text-gray-900">
												Final Production
											</strong>
											<br />
											Qipao production and delivery
										</p>
									</div>
								</div>
							</div>

							<div className="mt-6 pt-4 border-t border-gray-200">
								<div className="bg-gray-50 rounded-lg p-3 space-y-1.5">
									<p className="text-sm font-semibold text-gray-900">
										⏱️ Lead Time: Starting from 30 days
									</p>
									<p className="text-xs text-red-600 font-medium">
										⚠️ Timeline varies based on style complexity — please discuss
										with us in advance
									</p>
								</div>
							</div>
						</div>

						{/* Rental Service */}
						<div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200 hover:shadow-xl transition-shadow">
							<div className="mb-6">
								<div className="inline-block bg-gray-700 text-white px-4 py-1 rounded-full text-xs font-semibold tracking-wider mb-3">
									RENTAL
								</div>
								<h3 className="text-2xl sm:text-3xl font-medium mb-2">
									Rental Service
								</h3>
								<p className="text-sm text-gray-600 italic">
									Feel the elegance of a custom piece — with flexibility
								</p>
							</div>

							<div className="space-y-3 lg:min-h-[360px]">
								<div className="flex gap-3">
									<div className="shrink-0 w-8 h-8 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center font-bold text-sm">
										1
									</div>
									<div>
										<p className="text-sm sm:text-base text-gray-700">
											<strong className="text-gray-900">
												Request Lookbook
											</strong>
											<br />
											View available styles and sizes
										</p>
									</div>
								</div>

								<div className="flex gap-3">
									<div className="shrink-0 w-8 h-8 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center font-bold text-sm">
										2
									</div>
									<div>
										<p className="text-sm sm:text-base text-gray-700">
											<strong className="text-gray-900">
												Book Fitting Appointment
											</strong>
											<br />
											Visit our studio to try on the qipao
										</p>
									</div>
								</div>

								<div className="flex gap-3">
									<div className="shrink-0 w-8 h-8 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center font-bold text-sm">
										3
									</div>
									<div>
										<p className="text-sm sm:text-base text-gray-700">
											<strong className="text-gray-900">Pick Up</strong>
											<br />
											Pay refundable deposit and take the qipao
										</p>
									</div>
								</div>

								{/* Empty space to match height with Customization steps */}
								<div className="hidden lg:flex space-y-4 opacity-0 pointer-events-none grow"></div>
							</div>

							<div className="mt-6 pt-4 border-t border-gray-200">
								<div className="bg-gray-50 rounded-lg p-3 space-y-1.5">
									<p className="text-sm font-semibold text-gray-900">
										📅 Rental Period: 2-3 days
									</p>
									<p className="text-xs text-red-600 font-medium">
										⚠️ Please return in original condition (avoid makeup stains)
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Service;
