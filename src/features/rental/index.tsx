import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Rental = () => {
	const rentalOptions = [
		{
			id: 1,
			title: "Noleggio per Eventi",
			description: "Matrimoni, cerimonie, feste tradizionali",
			duration: "1-3 giorni",
			price: "Da €150"
		},
		{
			id: 2,
			title: "Noleggio Fotografico",
			description: "Servizi fotografici professionali e shooting",
			duration: "1 giorno",
			price: "Da €100"
		},
		{
			id: 3,
			title: "Noleggio Settimanale",
			description: "Per eventi prolungati o occasioni speciali",
			duration: "7 giorni",
			price: "Da €300"
		}
	];

	const features = [
		{
			icon: "🧼",
			title: "Lavaggio Incluso",
			description: "Pulizia professionale inclusa nel servizio"
		},
		{
			icon: "📦",
			title: "Consegna e Ritiro",
			description: "Possibilità di consegna a domicilio"
		},
		{
			icon: "🔄",
			title: "Modifiche Rapide",
			description: "Piccoli aggiustamenti se necessario"
		},
		{
			icon: "💎",
			title: "Qualità Premium",
			description: "Solo abiti in perfette condizioni"
		}
	];

	return (
		<section id="rental" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
						Servizio di Noleggio
					</h2>
					<p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
						Non hai bisogno di acquistare? Offriamo un servizio di noleggio per eventi speciali, 
						matrimoni, cerimonie e servizi fotografici
					</p>

					{/* Rental Options */}
					<div className="grid md:grid-cols-3 gap-8 mb-16">
						{rentalOptions.map((option) => (
							<Card key={option.id} className="hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100">
								<CardContent className="p-8">
									<h3 className="text-2xl font-bold text-red-600 mb-4">{option.title}</h3>
									<p className="text-gray-600 mb-4">{option.description}</p>
									<div className="space-y-2 mb-6">
										<div className="flex justify-between items-center">
											<span className="text-gray-500">Durata:</span>
											<span className="font-semibold">{option.duration}</span>
										</div>
										<div className="flex justify-between items-center">
											<span className="text-gray-500">Prezzo:</span>
											<span className="font-bold text-xl text-red-600">{option.price}</span>
										</div>
									</div>
									<Button className="w-full bg-red-600 hover:bg-red-700">
										Richiedi Info
									</Button>
								</CardContent>
							</Card>
						))}
					</div>

					{/* Features Grid */}
					<div className="bg-gray-50 p-8 rounded-lg mb-12">
						<h3 className="text-2xl font-bold text-center mb-8">Cosa Include il Noleggio</h3>
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							{features.map((feature, index) => (
								<div key={index} className="text-center">
									<div className="text-4xl mb-3">{feature.icon}</div>
									<h4 className="font-bold mb-2">{feature.title}</h4>
									<p className="text-sm text-gray-600">{feature.description}</p>
								</div>
							))}
						</div>
					</div>

					{/* Image Showcase */}
					<div className="grid md:grid-cols-2 gap-8 mb-12">
						<img 
							src="/src/assets/images/AF-9.jpg" 
							alt="Noleggio abiti 1" 
							className="rounded-lg shadow-lg w-full h-auto object-cover"
						/>
						<div className="flex flex-col justify-center">
							<h3 className="text-3xl font-bold mb-4 text-gray-900">
								Perché Scegliere il Noleggio?
							</h3>
							<ul className="space-y-4">
								<li className="flex items-start gap-3">
									<span className="text-red-600 text-xl">✓</span>
									<span className="text-gray-700">Indossa un abito di alta qualità senza l'impegno dell'acquisto</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="text-red-600 text-xl">✓</span>
									<span className="text-gray-700">Perfetto per eventi speciali e occasioni uniche</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="text-red-600 text-xl">✓</span>
									<span className="text-gray-700">Ampia scelta di modelli e taglie disponibili</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="text-red-600 text-xl">✓</span>
									<span className="text-gray-700">Servizio completo di pulizia e manutenzione</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="text-red-600 text-xl">✓</span>
									<span className="text-gray-700">Prezzi accessibili e trasparenti</span>
								</li>
							</ul>
						</div>
					</div>

					{/* CTA Section */}
					<div className="bg-red-600 text-white p-12 rounded-lg text-center">
						<h3 className="text-3xl font-bold mb-4">Interessato al Noleggio?</h3>
						<p className="text-xl mb-6 opacity-90">
							Contattaci per verificare la disponibilità e ricevere un preventivo personalizzato
						</p>
						<Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
							Contattaci Ora
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Rental;
