import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
	return (
		<section id="contatti" className="p-8 bg-white border-y border-gray-200">
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
						GET IN TOUCH
					</h2>
					<p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
						WE'D LOVE TO HEAR FROM YOU
					</p>
					<p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
						WHETHER YOU'RE READY TO BOOK A FITTING, ASK A QUESTION, OR SIMPLY
						WANT TO LEARN MORE
					</p>
				</div>

				{/* Form */}
				<div className="max-w-3xl mx-auto">
					<form
						name="contact"
						method="POST"
						data-netlify="true"
						data-netlify-honeypot="bot-field"
						action="/success"
						className="space-y-6"
					>
						<input type="hidden" name="form-name" value="contact" />
						{/* Honeypot field for spam protection */}
						<input type="hidden" name="bot-field" />

						{/* Full Name */}
						<div className="space-y-2">
							<Label htmlFor="fullName" className="text-gray-900 font-medium">
								Full Name <span className="text-red-600">*</span>
							</Label>
							<Input
								type="text"
								id="fullName"
								name="fullName"
								required
								className="border-gray-300 focus-visible:ring-red-600"
							/>
						</div>

						{/* Email */}
						<div className="space-y-2">
							<Label htmlFor="email" className="text-gray-900 font-medium">
								Email Address <span className="text-red-600">*</span>
							</Label>
							<Input
								type="email"
								id="email"
								name="email"
								required
								className="border-gray-300 focus-visible:ring-red-600"
							/>
						</div>

						{/* Phone */}
						<div className="space-y-2">
							<Label htmlFor="phone" className="text-gray-900 font-medium">
								Phone Number{" "}
								<span className="text-gray-500 text-sm font-normal">
									(recommended for appointments)
								</span>
							</Label>
							<Input
								type="tel"
								id="phone"
								name="phone"
								className="border-gray-300 focus-visible:ring-red-600"
							/>
						</div>

						{/* Two Column Grid for Checkboxes */}
						<div className="grid md:grid-cols-2 gap-6">
							{/* What are you looking for */}
							<div className="space-y-3">
								<Label className="text-gray-900 font-medium">
									What are you looking for?
								</Label>
								<div className="space-y-2.5">
									<div className="flex items-center space-x-2">
										<input
											type="checkbox"
											id="custom-qipao"
											name="service"
											value="Custom Qipao"
											className="w-4 h-4 text-red-600 border-gray-400 rounded focus:ring-red-600"
										/>
										<label
											htmlFor="custom-qipao"
											className="text-sm text-gray-700 cursor-pointer"
										>
											Custom Qipao
										</label>
									</div>
									<div className="flex items-center space-x-2">
										<input
											type="checkbox"
											id="wedding-dress"
											name="service"
											value="Wedding Dress"
											className="w-4 h-4 text-red-600 border-gray-400 rounded focus:ring-red-600"
										/>
										<label
											htmlFor="wedding-dress"
											className="text-sm text-gray-700 cursor-pointer"
										>
											Wedding Dress
										</label>
									</div>
									<div className="flex items-center space-x-2">
										<input
											type="checkbox"
											id="qipao-rental"
											name="service"
											value="Qipao Rental"
											className="w-4 h-4 text-red-600 border-gray-400 rounded focus:ring-red-600"
										/>
										<label
											htmlFor="qipao-rental"
											className="text-sm text-gray-700 cursor-pointer"
										>
											Qipao Rental
										</label>
									</div>
									<div className="flex items-center space-x-2">
										<input
											type="checkbox"
											id="accessories"
											name="service"
											value="Accessories"
											className="w-4 h-4 text-red-600 border-gray-400 rounded focus:ring-red-600"
										/>
										<label
											htmlFor="accessories"
											className="text-sm text-gray-700 cursor-pointer"
										>
											Accessories
										</label>
									</div>
									<div className="flex items-center space-x-2">
										<input
											type="checkbox"
											id="other-service"
											name="service"
											value="Other"
											className="w-4 h-4 text-red-600 border-gray-400 rounded focus:ring-red-600"
										/>
										<label
											htmlFor="other-service"
											className="text-sm text-gray-700 cursor-pointer"
										>
											Other (please specify)
										</label>
									</div>
								</div>
							</div>

							{/* How did you hear about us */}
							<div className="space-y-3">
								<Label className="text-gray-900 font-medium">
									How did you hear about us?
								</Label>
								<div className="space-y-2.5">
									<div className="flex items-center space-x-2">
										<input
											type="radio"
											id="instagram"
											name="source"
											value="Instagram"
											className="w-4 h-4 text-red-600 border-gray-400 focus:ring-red-600"
										/>
										<label
											htmlFor="instagram"
											className="text-sm text-gray-700 cursor-pointer"
										>
											Instagram
										</label>
									</div>
									<div className="flex items-center space-x-2">
										<input
											type="radio"
											id="friend"
											name="source"
											value="Friend"
											className="w-4 h-4 text-red-600 border-gray-400 focus:ring-red-600"
										/>
										<label
											htmlFor="friend"
											className="text-sm text-gray-700 cursor-pointer"
										>
											Friend
										</label>
									</div>
									<div className="flex items-center space-x-2">
										<input
											type="radio"
											id="event"
											name="source"
											value="Event"
											className="w-4 h-4 text-red-600 border-gray-400 focus:ring-red-600"
										/>
										<label
											htmlFor="event"
											className="text-sm text-gray-700 cursor-pointer"
										>
											Event
										</label>
									</div>
									<div className="flex items-center space-x-2">
										<input
											type="radio"
											id="other-source"
											name="source"
											value="Other"
											className="w-4 h-4 text-red-600 border-gray-400 focus:ring-red-600"
										/>
										<label
											htmlFor="other-source"
											className="text-sm text-gray-700 cursor-pointer"
										>
											Other
										</label>
									</div>
								</div>
							</div>
						</div>

						{/* Message */}
						<div className="space-y-2">
							<Label htmlFor="message" className="text-gray-900 font-medium">
								Message / Inquiry
							</Label>
							<Textarea
								id="message"
								name="message"
								rows={5}
								className="border-gray-300 focus-visible:ring-red-600 resize-none"
							/>
						</div>

						{/* Submit Button */}
						<div className="text-center pt-4">
							<Button
								type="submit"
								className="bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-12 text-base shadow-lg hover:shadow-xl transition-all duration-200"
							>
								Submit
							</Button>
						</div>

						{/* Additional Info */}
						<div className="border-t border-gray-200 pt-6 space-y-1.5 text-sm text-gray-600 bg-gray-50 -mx-4 md:-mx-6 px-4 md:px-6 py-4 rounded-lg">
							<p>We usually reply within 1-2 working days.</p>
							<p>Our studio is by appointment only — please book in advance.</p>
							<p>
								For urgent inquiries, contact us via WhatsApp or Instagram DM.
							</p>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
