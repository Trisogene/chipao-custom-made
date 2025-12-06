import ourProduct1 from "@/assets/images/our-product-1.jpg";
import ourProduct2 from "@/assets/images/our-product-2.jpg";
import ourProduct3 from "@/assets/images/our-product-3.jpg";
import {
	FadeIn,
	StaggerContainer,
	StaggerItem,
} from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { useFormPrefill } from "@/lib/context/FormContext";
import { useLanguage } from "@/lib/i18n";

const OurProducts = () => {
	const { t } = useLanguage();
	const { scrollToContactAndPrefill } = useFormPrefill();

	const products = [
		{
			id: 1,
			title: t.products.bridal.title,
			description: t.products.bridal.description,
			image: ourProduct3,
			service: "Abito da Sposa",
		},
		{
			id: 2,
			title: t.products.modern.title,
			description: t.products.modern.description,
			image: ourProduct2,
			service: "Qipao Su Misura",
		},
		{
			id: 3,
			title: t.products.traditional.title,
			description: t.products.traditional.description,
			image: ourProduct1,
			service: "Qipao Su Misura",
		},
	];

	const handleProductCTA = (productTitle: string, service: string) => {
		scrollToContactAndPrefill({
			product: productTitle,
			service: service,
			message: `Sono interessata al ${productTitle}`,
		});
	};

	return (
		<section id="products" className="py-16 md:py-24 px-8 bg-neutral-50">
			<div className="container mx-auto">
				<div className="max-w-6xl mx-auto">
					{/* Section Title */}
					<FadeIn direction="up">
						<div className="text-center mb-12 md:mb-16">
							<p className="text-sm sm:text-base tracking-[0.3em] text-gray-500 mb-3 uppercase">
								{t.products.sectionLabel}
							</p>
							<h2
								className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide"
								style={{
									fontFamily: "GeneralSans, sans-serif",
									fontWeight: "300",
								}}
							>
								{t.products.title}
							</h2>
						</div>
					</FadeIn>

					<StaggerContainer className="grid lg:grid-cols-3 gap-8 lg:gap-10">
						{products.map((product) => (
							<StaggerItem key={product.id}>
								<div className="space-y-5 group">
									{/* Image Container with CTA Overlay */}
									<div className="aspect-3/4 overflow-hidden relative">
										<img
											src={product.image}
											alt={product.title}
											className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
												product.id === 1 ? "object-[center_60%]" : ""
											}`}
										/>
										{/* CTA Overlay */}
										<div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
											<Button
												variant="outline"
												onClick={() =>
													handleProductCTA(product.title, product.service)
												}
												className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 hover:bg-white border-0 text-gray-600 px-6 py-5 text-base tracking-wide"
											>
												{t.products.cta}
											</Button>
										</div>
									</div>
									<h3 className="text-base sm:text-lg tracking-[0.2em] font-medium text-center">
										{product.title}
									</h3>
									<p className="text-base leading-relaxed text-gray-600 font-light text-justify">
										{product.description}
									</p>
								</div>
							</StaggerItem>
						))}
					</StaggerContainer>
				</div>
			</div>
		</section>
	);
};

export default OurProducts;
