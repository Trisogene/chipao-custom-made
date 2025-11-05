import ourProduct1 from "@/assets/images/our-product-1.jpg";
import ourProduct2 from "@/assets/images/our-product-2.jpg";
import ourProduct3 from "@/assets/images/our-product-3.jpg";

const OurProducts = () => {
	const products = [
		{
			id: 1,
			title: "BRIDAL QIPAO",
			description:
				"Modern love, timeless tradition. Our bridal qipaos blend the elegance of Chinese craftsmanship with the structure and softness of modern wedding design. These beautiful pieces bridge two worlds. Think ivory silks, subtle embroidery, and silhouettes that speak both languages.",
			image: ourProduct1,
		},
		{
			id: 2,
			title: "MODERN QIPAO",
			description:
				"Qipao for Daily Life. With updated cuts, playful fabrics, and minimalist detailing, our modern qipaos are designed for everyday elegance or bold styling moments. They're fashion with intention — perfect for the confident woman redefining what it means to wear Chinese style today.",
			image: ourProduct2,
		},
		{
			id: 3,
			title: "TRADITIONAL QIPAO",
			description:
				"Grace in its purest form. Traditional qipaos honor the original silhouette and symbolism of Chinese dress, featuring mandarin collars, full-length cuts, and rich colors. Hand-finished embroidery. Ideal for cultural events, tea ceremonies, or those seeking a deeper connection to their roots.",
			image: ourProduct3,
		},
	];

	return (
		<section id="products" className="p-8 bg-gray-50 border-y border-gray-200">
			<div className="container mx-auto px-6">
				<div className="max-w-7xl mx-auto">
					{/* Section Title */}
					<div className="text-center mb-8">
						<h2
							className="text-3xl sm:text-4xl md:text-5xl font-thin tracking-wide mb-4"
							style={{
								fontFamily: "GeneralSans",
								fontWeight: "200",
							}}
						>
							OUR PRODUCTS
						</h2>
						<p className="text-sm sm:text-base tracking-widest text-gray-600 max-w-2xl mx-auto">
							DISCOVER OUR COLLECTION
						</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-12">
						{products.map((product) => (
							<div key={product.id} className="space-y-6">
								<h3 className="text-lg sm:text-xl tracking-widest font-medium text-center">
									{product.title}
								</h3>
								<div className="aspect-auto lg:aspect-3/4 overflow-hidden">
									<img
										src={product.image}
										alt={product.title}
										className={`w-full h-[50dvh] object-cover rounded-md lg:h-full ${
											product.id === 1 ? "object-[center_60%]" : ""
										}`}
									/>
								</div>
								<p className="text-sm sm:text-base leading-relaxed text-gray-700 text-justify">
									{product.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurProducts;
