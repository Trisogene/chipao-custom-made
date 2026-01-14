import { useEffect, useState } from "react";
import {
	FadeIn,
	StaggerContainer,
	StaggerItem,
} from "@/components/animations/FadeIn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useFormPrefill } from "@/lib/context/FormContext";
import { useLanguage } from "@/lib/i18n";

const Contact = () => {
	const { t } = useLanguage();
	const { prefillData, clearPrefillData } = useFormPrefill();
	const [message, setMessage] = useState("");
	const [selectedServices, setSelectedServices] = useState<string[]>([]);

	// Handle prefill data from CTA buttons
	useEffect(() => {
		if (prefillData.message) {
			setMessage(prefillData.message);
		}
		if (prefillData.service) {
			// Map service to checkbox value
			const serviceMap: Record<string, string> = {
				"Qipao Su Misura": "Qipao Su Misura",
				"Abito da Sposa": "Abito da Sposa",
				"Noleggio Qipao": "Noleggio Qipao",
			};
			const mappedService = serviceMap[prefillData.service];
			if (mappedService && !selectedServices.includes(mappedService)) {
				setSelectedServices((prev) => [...prev, mappedService]);
			}
		}
		// Clear prefill data after consuming
		if (prefillData.message || prefillData.service) {
			clearPrefillData();
		}
	}, [prefillData, clearPrefillData, selectedServices]);

	const handleServiceChange = (service: string, checked: boolean) => {
		if (checked) {
			setSelectedServices((prev) => [...prev, service]);
		} else {
			setSelectedServices((prev) => prev.filter((s) => s !== service));
		}
	};

	return (
		<section id="contatti" className="py-16 md:py-24 px-8 bg-white">
			<div className="container mx-auto">
				<div className="max-w-4xl mx-auto">
					{/* Header */}
					<FadeIn direction="up">
						<div className="text-center mb-12 md:mb-16">
							<p className="text-sm sm:text-base tracking-[0.3em] text-gray-700 mb-3 uppercase">
								{t.contact.sectionLabel}
							</p>
							<h2
								className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-4"
								style={{
									fontFamily: "GeneralSans, sans-serif",
									fontWeight: "300",
								}}
							>
								{t.contact.title}
							</h2>
							<p className="text-base text-gray-700 font-light max-w-xl mx-auto">
								{t.contact.subtitle}
							</p>
						</div>
					</FadeIn>

					{/* Form */}
					<FadeIn direction="up" delay={0.2}>
						<form
							name="contact"
							method="POST"
							data-netlify="true"
							data-netlify-honeypot="bot-field"
							action="/success"
							className="space-y-8"
						>
							<input type="hidden" name="form-name" value="contact" />
							<input type="hidden" name="bot-field" />

							{/* Name and Email Row */}
							<div className="grid md:grid-cols-2 gap-6">
								<div className="space-y-2">
									<Label
										htmlFor="fullName"
										className="text-sm tracking-[0.15em] text-gray-700 uppercase font-normal"
									>
										{t.contact.form.fullName}{" "}
										<span className="text-gray-500">
											{t.contact.form.required}
										</span>
									</Label>
									<Input
										type="text"
										id="fullName"
										name="fullName"
										required
										placeholder={t.contact.form.fullNamePlaceholder}
										className="border-0 border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-gray-900 transition-colors placeholder:text-gray-300 text-base"
									/>
								</div>

								<div className="space-y-2">
									<Label
										htmlFor="email"
										className="text-sm tracking-[0.15em] text-gray-700 uppercase font-normal"
									>
										{t.contact.form.email}{" "}
										<span className="text-gray-500">
											{t.contact.form.required}
										</span>
									</Label>
									<Input
										type="email"
										id="email"
										name="email"
										required
										placeholder={t.contact.form.emailPlaceholder}
										className="border-0 border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-gray-900 transition-colors placeholder:text-gray-300 text-base"
									/>
								</div>
							</div>

							{/* Phone */}
							<div className="space-y-2">
								<Label
									htmlFor="phone"
									className="text-sm tracking-[0.15em] text-gray-700 uppercase font-normal"
								>
									{t.contact.form.phone}{" "}
									<span className="text-gray-500 normal-case tracking-normal">
										{t.contact.form.phoneNote}
									</span>
								</Label>
								<Input
									type="tel"
									id="phone"
									name="phone"
									placeholder={t.contact.form.phonePlaceholder}
									className="border-0 border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-gray-900 transition-colors placeholder:text-gray-300 text-base"
								/>
							</div>

							{/* Two Column Grid for Options */}
							<div className="grid md:grid-cols-2 gap-8 pt-4">
								{/* What are you looking for */}
								<div className="space-y-4">
									<Label className="text-sm tracking-[0.15em] text-gray-700 uppercase font-normal">
										{t.contact.form.lookingFor}
									</Label>
									<div className="space-y-3">
										{t.contact.form.services.map((service: string) => (
											<div
												key={service}
												className="flex items-center space-x-3"
											>
												<input
													type="checkbox"
													id={service.toLowerCase().replace(/\s+/g, "-")}
													name="service"
													value={service}
													checked={selectedServices.includes(service)}
													onChange={(e) =>
														handleServiceChange(service, e.target.checked)
													}
													className="w-4 h-4 border-gray-300 rounded-sm text-gray-900 focus:ring-gray-900 focus:ring-offset-0"
												/>
												<label
													htmlFor={service.toLowerCase().replace(/\s+/g, "-")}
													className="text-base text-gray-700 font-light cursor-pointer"
												>
													{service}
												</label>
											</div>
										))}
									</div>
								</div>

								{/* How did you hear about us */}
								<div className="space-y-4">
									<Label className="text-sm tracking-[0.15em] text-gray-700 uppercase font-normal">
										{t.contact.form.howFound}
									</Label>
									<div className="space-y-3">
										{t.contact.form.sources.map((source: string) => (
											<div key={source} className="flex items-center space-x-3">
												<input
													type="radio"
													id={`source-${source.toLowerCase()}`}
													name="source"
													value={source}
													className="w-4 h-4 border-gray-300 text-gray-900 focus:ring-gray-900 focus:ring-offset-0"
												/>
												<label
													htmlFor={`source-${source.toLowerCase()}`}
													className="text-base text-gray-700 font-light cursor-pointer"
												>
													{source}
												</label>
											</div>
										))}
									</div>
								</div>
							</div>

							{/* Message */}
							<div className="space-y-2 pt-4">
								<Label
									htmlFor="message"
									className="text-sm tracking-[0.15em] text-gray-700 uppercase font-normal"
								>
									{t.contact.form.message}
								</Label>
								<Textarea
									id="message"
									name="message"
									rows={4}
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									placeholder={t.contact.form.messagePlaceholder}
									className="border-0 border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-gray-900 transition-colors resize-none placeholder:text-gray-300 text-base"
								/>
							</div>

							{/* Privacy Consent - GDPR Required */}
							<div className="space-y-2 pt-4">
								<div className="flex items-start space-x-3">
									<input
										type="checkbox"
										id="privacy-consent"
										name="privacy-consent"
										required
										className="mt-1 w-4 h-4 border-gray-300 rounded-sm text-gray-900 focus:ring-gray-900 focus:ring-offset-0"
									/>
									<label
										htmlFor="privacy-consent"
										className="text-sm text-gray-700 font-light"
									>
										{t.contact.form.privacyConsent}{" "}
										<a
											href="/it/privacy"
											target="_blank"
											rel="noopener noreferrer"
											className="text-gray-900 underline hover:no-underline"
										>
											{t.contact.form.privacyPolicy}
										</a>{" "}
										<span className="text-gray-500">*</span>
									</label>
								</div>
							</div>

							{/* Submit Button */}
							<div className="text-center pt-8">
								<Button
									type="submit"
									className="bg-gray-900 hover:bg-gray-800 text-white font-light py-4 px-16 text-base tracking-[0.15em] uppercase transition-colors"
								>
									{t.contact.form.send}
								</Button>
							</div>
						</form>
					</FadeIn>

					{/* Footer Info */}
					<FadeIn direction="up" delay={0.4}>
						<div className="mt-16 pt-12 border-t border-gray-100 text-center space-y-2">
							<p className="text-base text-gray-700 font-light">
								{t.contact.footer.replyTime}
							</p>
							<p className="text-base text-gray-700 font-light">
								{t.contact.footer.appointmentOnly}
							</p>
							<p className="text-base text-gray-700 font-light">
								{t.contact.footer.urgent}
							</p>
						</div>
					</FadeIn>

					{/* Contact Details */}
					<StaggerContainer className="mt-12 pt-8 border-t border-gray-100">
						<div className="grid md:grid-cols-3 gap-8 text-center">
							<StaggerItem>
								<div>
									<p className="text-sm tracking-[0.2em] text-gray-700 uppercase mb-2">
										{t.contact.footer.emailLabel}
									</p>
									<p className="text-base text-gray-700 font-light">
										{t.contact.footer.email}
									</p>
								</div>
							</StaggerItem>
							<StaggerItem>
								<div>
									<p className="text-sm tracking-[0.2em] text-gray-700 uppercase mb-2">
										{t.contact.footer.locationLabel}
									</p>
									<p className="text-base text-gray-700 font-light">
										{t.contact.footer.location}
									</p>
								</div>
							</StaggerItem>
							<StaggerItem>
								<div>
									<p className="text-sm tracking-[0.2em] text-gray-700 uppercase mb-2">
										{t.contact.footer.followLabel}
									</p>
									<a
										href="https://www.instagram.com/chipao.custommade/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-base text-gray-700 font-light hover:text-gray-900 transition-colors"
									>
										{t.contact.footer.instagram}
									</a>
								</div>
							</StaggerItem>
						</div>
					</StaggerContainer>
				</div>
			</div>
		</section>
	);
};

export default Contact;
