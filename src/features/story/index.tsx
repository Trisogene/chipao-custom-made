const Story = () => {
	return (
		<section id="story" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
						La Nostra Storia
					</h2>
					
					<div className="grid md:grid-cols-2 gap-8 mb-12">
						<div className="relative">
							<img 
								src="/src/assets/images/图片_20241011215742.jpg" 
								alt="La nostra storia 1" 
								className="rounded-lg shadow-lg w-full h-auto object-cover"
							/>
						</div>
						<div className="relative">
							<img 
								src="/src/assets/images/图片_20241011215752.jpg" 
								alt="La nostra storia 2" 
								className="rounded-lg shadow-lg w-full h-auto object-cover"
							/>
						</div>
					</div>

					<div className="space-y-8">
						<div className="bg-white p-8 rounded-lg shadow-md">
							<h3 className="text-2xl font-bold text-red-600 mb-4">L'Inizio</h3>
							<p className="text-lg text-gray-700 leading-relaxed">
								La storia di CHIPAO inizia con una passione profonda per la sartoria e il desiderio di creare qualcosa di unico. Fondata da maestri sarti con esperienza decennale, la nostra azienda nasce dall'incontro tra due culture: quella italiana, famosa per la sua eccellenza artigianale, e quella cinese, ricca di tradizione e raffinatezza.
							</p>
						</div>

						<div className="bg-white p-8 rounded-lg shadow-md">
							<h3 className="text-2xl font-bold text-red-600 mb-4">La Tradizione</h3>
							<p className="text-lg text-gray-700 leading-relaxed">
								Ogni capo che realizziamo è il risultato di un processo artigianale meticoloso che rispetta le tecniche tradizionali di sartoria. Dalla scelta dei tessuti pregiati alla presa delle misure, dalla progettazione del modello alle rifiniture finali, ogni fase è curata nei minimi dettagli per garantire un prodotto di altissima qualità.
							</p>
						</div>

						<div className="bg-white p-8 rounded-lg shadow-md">
							<h3 className="text-2xl font-bold text-red-600 mb-4">L'Evoluzione</h3>
							<p className="text-lg text-gray-700 leading-relaxed">
								Nel corso degli anni, CHIPAO si è evoluta mantenendo salde le proprie radici artigianali ma guardando sempre al futuro. Oggi offriamo non solo abiti tradizionali su misura, ma anche servizi di noleggio per eventi speciali, permettendo a tutti di vivere l'esperienza di indossare un capo esclusivo e perfettamente calibrato sulle proprie esigenze.
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-8 mt-8">
							<img 
								src="/src/assets/images/图片_20241011221608.jpg" 
								alt="Dettaglio artigianale 1" 
								className="rounded-lg shadow-lg w-full h-auto object-cover"
							/>
							<img 
								src="/src/assets/images/图片_20241011221622.jpg" 
								alt="Dettaglio artigianale 2" 
								className="rounded-lg shadow-lg w-full h-auto object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Story;
