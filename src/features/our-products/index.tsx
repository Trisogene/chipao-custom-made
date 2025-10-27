import { Card, CardContent } from "@/components/ui/card";

const OurProducts = () => {
	const products = [
		{
			id: 1,
			title: "Abiti Tradizionali",
			description: "Chipao e abiti tradizionali cinesi realizzati su misura con tessuti pregiati e ricami artigianali",
			image: "/src/assets/images/图片_20241014182512.jpg"
		},
		{
			id: 2,
			title: "Abiti Eleganti",
			description: "Creazioni eleganti per cerimonie ed eventi speciali, perfetti per ogni occasione importante",
			image: "/src/assets/images/图片_20241014183449.jpg"
		},
		{
			id: 3,
			title: "Abiti Moderni",
			description: "Design contemporaneo che unisce tradizione e modernità per un look unico ed esclusivo",
			image: "/src/assets/images/图片_20241014184310.jpg"
		},
		{
			id: 4,
			title: "Alta Sartoria",
			description: "Abiti di alta sartoria realizzati con materiali di prima scelta e attenzione ai dettagli",
			image: "/src/assets/images/图片_20250114123730.jpg"
		},
		{
			id: 5,
			title: "Collezione Esclusiva",
			description: "Pezzi unici della nostra collezione esclusiva, pensati per chi cerca la massima raffinatezza",
			image: "/src/assets/images/图片_20250114124927.jpg"
		},
		{
			id: 6,
			title: "Su Misura",
			description: "Ogni abito è realizzato completamente su misura seguendo le tue preferenze e caratteristiche",
			image: "/src/assets/images/AF-1.jpg"
		}
	];

	return (
		<section id="products" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
						I Nostri Prodotti
					</h2>
					<p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
						Scopri la nostra collezione di abiti su misura, dove ogni capo è un'opera d'arte creata appositamente per te
					</p>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{products.map((product) => (
							<Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
								<div className="aspect-3/4 overflow-hidden">
									<img 
										src={product.image} 
										alt={product.title}
										className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
									/>
								</div>
								<CardContent className="p-6">
									<h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
									<p className="text-gray-600 leading-relaxed">{product.description}</p>
								</CardContent>
							</Card>
						))}
					</div>

					<div className="mt-16 bg-red-50 p-8 rounded-lg">
						<h3 className="text-2xl font-bold text-center text-red-600 mb-4">
							Perché Scegliere i Nostri Prodotti?
						</h3>
						<div className="grid md:grid-cols-3 gap-8 mt-8">
							<div className="text-center">
								<div className="text-4xl mb-4">✨</div>
								<h4 className="font-bold text-lg mb-2">Qualità Superiore</h4>
								<p className="text-gray-600">Utilizziamo solo tessuti pregiati e materiali di prima scelta</p>
							</div>
							<div className="text-center">
								<div className="text-4xl mb-4">👔</div>
								<h4 className="font-bold text-lg mb-2">Su Misura</h4>
								<p className="text-gray-600">Ogni capo è realizzato seguendo le tue misure esatte</p>
							</div>
							<div className="text-center">
								<div className="text-4xl mb-4">🎨</div>
								<h4 className="font-bold text-lg mb-2">Design Unico</h4>
								<p className="text-gray-600">Creazioni esclusive che riflettono il tuo stile personale</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurProducts;
