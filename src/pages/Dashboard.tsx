import Topbar from "@/components/topbar";
import Hero from "@/features/hero";
import AboutUs from "@/features/about-us";
import Story from "@/features/story";
import OurProducts from "@/features/our-products";
import Service from "@/features/service";
import Rental from "@/features/rental";

const Dashboard = () => {
	return (
		<div className="min-h-screen">
			<Topbar />
			<main>
				<Hero />
				<AboutUs />
				<Story />
				<OurProducts />
				<Service />
				<Rental />
			</main>
			<footer className="bg-gray-900 text-white py-12">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-3 gap-8">
						<div>
							<h3 className="text-2xl font-bold text-red-600 mb-4">CHIPAO</h3>
							<p className="text-gray-400">
								Custom Made - Vestiti Su Misura
							</p>
							<p className="text-gray-400 mt-2">
								L'eccellenza della sartoria italiana incontra la tradizione cinese
							</p>
						</div>
						<div>
							<h4 className="font-bold mb-4">Contatti</h4>
							<div className="space-y-2 text-gray-400">
								<p>📧 Email: info@chipao.com</p>
								<p>📱 Tel: +39 123 456 7890</p>
								<p>📍 Indirizzo: Via Roma 123, Milano</p>
							</div>
						</div>
						<div>
							<h4 className="font-bold mb-4">Orari</h4>
							<div className="space-y-2 text-gray-400">
								<p>Lun - Ven: 9:00 - 19:00</p>
								<p>Sabato: 10:00 - 18:00</p>
								<p>Domenica: Chiuso</p>
							</div>
						</div>
					</div>
					<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
						<p>&copy; 2025 CHIPAO Custom Made. Tutti i diritti riservati.</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Dashboard;