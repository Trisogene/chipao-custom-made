import { Card, CardContent } from "@/components/ui/card";

const Service = () => {
	const services = [
		{
			id: 1,
			icon: "📏",
			title: "Consulenza Personalizzata",
			description: "Un incontro individuale per capire le tue esigenze, il tuo stile e le tue preferenze. Ti aiutiamo a scegliere il design perfetto per te."
		},
		{
			id: 2,
			icon: "✂️",
			title: "Presa Misure Professionale",
			description: "I nostri esperti sarti prendono le tue misure con precisione millimetrica per garantire una vestibilità impeccabile."
		},
		{
			id: 3,
			icon: "🧵",
			title: "Selezione Tessuti",
			description: "Ampia scelta di tessuti pregiati, dalle sete più raffinate ai broccati tradizionali, tutti di altissima qualità."
		},
		{
			id: 4,
			icon: "🎨",
			title: "Personalizzazione Design",
			description: "Possibilità di personalizzare ogni dettaglio: colori, ricami, bottoni e finiture secondo i tuoi gusti."
		},
		{
			id: 5,
			icon: "👗",
			title: "Realizzazione Artigianale",
			description: "Ogni abito è realizzato interamente a mano dai nostri maestri sarti con tecniche tradizionali."
		},
		{
			id: 6,
			icon: "✨",
			title: "Prova e Ritocchi",
			description: "Una o più prove intermedie per verificare la vestibilità e apportare eventuali modifiche necessarie."
		}
	];

	return (
		<section id="service" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
						Il Nostro Servizio
					</h2>
					<p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
						Un servizio completo e personalizzato che ti accompagna in ogni fase della creazione del tuo abito su misura
					</p>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
						{services.map((service) => (
							<Card key={service.id} className="hover:shadow-lg transition-shadow duration-300">
								<CardContent className="p-6">
									<div className="text-5xl mb-4">{service.icon}</div>
									<h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
									<p className="text-gray-600 leading-relaxed">{service.description}</p>
								</CardContent>
							</Card>
						))}
					</div>

					{/* Process Section */}
					<div className="bg-white p-8 rounded-lg shadow-lg">
						<h3 className="text-3xl font-bold text-center text-red-600 mb-8">
							Il Processo di Creazione
						</h3>
						
						<div className="space-y-6">
							<div className="flex gap-4">
								<div className="shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
									1
								</div>
								<div>
									<h4 className="font-bold text-lg mb-2">Primo Appuntamento</h4>
									<p className="text-gray-600">Consulenza iniziale, discussione del progetto e presa delle misure</p>
								</div>
							</div>

							<div className="flex gap-4">
								<div className="shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
									2
								</div>
								<div>
									<h4 className="font-bold text-lg mb-2">Scelta dei Materiali</h4>
									<p className="text-gray-600">Selezione di tessuti, colori, ricami e tutti i dettagli personalizzati</p>
								</div>
							</div>

							<div className="flex gap-4">
								<div className="shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
									3
								</div>
								<div>
									<h4 className="font-bold text-lg mb-2">Realizzazione</h4>
									<p className="text-gray-600">I nostri sarti lavorano artigianalmente il tuo abito (tempistiche: 4-6 settimane)</p>
								</div>
							</div>

							<div className="flex gap-4">
								<div className="shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
									4
								</div>
								<div>
									<h4 className="font-bold text-lg mb-2">Prima Prova</h4>
									<p className="text-gray-600">Verifica della vestibilità e eventuali aggiustamenti necessari</p>
								</div>
							</div>

							<div className="flex gap-4">
								<div className="shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
									5
								</div>
								<div>
									<h4 className="font-bold text-lg mb-2">Consegna Finale</h4>
									<p className="text-gray-600">Ritiro del tuo abito perfettamente confezionato e pronto da indossare</p>
								</div>
							</div>
						</div>
					</div>

					{/* Image Gallery */}
					<div className="grid md:grid-cols-2 gap-8 mt-12">
						<img 
							src="/src/assets/images/图片_20250711103910.jpg" 
							alt="Servizio sartoriale 1" 
							className="rounded-lg shadow-lg w-full h-auto object-cover"
						/>
						<img 
							src="/src/assets/images/图片_20250715164514.jpg" 
							alt="Servizio sartoriale 2" 
							className="rounded-lg shadow-lg w-full h-auto object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Service;
