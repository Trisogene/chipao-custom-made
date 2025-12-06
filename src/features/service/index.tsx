import {
	FadeIn,
	StaggerContainer,
	StaggerItem,
} from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { useFormPrefill } from "@/lib/context/FormContext";
import { useLanguage } from "@/lib/i18n";

const Service = () => {
	const { t } = useLanguage();
	const { scrollToContactAndPrefill } = useFormPrefill();

	const handleCustomCTA = () => {
		scrollToContactAndPrefill({
			service: "Qipao Su Misura",
			message:
				"Vorrei iniziare il processo di personalizzazione del mio qipao su misura.",
		});
	};

	const handleRentalCTA = () => {
		scrollToContactAndPrefill({
			service: "Noleggio Qipao",
			message:
				"Vorrei prenotare un appuntamento per il servizio noleggio qipao.",
		});
	};

	return (
		<section id="service" className="py-16 md:py-24 px-8 bg-neutral-50">
			{/* Anchor for rental section */}
			<div id="rental" className="absolute top-0"></div>

			<div className="container mx-auto">
				<div className="max-w-6xl mx-auto">
					{/* Section Header */}
					<FadeIn direction="up">
						<div className="text-center mb-12 md:mb-16">
							<p className="text-sm sm:text-base tracking-[0.3em] text-gray-500 mb-3 uppercase">
								{t.service.sectionLabel}
							</p>
							<h2
								className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide"
								style={{
									fontFamily: "GeneralSans, sans-serif",
									fontWeight: "300",
								}}
							>
								{t.service.title}
							</h2>
						</div>
					</FadeIn>

					{/* Services Grid */}
					<StaggerContainer className="grid lg:grid-cols-2 gap-8 lg:gap-12">
						{/* Customization Service */}
						<StaggerItem>
							<div className="bg-white p-8 md:p-10 border border-gray-100 h-full flex flex-col">
								<div className="mb-8">
									<span className="text-sm tracking-[0.2em] text-gray-500 uppercase">
										{t.service.custom.label}
									</span>
									<h3
										className="text-2xl sm:text-3xl font-light mt-2 mb-3"
										style={{ fontFamily: "GeneralSans, sans-serif" }}
									>
										{t.service.custom.title}
									</h3>
									<p className="text-base text-gray-600 font-light">
										{t.service.custom.subtitle}
									</p>
								</div>

								<div className="space-y-5">
									{t.service.custom.steps.map((step, index) => (
										<div key={index} className="flex gap-4 items-start">
											<span className="text-base font-light text-gray-400 w-6">
												0{index + 1}
											</span>
											<div>
												<p className="text-base text-gray-800 font-medium">
													{step.title}
												</p>
												<p className="text-base text-gray-600 font-light">
													{step.desc}
												</p>
											</div>
										</div>
									))}
								</div>

								<div className="mt-8 pt-6 border-t border-gray-100 grow flex flex-col justify-end">
									<p className="text-base text-gray-700">
										<span className="font-medium">
											{t.service.custom.leadTime}
										</span>{" "}
										{t.service.custom.leadTimeValue}
									</p>
									<p className="text-sm text-gray-500 mt-1 font-light">
										{t.service.custom.leadTimeNote}
									</p>
									<Button
										variant="outline"
										onClick={handleCustomCTA}
										className="mt-6 w-full py-5 text-base border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 tracking-wide"
									>
										{t.service.custom.cta}
									</Button>
								</div>
							</div>
						</StaggerItem>

						{/* Rental Service */}
						<StaggerItem>
							<div className="bg-white p-8 md:p-10 border border-gray-100 h-full flex flex-col">
								<div className="mb-8">
									<span className="text-sm tracking-[0.2em] text-gray-500 uppercase">
										{t.service.rental.label}
									</span>
									<h3
										className="text-2xl sm:text-3xl font-light mt-2 mb-3"
										style={{ fontFamily: "GeneralSans, sans-serif" }}
									>
										{t.service.rental.title}
									</h3>
									<p className="text-base text-gray-600 font-light">
										{t.service.rental.subtitle}
									</p>
								</div>

								<div className="space-y-5">
									{t.service.rental.steps.map((step, index) => (
										<div key={index} className="flex gap-4 items-start">
											<span className="text-base font-light text-gray-400 w-6">
												0{index + 1}
											</span>
											<div>
												<p className="text-base text-gray-800 font-medium">
													{step.title}
												</p>
												<p className="text-base text-gray-600 font-light">
													{step.desc}
												</p>
											</div>
										</div>
									))}
								</div>

								<div className="mt-8 pt-6 border-t border-gray-100 grow flex flex-col justify-end">
									<p className="text-base text-gray-700">
										<span className="font-medium">
											{t.service.rental.period}
										</span>{" "}
										{t.service.rental.periodValue}
									</p>
									<p className="text-sm text-gray-500 mt-1 font-light">
										{t.service.rental.periodNote}
									</p>
									<Button
										variant="outline"
										onClick={handleRentalCTA}
										className="mt-6 w-full py-5 text-base border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 tracking-wide"
									>
										{t.service.rental.cta}
									</Button>
								</div>
							</div>
						</StaggerItem>
					</StaggerContainer>
				</div>
			</div>
		</section>
	);
};

export default Service;
